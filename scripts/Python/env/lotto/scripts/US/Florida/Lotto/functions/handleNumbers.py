import json, os

from functions.helper import fixDate, prepareDataLocalFile, checkAgainstPrevNums, writeNewFile

from functions.db import InsertIntoDB

DATA_FILE = 'data/FLlotto.py'

def handleNums(data):
    
    sqlDate = fixDate(data[0])
    
    obj = prepareDataLocalFile( sqlDate, data[1], data[2] )

    localFileData = checkAgainstPrevNums(DATA_FILE)

    gg = json.loads(localFileData)

    if obj["result"]["date"] != gg["date"]:

        lds = json.dumps(obj['result'])
        
        # Insert into DB
        daID = InsertIntoDB('lotto', obj )

        if type(daID) == int:

            # Write new results to file
            writeNewFile(lds, DATA_FILE)

            # F5AddStats(nums)
            return True

    else:
        # Dates are the same
        
        return False