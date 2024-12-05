# Step 3

from datetime import datetime

# #!/usr/bin/python
from db import create_server_connection

connection =  create_server_connection()

def insertIntoDB(time, date, seq, n1, n2, n3, n4, n5):

    mycursor = connection.cursor()
        
    sql = "INSERT INTO {} (date, sequence, n1, n2, n3, n4, n5) VALUES ( %s, %s, %s, %s, %s, %s, %s)".format(time)

    val = (date, seq, n1, n2, n3, n4, n5) 
    print(sql, val, 'si asdalalsdaslkdalsdklskd')
    mycursor.execute(sql, val)

    connection.commit()


def fixDateDB(date):
    
    dateObj = datetime.strptime(date, '%m/%d/%y')

    dater = str(dateObj)

    return dater

with open('numbs.txt') as file:

    lines = []
    
    for line in file:
        lines.append(line.strip('\n').split(' '))

    for x in lines:

        # change date into SQL format x[0]
        date = fixDateDB(x[0])

        # order sequence  x[2] x[3] x[4] x[5] x[6]
        ordered = [int(x[2]), int(x[3]), int(x[4]), int(x[5]), int(x[6])]
        ordered.sort()
        sequence = str(ordered[0]) + '-' + str(ordered[1]) + '-' + str(ordered[2]) + '-' + str(ordered[3]) + '-' + str(ordered[4])

        # determine which database to input x[1]
        if x[1] == 'EVENING':
            insertIntoDB('evening', date, sequence, ordered[0], ordered[1], ordered[2], ordered[3], ordered[4])
        else:
            insertIntoDB('midday', date, sequence, ordered[0], ordered[1], ordered[2], ordered[3], ordered[4])


















