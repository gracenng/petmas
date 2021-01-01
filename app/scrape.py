import requests
import urllib
import json
from selenium import webdriver
# from webdriver_manager.chrome import ChromeDriverManager
from time import sleep

# search_params = ["#cat #christmas has:images	", "#CatsOfChristmas has:images	",
#  "#catsoftwitter #Christmas has:images", "#dog #christmas has:images", "#dogsoftwitter #Christmas has:images",
#  "#christmas #pugs has:images", "#christmas #husky has:images"]
search_params = "#CatsOfChristmas"
search_params = urllib.parse.quote(search_params)
# print(search_params)
components = []
urls = []
html = []  # An array of publish.twitter.com generated html
tmp = ""
search_headers = {'Authorization': 'Bearer {}'.format(
    "AAAAAAAAAAAAAAAAAAAAAAmGLAEAAAAAit2rzF59k9wutYrehJuTnV39p%2Bg%3DVlV0Yi7Y8XANo5KqimjqQU8KQzyvcbvDYBgkEVq27V67vtqKMa")}
api_url = "https://api.twitter.com/2/tweets/search/recent?query={}&expansions=author_id&user.fields=username&max_results=10".format(
    search_params)

response = requests.request("GET", api_url, headers=search_headers)
json_response = response.json()
# print(json.dumps(json_response, indent=4))


for i in json_response["data"]:
    author_id = i["author_id"]
    tweet_id = i["id"]
    # print("Author id : "+str(i["author_id"]))
    for j in json_response["includes"]["users"]:
        # print(j["username"])
        if j["id"] == author_id:
            components.append([j["username"], tweet_id])
            # print(str(j["username"])+str(tweet_id))
    # print("___________________________")

# Put together URL
for comp in components:
    urls.append("twitter.com/"+comp[0]+"/status/"+comp[1])
    # print("twitter.com/"+comp[0]+"/status/"+comp[1])


# Begin going to publish to grab html
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
    html.append(text)

# print(html)
