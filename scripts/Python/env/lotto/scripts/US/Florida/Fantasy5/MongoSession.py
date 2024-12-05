# This script will query from draweffects.com API and 
# build NEW session and input into Mongo
# 
# Script Steps
# For each GAME:
#           Get latest result from draweffects.com
#           Get Hot/Cold numbers
#           Query Last 18 results
# Build Mongo model
# Insert into Mongo session database
# Update previous day winning numbers mongo DB field

# NNED TO CHECK IF SERVERIS ONLINE

# URL = "https://lotto.jgoolsby.com/api/getLast18"

headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
        'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 
        'Accept-Language' : 'en-US,en;q=0.5', 
        'Accept-Encoding' : 'gzip, deflate', 
        'DNT' : '1', # Do Not Track Request Header 
        'Connection' : 'close'
    }

from pymongo import MongoClient

from datetime import datetime, timedelta

import requests, time

from functionsF5 import fixSessionDate

# Connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient('mongodb://127.0.0.1:27017/')

db=client.lotteryAlg

current_time = datetime.now()

todaysDate = current_time.strftime('%-m/%-d/%Y')
yesterdaysDate = (datetime.now() - timedelta(days=1)).strftime('%-m/%-d/%Y')



# from getDailyResult import getDailyResult, getHotColdEtc

# from db_functions import insertIntoDB, updateDBByRow, updateOfficialLotto

# from newFunctions import fixDate, Fantasy5Result, Cash4lifeResult, FF5getResults18, FF5getHotColdEtc, C4lifeResults18, C4lifeHotColdGet, C4lifeHotColdCBget

# Get hold/cold/overdue/repeat numbers


# # 6 Query Last 18 Results
# page = requests.get(URL, headers = headers)
# resultz = page.json()
# last18 = resultz['rows']

# # 7 Build mongo model
# model = {
#     'sessionDate' : todaysDate,
#     'previousPlayDate' : fixDate(result[0]),
#     'winningNumbers' : '',
#     'winningNumbersArr' : '',
#     'hot' : numbers[0],
#     'cold' : numbers[1],
#     'overdue' : numbers[2],
#     'repeat' : numbers[3],
#     'predictions' : [
#         {'sequence': '1-7-12-13-24', 'played': 'true', 'quickPick': 'false' }, 
#         {'sequence': '4-7-17-18-22', 'played':'true', 'quickPick': 'false' },
#         {'sequence': '1-7-13-14-30', 'played':'true', 'quickPick': 'false' }
#     ],
#     'recentResults' : last18
# }

# # 8 Insert into MongoDB
# resssssss = db.sessions.insert_one(model)

# # 9 Split Winning Numbers into Array
# winningNumbersArr = result[1].split('-')

# # 10 Update previous days Winning Numbers field
# updated = db.sessions.update_one({"sessionDate": yesterdaysDate}, { "$set" : {"winningNumbers" : result[1], "winningNumbersArr": winningNumbersArr}})

# # Opening a file
# file1 = open('/home/jgoolsby/Python/environments/lotteryAlg/logs.txt', 'a')
# s = "Script successfully ran on " + str(result[0]) + "\n"
  
# # # Writing a string to file
# file1.write(s) 
    
# # # Closing file
# file1.close()






