import os

DB_FILE = os.path.abspath("dbs.py")

from dbs import create_server_connection

connection =  create_server_connection()

def InsertIntoDB(db, object):
    print(object, ' is the object')
    mycursor = connection.cursor()
    print( type( object['result']['doublePlay']['numbers'][0]['n5'] ),  object['result']['doublePlay']['numbers'][0] , ' is fuck')
    sql = "INSERT INTO {} (date, regNumbers, n1, n2, n3, n4, n5, n6, dblNumbers, dbln1, dbln2, dbln3, dbln4, dbln5, dbln6) VALUES ( %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)".format(db)
    
    val = (object['result']['date'], object['result']['regularNumbers']['sequence'], object['result']['regularNumbers']['numbers'][0]['n1'], object['result']['regularNumbers']['numbers'][0]['n2'], object['result']['regularNumbers']['numbers'][0]['n3'], object['result']['regularNumbers']['numbers'][0]['n4'], object['result']['regularNumbers']['numbers'][0]['n5'], object['result']['regularNumbers']['numbers'][0]['n6'], object['result']['doublePlay']['numbers']['sequence'], object['result']['doublePlay']['numbers'][0]['n1'], object['result']['doublePlay']['numbers'][0]['n2'], object['result']['doublePlay']['numbers'][0]['n3'], object['result']['doublePlay']['numbers'][0]['n4'], object['result']['doublePlay']['numbers'][0]['n5'], object['result']['doublePlay']['numbers'][0]['n6']) 
    
    mycursor.execute(sql, val)

    connection.commit()

    return mycursor.lastrowid