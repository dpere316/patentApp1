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


pat = str(getId())
res = "{ \"express\": " + pat + " }"

print(res.replace("\'", "\"").replace("ObjectId(", "").replace("\")", "\"").replace("\"response\": False", "\"response\": false"))