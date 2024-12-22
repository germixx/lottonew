import requests, datetime, json

from bs4 import BeautifulSoup

from functions.helper import fixDate2, dateIntoSQL

URL2 = "http://www.fllott.com/Powerball/intelligent-combo-plus.htm"

headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
        'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 
        'Accept-Language' : 'en-US,en;q=0.5', 
        'Accept-Encoding' : 'gzip, deflate', 
        'DNT' : '1', # Do Not Track Request Header 
        'Connection' : 'close'
}

def getHotColdEtc():

    page2 = requests.get(URL2, headers = headers)

    soup2 = BeautifulSoup(page2.content, "html.parser")

    results = soup2.find_all("li")

    tst = results[19].text.split('T')

    hotNumbers = tst[1].split(' ')
    coldNumbers = tst[2].split(' ')
    overdueNumbers = tst[3].split(' ')
    repeatNumbers = tst[4].split(' ')
    winningPairs = tst[5].split(' ')
    hotPB = tst[6].split(' ')
    coldPB = tst[7].split(' ')
    overduePB = tst[8].split(' ')
    repeatPB = tst[9].split(' ')

    pairs = [winningPairs[4], winningPairs[5], winningPairs[6], winningPairs[7], winningPairs[8], winningPairs[9]]

    hot = [hotNumbers[4].replace(',', ''), hotNumbers[5].replace(',', ''), hotNumbers[6].replace(',', ''), hotNumbers[7].replace(',', '')]

    cold = [coldNumbers[4].replace(',', ''), coldNumbers[5].replace(',', ''), coldNumbers[6].replace(',', ''), coldNumbers[7].replace(',', '')]

    overdue = [overdueNumbers[4].replace(',', ''), overdueNumbers[5].replace(',', ''), overdueNumbers[6].replace(',', ''), overdueNumbers[7].replace(',', '')]

    repeats = [repeatNumbers[4].replace(',', ''), repeatNumbers[5].replace(',', ''), repeatNumbers[6].replace(',', ''), repeatNumbers[7].replace(',', '')]

    MBhot = [hotPB[6], hotPB[7]]

    MBcold = [coldPB[6], coldPB[7]]
    
    MBover = [overduePB[6], overduePB[7]]

    MBrepeat = [repeatPB[6], repeatPB[7]]
    
    return [hot, cold, overdue, repeats, pairs, MBhot, MBcold, MBover, MBrepeat]

def powerballGetDaily():
    # get site
    page = requests.get(URL, headers = headers)

    # parse data
    soup = BeautifulSoup(page.content, "html.parser")

    gameNumb = soup.find_all('div', class_="gamePageNumbers")

    fff = gameNumb[0].find_all('span')
    temp= gameNumb[0].find_all('p')
    n1 = fff[0].text
    n2 = fff[2].text
    n3 = fff[4].text
    n4 = fff[6].text
    n5 = fff[8].text
    n6 = fff[10].text
    dates = temp[4].text
    seq = n1 + "-" + n2 + "-" + n3 + "-" + n4 + "-" + n5 + " " + n6

    return { 'powerball': {'date': fixDate2(dates), 'winningNumbers': seq }}

def powerball():
    
    numbers = getHotColdEtc()

    # 6 Query Last 18 Results
    # page = requests.get(URL3, headers = headers)
    # resultz = page.json()
    # last18 = resultz['rows']

    return {
                    'winningNumbers': '',
                    'hot': numbers[0],
                    'cold': numbers[1],
                    'overdue': numbers[2],
                    'repeat': numbers[3],
                    'pairs': numbers[4],
                    'PBhot': numbers[5],
                    'PBcold': numbers[6],
                    'PBoverdue': numbers[7],
                    'PBrepeat': numbers[8],
                    # 'recentResults': last18,
                    'predictions': []
        }