from bs4 import BeautifulSoup
import urllib.request
import urllib.error


def get_page(name: str, category: str):
    url_product = f"https://store77.net/{category}/{name}"
    try:
        page = urllib.request.urlopen(urllib.request.Request(url_product)).read().decode("utf-8")
        return page
    except urllib.error.HTTPError:
        return "Error"
    except:
        return 'Error'


def get_price(page):
    bs = BeautifulSoup(page, features="html.parser")
    price = bs.find('p', 'price_title_product')
    price = ''.join(list(filter(lambda x: x.isdigit(), list(price.text))))
    try:
        return int(price)
    except ValueError:
        return False
    except:
        return False