import requests
import json
import parsers_templates

r = requests.get('http://127.0.0.1:8000/get_all')

iphones = json.loads(r.json())

for phone in iphones:
    color_name = requests.get(f'http://127.0.0.1:8000/color_translator?hex_code={phone["color"][1:]}')
    col_phone = json.loads(color_name.json())
    if phone["memory"] == 1024:
        mem = "1tb"
    else:
        mem = f"{phone['memory']}gb"
    name_1 = f'telefon_apple_{phone["name"].lower().replace(" ", "_")}_{mem}_{col_phone}'
    page_1 = parsers_templates.get_page(name_1, 'telefony_apple')
    name_2 = f'telefon_apple_{phone["name"].lower().replace(" ", "_")}_{mem}_esim_{col_phone}'
    page_2 = parsers_templates.get_page(name_2, 'telefony_apple')
    if page_1 == 'Error' and page_2 == 'Error':
        pass
    else:
        if page_1 == 'Error':
            price = parsers_templates.get_price(page_2)
        else:
            price = parsers_templates.get_price(page_1)
        if price:
            res = requests.post(f'http://127.0.0.1:8000/update_price/', data=json.dumps({'product_id': phone["id"], 'new_price': price}))

