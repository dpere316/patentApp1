import pymongo
import dns
import json

print("here")

#client = pymongo.MongoClient("mongodb+srv://LeonardoRodriguez:Srpijmu@cluster0.8plx6.mongodb.net/PatentData?retryWrites=true&w=majority", readPreference="secondary")
client = pymongo.MongoClient("mongodb://localhost:27017/?readPreference=secondary&ssl=false")

patCol = client['PatentData']['Patents']
usrCol = client['PatentData']['Users']

def getId():
  import random
  import time
  random.seed(time.time())
  doc = random.randint(1, patCol.count())
  pat = patCol.find({})[doc-1]
  ret = {
    "id" : pat['documentId']['id'],
    "patentCorpus" : pat['patentCorpus']
  }
  return ret
  # patCol.find_one({})

def addPat(pat):
  patCol.insert_one(pat)

def addUser(email, name):
  buff = "{}"
  jBuff = json.loads(buff)
  jBuff['email'] = email
  jBuff['name'] = name
  jBuff['role'] = "user"
  usrCol.insert_one(jBuff)

def checkUserRole(usrEmail, usrName):
  res = usrCol.find_one({"email" : usrEmail})
  role = ""
  if not(res):
    addUser(usrEmail, usrName)
    role = "user"
  else:
    role = res['role']
  return role

