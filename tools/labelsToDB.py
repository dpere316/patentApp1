import io
from datetime import datetime
import json
import pytz

local_tz = pytz.timezone('Europe/Moscow')

def utc_to_local(utc_dt):
    local_dt = utc_dt.replace(tzinfo=pytz.utc).astimezone(local_tz)
    return local_tz.normalize(local_dt) # .normalize might be unnecessary
def aslocaltimestr(utc_dt):
    return utc_to_local(utc_dt).strftime("%d/%m/%Y %H:%M:%S")

infile = open("manual_annotations_raw.csv", "r")

lines = infile.readlines()

for i,line in enumerate(lines):
  if i > 0:
    cells = line.split(",") # 0, 6, 10
    
    now = datetime.now()
    # dd/mm/YY H:M:S
    dtString = aslocaltimestr(datetime.utcnow())

    res = True
    if (cells[6] != "AI"):
      res = False
    jobj = {
      'patentDocID' : cells[0],
      'userEmail' : "examiner" + cells[10] + "@example.com",
      'category' : "Machine Learning",
      'response' : res,
      'dateTime' : dtString
    }