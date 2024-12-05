import mysql.connector
from mysql.connector import Error
# import pandas as pd

def create_server_connection():
    connection = None
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='FLFantasy5',
            passwd='UVnsX4juuWu99W3P',
            database='FLFantasy5'
        )
        print("MySQL Database connection successful")
    except Error as err:
        print(f"Error: '{err}'")

    return connection
