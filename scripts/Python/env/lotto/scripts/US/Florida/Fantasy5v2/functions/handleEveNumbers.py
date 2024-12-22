import os, json

from functions.helper import fixDate, prepareDataLocalFile, checkAgainstPrevNums, writeNewFile

from functions.db import InsertIntoDB

DATA_FILEeve = os.path.abspath("data/Fantasy5Eve.py")

def handleEveNumbs(date, nums):

    # correct SQL date
    eveSQLdate = fixDate(date)
    
    # Put into correct format
    obj = prepareDataLocalFile(eveSQLdate, nums)
    
    # load data file
    verify = checkAgainstPrevNums(DATA_FILEeve)

    # Check against file
    gg = json.loads(verify)
    
    # Compare previous results
    if obj["result"]["date"] != gg["date"]:

        # # Parse into string
        lds = json.dumps(obj["result"])
        
        # insert into DB
        daID = InsertIntoDB('evening', obj)

        if type(daID) == int:

            # # Write new results to file
            writeNewFile(lds, DATA_FILEeve)
            
            # F5AddStats(nums)
            return True

    else:
        return False

