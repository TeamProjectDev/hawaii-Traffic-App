import urllib3
from bs4 import BeautifulSoup

#page link

http = urllib3.PoolManager()
pageLink = "http://goakamai.org/icx/pages/cameras.aspx"
response = http.request("GET", pageLink)

soup = BeautifulSoup(response.data,"html.parser") #.text.strip()

camera = soup.find("div",attrs={"id":"cameraList"})

cameraList = camera.findAll("div", recursive=False)

print(camera)