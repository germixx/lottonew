import os, sys

print(os.path.abspath("test"))

DB_FILE = os.path.abspath("dbs.py")
LOGS_FILE = os.path.abspath('logs.txt')

print(DB_FILE, ' is')
print(LOGS_FILE, ' log')

# def hello(a):
#     print ("hello and that's your sum:", a )

# if __name__ == "__main__":
#     a = sys.argv[1]
    
#     hello(a)