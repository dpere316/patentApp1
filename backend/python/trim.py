import sys
import json
import io
import atlas_connect

file = sys.argv[1]

with io.open(file, "r", encoding='ISO-8859-1') as f:
    data = json.load(f)

buff = {
  "documentId" : {
    "id" : data['documentId']['id'],
    "number" : data['documentId']['number'],
    "date" : {
      "raw": data['documentId']['date']['raw'],
      "iso": data['documentId']['date']['iso']
    }
  },
  "patentCorpus" : data['patentCorpus'],
  "patentType" : data['patentType'],
  "title" : {
    "plain" : data['title']['raw']
  },
  "abstract" : {
    "plain" : data['abstract']['plain']
  }
}

atlas_connect.addPat(buff)