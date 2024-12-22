import time, sys

URL = "https://www.flalottery.com/games/draw-games/fantasy5"

from functions.main import getNumbersFromSite
from functions.handleDayNumbers import handleDayNumbs
from functions.handleEveNumbers import handleEveNumbs

def getDaySession():

        nums = getNumbersFromSite()

        res = handleDayNumbs(nums[0][0].text, nums[1])

        if res:
            print('exiting')
            sys.exit()
            return True
        else:
            print('sleeping for 1800 seconds')
            time.sleep(900)
            getDaySession()

def getEveSession():

        nums = getNumbersFromSite()

        res = handleEveNumbs(nums[0][1].text, nums[2])

        if res:
            print('exiting')
            sys.exit()
            return True
        else:
            print('sleeping for 1800 seconds')
            time.sleep(900)
            getEveSession()

if __name__ == '__main__':
    
    # Get session parameter
    session = sys.argv[1]

    if session == 'mid':

        # run day session
        mids = getDaySession()

    elif session == 'eve':

        eves = getEveSession()

    else:
        print('script running without session parameter')
        sys.exit()
