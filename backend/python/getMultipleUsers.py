import pymongo
import dns
import json
import sys
import mongo_connect

def getUserAccounts():
 
    res = {'array':[{}]}
    for doc in mongo_connect.usrCol.find():
     res.array.append(doc)

    print(res)
    return res

usr = str(getUserAccounts())
json.loads(usr)
print("parsing works")