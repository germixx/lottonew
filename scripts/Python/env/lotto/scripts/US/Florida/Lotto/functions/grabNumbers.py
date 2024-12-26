from bs4 import BeautifulSoup
# from pymongo import MongoClient

from selenium import webdriver
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

options = Options()
options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')

URL = "https://floridalottery.com/games/draw-games/florida-lotto"

def getNumbers():

    with Chrome(options) as browser:

        browser.get(URL)

        html = browser.page_source

        page_soup = BeautifulSoup(html, 'html.parser')

        regPlay = page_soup.findAll("ul",{"class":"game-numbers game-numbers--lotto"})
        doublePlay = page_soup.findAll("ul",{"class":"game-numbers--double-play"})
        
        # Date
        dates = page_soup.findAll("p",{"class":"draw-date"})
        date = dates[0].text

        regNumbers = regPlay[0].find_all('li')
        num1 = regNumbers[0].text
        num2 = regNumbers[1].text
        num3 = regNumbers[2].text
        num4 = regNumbers[3].text
        num5 = regNumbers[4].text
        num6 = regNumbers[5].text

        regNumber = num1 + '-' + num2 + '-' + num3 + '-' + num4 + '-' + num5 + '-' + num6

        doublePlayNums = doublePlay[0].find_all('li')
        dblnum1 = doublePlayNums[0].text
        dblnum2 = doublePlayNums[1].text
        dblnum3 = doublePlayNums[2].text
        dblnum4 = doublePlayNums[3].text
        dblnum5 = doublePlayNums[4].text
        dblnum6 = doublePlayNums[5].text

        doublePlayNumber = dblnum1 + '-' + dblnum2 + '-' + dblnum3 + '-' + dblnum4 + '-' + dblnum5 + '-' + dblnum6

        browser.close()

        return [ date, regNumber, doublePlayNumber ]