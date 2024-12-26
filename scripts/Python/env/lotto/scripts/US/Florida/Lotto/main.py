# This script will run every day at 2 AM
# if not the current day then will exit immediately
#  Draw days - Wed    &   Sat
import datetime, sys

from functions.handleNumbers import handleNums
from functions.grabNumbers import getNumbers




if __name__ == '__main__':

    current_time = datetime.datetime.now()
    todaysDate = current_time.strftime('%-m/%-d/%Y')
    # dayOfWeek = current_time.strftime('%A')
    dayOfWeek = 'Thursday'

    if(dayOfWeek == 'Thursday' or dayOfWeek == 'Sunday'):
        dateNumReg = getNumbers()
        handle = handleNums(dateNumReg)
    else:
        print('exiting')
        sys.exit()