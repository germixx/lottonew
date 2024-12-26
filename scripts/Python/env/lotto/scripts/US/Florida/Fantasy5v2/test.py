# import os, sys

# print(os.path.abspath("test"))

# DB_FILE = os.path.abspath("dbs.py")
# LOGS_FILE = os.path.abspath('logs.txt')

# print(DB_FILE, ' is')
# print(LOGS_FILE, ' log')

# def hello(a):
#     print ("hello and that's your sum:", a )

# if __name__ == "__main__":
#     a = sys.argv[1]
#     hello(a)
from bs4 import BeautifulSoup
# from selenium import webdriver
# from selenium.webdriver import Firefox
# from selenium.webdriver.firefox.options import Options

# options = Options()
# options.add_argument("--headless") 
# options.add_argument('--no-sandbox')
# options.add_argument('--disable-dev-shm-usage')
# driver = webdriver.Firefox(options=options)
# # driver.get("https://www.flalottery.com/games/draw-games/fantasy5")

# with Firefox(options) as browser:

#     browser.get("https://www.flalottery.com/games/draw-games/fantasy5")

#     html = browser.page_source

#     page_soup = BeautifulSoup(html, 'html.parser')

#     containers = page_soup.findAll("ul",{"class":"game-numbers game-numbers--fantasy5"})

#     print(containers, ' is containers')
 # Date mid day
# dates = page_soup.findAll("p",{"class":"draw-date--fantasy5"})
# print(containers, ' is containers')
# numberss = containers[0].find_all('li')
# print(dates, numberss, ' is html')
# driver.quit()

# from selenium import webdriver                  # Import selenium into your program
# from selenium.webdriver.common.keys import Keys # Import keys of selenium web driver
# import geckodriver_autoinstaller                # import Geckodriver into your program
# geckodriver_autoinstaller.install()             # Get the latest version every day on 1st excution of your program
# driver = webdriver.Firefox()                    # initiate the firefox driver 
# driver.get("https://www.msn.com")
# print(driver.title, ' is title')



from selenium import webdriver
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

options = Options()
options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
# driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

URL = "https://www.flalottery.com/games/draw-games/fantasy5"

with Chrome(options) as browser:

        browser.get(URL)

        html = browser.page_source

        page_soup = BeautifulSoup(html, 'html.parser')

        containers = page_soup.findAll("ul",{"class":"game-numbers game-numbers--fantasy5"})

        # Date mid day
        dates = page_soup.findAll("p",{"class":"draw-date--fantasy5"})

        # Daytime numbers
        numberss = containers[0].find_all('li')

        print(numberss, ' is numberss')