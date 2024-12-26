def writeNewFile(s, filez):

        file1 = open(filez, 'w')  
        
        # # Writing a string to file
        file1.write(s) 
        
        # # Closing file
        file1.close()

        return

def checkAgainstPrevNums(file):
        file1 = open(file, 'r')
        return file1.read()

def fixDate(date):
    
    def adjustMth(month):
        
        match month:
            case 'January' | 'Jan':
                return '01'
            case 'February' | 'Feb':
                return '02'
            case 'March' | 'Mar':
                return '03'
            case 'April' | 'Apr':
                return '04'
            case 'May':
                return '05'
            case 'June' | 'Jun':
                return '06'
            case 'July' | 'Jul':
                return '07'
            case 'August' | 'Aug':
                return '08'
            case 'September' | 'Sep':
                return '09'
            case 'October' | 'Oct':
                return '10'
            case 'November' | 'Nov':
                return '11'
            case 'December' | 'Dec':
                return '12'
    
    def fixDay(day):
        match str(day):
            case '1':
                return '01'
            case '2':
                return '02'
            case '3':
                return '03'
            case '4':
                return '04'
            case '5':
                return '05'
            case '6':
                return '06'
            case '7':
                return '07'
            case '8':
                return '08'                        
            case '9':
                return '09'
            case _:
                return day
            
    dateSplit = date.split()    
    year = dateSplit[3]
    month = adjustMth(dateSplit[1])
    day = fixDay(dateSplit[2].replace(',', '') )
    sqlDate = f'{year}-{month}-{fixDay(day)}' + ' 00:00:00'
    return sqlDate

def prepareDataLocalFile(date, nums, nums2):
    
    regNums = nums.split('-')

    dblNums = nums2.split('-')

    return {
        "result": {
            "date": date,
             "regularNumbers" : {
                "numbers": [{
                    "n1": regNums[0],
                    "n2": regNums[1],
                    "n3": regNums[2],
                    "n4": regNums[3],
                    "n5": regNums[4],
                    "n6": regNums[5]
                }],
                "sequence": nums,
             },
             "doublePlay": {
                 "numbers": [{
                    "n1": dblNums[0],
                    "n2": dblNums[1],
                    "n3": dblNums[2],
                    "n4": dblNums[3],
                    "n5": dblNums[4],
                    "n6": dblNums[5]
                }],
                "sequence": nums2,
             }
        }
    }