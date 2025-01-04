import requests, time, json

from bs4 import BeautifulSoup

from functions.helper import fixDate2, dateIntoSQL

headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
        'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 
        'Accept-Language' : 'en-US,en;q=0.5', 
        'Accept-Encoding' : 'gzip, deflate', 
        'DNT' : '1', # Do Not Track Request Header 
        'Connection' : 'close'
}

def getHotColdEtc():

    page2 = requests.get('http://www.fllott.com/Fantasy-5/intelligent-combo-plus.htm', headers = headers)

    soup2 = BeautifulSoup(page2.content, "html.parser")

    results = soup2.find_all("li")
    
    tst = results[19].text.split('T')

    hotNumbers = tst[1].split(' ')
    coldNumbers = tst[2].split(' ')
    overdueNumbers = tst[3].split(' ')
    repeatNumbers = tst[4].split(' ')

    hot = [hotNumbers[4].replace(',', ''), hotNumbers[5].replace(',', ''), hotNumbers[6].replace(',', ''), hotNumbers[7].replace(',', '')]

    cold = [coldNumbers[4].replace(',', ''), coldNumbers[5].replace(',', ''), coldNumbers[6].replace(',', ''), coldNumbers[7].replace(',', '')]

    overdue = [overdueNumbers[4].replace(',', ''), overdueNumbers[5].replace(',', ''), overdueNumbers[6].replace(',', ''), overdueNumbers[7].replace(',', '')]

    repeats = [repeatNumbers[4].replace(',', ''), repeatNumbers[5].replace(',', ''), repeatNumbers[6].replace(',', ''), repeatNumbers[7].replace(',', '')]

    return [hot, cold, overdue, repeats]

def fantasy5():

    numbers = getHotColdEtc()
    Mid20 = 'https://dev.kovonix.com/api/us/florida/fantasy5/getResultsByCount/midday'
    Eve20 = 'https://dev.kovonix.com/api/us/florida/fantasy5/getResultsByCount/evening'


    # Query Recent Results for Midday
    MidPage = requests.get(Mid20, headers = headers)
    MidResultz = MidPage.json()
    last20Mid = MidResultz['answer']['rows']
    # generateRandomNonPlayedNumber()

    # Query Recent Results for Evening
    EvePage = requests.get(Eve20, headers = headers)
    EveResults = EvePage.json()
    last20Eve = EveResults['answer']['rows']
    
    return {        
            'midday': {
                    'winningNumbers': '',
                    'hot' : numbers[0],
                    'cold' : numbers[1],
                    'overdue' : numbers[2],
                    'repeat' : numbers[3],
                    'recentResults':last20Mid,
                    'predictions' : [
                        {'sequence': '9-14-23-24-35', 'played': 'true', 'quickPick': 'false' }, 
                        {'sequence': '10-16-17-20-25', 'played':'true', 'quickPick': 'false' },
                        {'sequence': '7-18-19-20-26', 'played':'true', 'quickPick': 'false' },
                        {'sequence': '2-7-18-22-23', 'played': 'true', 'quickPick': 'false' }, 
                        {'sequence': '1-10-16-20-25', 'played':'true', 'quickPick': 'false' }, 
                    ],
                    # 'generatedRandom': generateRandomNonPlayedNumber()
            },
            'eve' : {
                    'winningNumbers': '',
                    'hot' : numbers[0],
                    'cold' : numbers[1],
                    'overdue' : numbers[2],
                    'repeat' : numbers[3],
                    'recentResults':last20Eve,
                    'predictions' : [
                        {'sequence': '9-14-23-24-35', 'played': 'true', 'quickPick': 'false' }, 
                        {'sequence': '10-16-17-20-25', 'played':'true', 'quickPick': 'false' },
                        {'sequence': '7-18-19-20-26', 'played':'true', 'quickPick': 'false' },
                        {'sequence': '2-7-18-22-23', 'played': 'true', 'quickPick': 'false' }, 
                        {'sequence': '1-10-16-20-25', 'played':'true', 'quickPick': 'false' }, 
                    ],
                    # 'generatedRandom': generateRandomNonPlayedNumber()
            }
        }

def fantGetDailyResult(prevDate):

    # Convert xx/xx/xxxx date into SQL formate
    sqlformat = dateIntoSQL(prevDate)

    # Gets numbers from data file
    Day_File = '/var/www/lottonew/scripts/Python/env/lotto/scripts/US/Florida/Fantasy5v2/data/Fantasy5Day.py'
    Eve_File = '/var/www/lottonew/scripts/Python/env/lotto/scripts/US/Florida/Fantasy5v2/data/Fantasy5Eve.py'

    # load file and parse into json
    DayNumbers = json.loads(checkAgainstPrevNums(Day_File))
    EveNumbers = json.loads(checkAgainstPrevNums(Eve_File))

    print(sqlformat, DayNumbers['date'], EveNumbers['date'], 'are dates')

    # Check if data retrieved dates are equal to the previous dates
    if sqlformat == DayNumbers["date"] and sqlformat == EveNumbers["date"]:
        return [ DayNumbers, EveNumbers ]
    else:
        print('not same')
        time.sleep(300)
        fantGetDailyResult(prevDate)
    # time sleep, and rerun recursion function
    #     raise TypeError("ERROR: Dates do not match")


def checkAgainstPrevNums(file):
        file1 = open(file, 'r')
        return file1.read()