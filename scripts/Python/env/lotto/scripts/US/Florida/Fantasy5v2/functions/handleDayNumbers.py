import json, os

from functions.helper import fixDate, prepareDataLocalFile, checkAgainstPrevNums, writeNewFile

from functions.db import InsertIntoDB

DATA_FILEday = os.path.abspath("data/Fantasy5Day.py")

def handleDayNumbs(date, nums):

    daySQLdate = fixDate(date)

    obj = prepareDataLocalFile(daySQLdate, nums)

    localFileData = checkAgainstPrevNums(DATA_FILEday)

    gg = json.loads(localFileData)

    if obj["result"]["date"] != gg["date"]:

        # Parse into string
        lds = json.dumps(obj["result"])
                
        # Insert into DB
        daID = InsertIntoDB('midday', obj)

        if type(daID) == int:

            # Write new results to file
            writeNewFile(lds, DATA_FILEday)

            # F5AddStats(nums)
            return True

    else:
        # Dates are the same
        
        return False



