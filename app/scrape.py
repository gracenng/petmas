import requests
import urllib
import json

# search_params = ["#cat #christmas has:images	", "#CatsOfChristmas has:images	",
#  "#catsoftwitter #Christmas has:images", "#dog #christmas has:images", "#dogsoftwitter #Christmas has:images",
#  "#christmas #pugs has:images", "#christmas #husky has:images"]
search_params = "#cat #christmas has:images	"
search_params = urllib.parse.quote(search_params)
print(search_params)
search_headers = {'Authorization': 'Bearer {}'.format(
   <token>)}
url = "https://api.twitter.com/2/tweets/search/recent?query={}&expansions=author_id&user.fields=username".format(
    search_params)

response = requests.request("GET", url, headers=search_headers)
json_response = response.json()
print(json.dumps(json_response, indent=4, sort_keys=True))
