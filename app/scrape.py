import requests
import urllib
import json
import pyodbc
from selenium import webdriver
from time import sleep

search_params = ["#cat #christmas has:images", "#CatsOfChristmas has:images	",
                 "#catsoftwitter #Christmas has:images", "#dog #christmas has:images", "#dogsoftwitter #Christmas has:images",
                 "#christmas #pugs has:images"]

components = []
urls = []
html = []  # An array of publish.twitter.com generated html
tmp = ""
num = 1
search_headers = {'Authorization': 'Bearer {}'.format(
    "<REDACTED>")}
for param in search_params:
    # Create api url
    param = urllib.parse.quote(param)
    api_url = "https://api.twitter.com/2/tweets/search/recent?query={}&expansions=author_id&user.fields=username&max_results=60".format(
        param)
    response = requests.request("GET", api_url, headers=search_headers)
    json_response = response.json()
    # print(json.dumps(json_response, indent=4))
    # Get data in JSON
    for i in json_response["data"]:
        author_id = i["author_id"]
        tweet_id = i["id"]
        # print("Author id : "+str(i["author_id"]))
        for j in json_response["includes"]["users"]:
            # print(j["username"])
            if j["id"] == author_id:
                components.append([j["username"], tweet_id])


# Put together tweet URL
for comp in components:
    urls.append("twitter.com/"+comp[0]+"/status/"+comp[1])
    # print("twitter.com/"+comp[0]+"/status/"+comp[1])


# Begin going to publish to grab html via Selenium
driver = webdriver.Chrome('C:/Program Files/chromedriver')
# driver = webdriver.Chrome(ChromeDriverManager().install())
for url in urls:
    publish = "https://publish.twitter.com/?query={}&widget=Tweet".format(
        urllib.parse.quote(url))
    driver.get(publish)
    sleep(1)
    # text = driver.find_element_by_class_name("EmbedCode-code").text
    text = driver.find_element_by_class_name('EmbedCode-code').text
    # print(text)
    html.append((num, text))
    num += 1

print("Num: "+str(num))

# Connect to sql server
server = 'tcp: petmas-server.database.windows.net, 1433'
database = 'petmasdb'
username = '<REDACTED>'
password = '<REDACTED>'
conn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER=' +
                      server+';DATABASE='+database+';Encrypt=yes;UID='+username+';PWD=' + password)

cursor = conn.cursor()
# cursor.execute('CREATE TABLE links  (LinkNum int,url varchar(4000));')
q = (''' 
        insert into links (LinkNum,url)
        values (?, ?);
    ''')
result = cursor.executemany(q, html)
conn.commit()
