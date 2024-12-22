from bs4 import BeautifulSoup
from pymongo import MongoClient

from selenium import webdriver
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

options = Options()
options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

URL = "https://www.flalottery.com/games/draw-games/fantasy5"

def getNumbersFromSite ():

    with Chrome(options) as browser:

        browser.get(URL)

        html = browser.page_source

        page_soup = BeautifulSoup(html, 'html.parser')

        containers = page_soup.findAll("ul",{"class":"game-numbers game-numbers--fantasy5"})

        # Date mid day
        dates = page_soup.findAll("p",{"class":"draw-date--fantasy5"})

        # Daytime numbers
        numberss = containers[0].find_all('li')
        num1 = numberss[0].text
        num2 = numberss[1].text
        num3 = numberss[2].text
        num4 = numberss[3].text
        num5 = numberss[4].text

        dayNumbers = num1 + '-' + num2 + '-' +  num3  + '-' +  num4  + '-' + num5
        
        # Evening numbers
        numberz = containers[1].find_all('li')
        num11 = numberz[0].text
        num22 = numberz[1].text
        num33 = numberz[2].text
        num44 = numberz[3].text
        num55 = numberz[4].text

        EveNumbers = num11 + '-' + num22 + '-' +  num33  + '-' +  num44  + '-' + num55

        browser.close()

        return [ dates, dayNumbers, EveNumbers, ]