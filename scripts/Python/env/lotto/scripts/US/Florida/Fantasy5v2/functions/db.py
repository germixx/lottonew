import os

DB_FILE = os.path.abspath("dbs.py")

from dbs import create_server_connection

connection =  create_server_connection()


def InsertIntoDB(db, object):
    
    mycursor = connection.cursor()

    sql = "INSERT INTO {} (date, sequence, n1, n2, n3, n4, n5) VALUES ( %s, %s, %s, %s, %s, %s, %s)".format(db)
    
    val = (object['result']['date'], object['result']['sequence'], object['result']['numbers'][0]['n1'], object['result']['numbers'][0]['n2'], object['result']['numbers'][0]['n3'], object['result']['numbers'][0]['n4'], object['result']['numbers'][0]['n5']) 
    
    mycursor.execute(sql, val)

    connection.commit()

    return mycursor.lastrowid
