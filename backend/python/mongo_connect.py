import pymongo
import dns
import json
import sys

#client = pymongo.MongoClient("mongodb+srv://LeonardoRodriguez:Srpijmu@cluster0.8plx6.mongodb.net/PatentData?retryWrites=true&w=majority", readPreference="secondary")
client = pymongo.MongoClient(sys.argv[1])

patCol = client['PatentData']['Patents']
usrCol = client['PatentData']['Users']

#def addPat(pat):
#  patCol.insert_one(pat)

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

def addPat():
  patCol.insert_one({'documentID':'06273827', 'patentCorpus':'USPAT'})