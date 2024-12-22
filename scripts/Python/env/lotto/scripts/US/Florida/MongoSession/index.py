# This script needs to run after midnight preferable in the wee hours after the latest Fantasy5 numbers 
# have been drawn and queried by script

from pymongo import MongoClient
from datetime import datetime, timedelta

from functions.helper import getYestDay
from functions.games import previousDataDays
from functions.fantasy5 import fantasy5
from functions.mongo import sortMongo

from functions.powerball import powerball

client = MongoClient('mongodb://127.0.0.1:27017/')

# Set Mongo Databases
db=client.lotto

####### Current Day #########
# Get current time/convert time into date & day of week
current_time = datetime.now()
todaysDate = current_time.strftime('%-m/%-d/%Y')
dayOfWeek = current_time.strftime('%A')

####### Previous Day #########
# Get yesterdays date & day of the week
yesterdaysDate = (datetime.now() - timedelta(days=1)).strftime('%-m/%-d/%Y')
yesterdayDayOfWeek = getYestDay(dayOfWeek)

previousDayGameData = []

gamerfunc = previousDataDays(yesterdayDayOfWeek, yesterdaysDate)

ff = db.official.find_one({'sessionDate': todaysDate })

# if todays session date is already there, do nothing
if (isinstance(ff, dict)):
    
    x=0
    print('casdhlhasjdh')
else:
   
   # xsasdasd=0
   yester = db.official.find_one({'sessionDate': yesterdaysDate }) 

   for key in yester['games']:
       
       previousDayGameData.append(gamerfunc)
       
   sortMongo(previousDayGameData, yesterdaysDate)


# Setting up current day session
if(dayOfWeek == 'Monday'):

    data = {
    'sessionDate': todaysDate,
        'games': {
            'fantasy5': fantasy5(),
            'powerball': powerball(),
        }
    }

if(dayOfWeek == 'Tuesday'):

    data = {
    'sessionDate': todaysDate,
        'games': {
            'fantasy5': fantasy5()
        }
    }

if(dayOfWeek == 'Wednesday'):

    data = {
    'sessionDate': todaysDate,
        'games': {
            'fantasy5': fantasy5(),
            'powerball': powerball(),
        }
    }

if(dayOfWeek == 'Thursday'):

    data = {
    'sessionDate': todaysDate,
        'games': {
            'fantasy5': fantasy5(),
        }
    }

if(dayOfWeek == 'Friday'):

    data = {
    'sessionDate': todaysDate,
        'games': {
            'fantasy5': fantasy5()
        }
    }

if(dayOfWeek == 'Saturday'):

    data = {
    'sessionDate': todaysDate,
        'games': {
            'fantasy5': fantasy5(),
            'powerball': powerball(),
        }
    }

if(dayOfWeek == 'Sunday'):
    
    data = {
    'sessionDate': todaysDate,
        'games': {
            'fantasy5': fantasy5()
        }
    }

# Insert into MongoDB
res = db.official.insert_one(data)



# Delete after testing
# # # Opening a file
# file1 = open('/home/jgoolsby/SSR/lotteryAlg/scripts/Python/env/lotto/logs.txt', 'a')
# s = "Script successfully ran on " + "\n"
  
# # Writing a string to file
# file1.write(s) 
    
# #Closing file
# file1.close()