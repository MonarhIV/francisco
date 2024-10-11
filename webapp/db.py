import os
import psycopg
from psycopg.rows import dict_row, scalar_row

##DATABASE_URL = os.environ['DATABASE_URL']


def add_device_sql_code(device_info):
    query = f"INSERT INTO device (name, kind, characteristcs_promo, color, memary)" \
            f"VALUES ('{device_info[0]}','{device_info[1]}', '{device_info[2]}', '{device_info[4]}', {device_info[3]});"
    return query


def add_color_sql_code(color_info):
    query = f"INSERT INTO color_names (hex_code, color_name) VALUES ('{color_info[0]}','{color_info[1]}');"
    return query


async def update_price(product_id: int, new_price: int, db_info: str):
    async with await psycopg.AsyncConnection.connect(db_info) as aconn:
        async with aconn.cursor() as acur:
            try:
                query = f'UPDATE device SET price = {new_price} WHERE id = {product_id}'
                await acur.execute(query)
                ## result = await acur.fetchall()
                return "Success"
            except psycopg.InterfaceError:
                return "Error with database interface"
            except psycopg.DataError:
                return "Data is not valid"
            except psycopg.ProgrammingError:
                return f"Error with SQL statement {product_id}, {new_price}, -{query}-"
            except psycopg.DatabaseError:
                return "Undefined error with database"
            except psycopg.Error:
                return "Undefined error"


async def get_color_name(hex_code: str, db_info):
    async with await psycopg.AsyncConnection.connect(db_info) as aconn:
        async with aconn.cursor(row_factory=scalar_row) as acur:
            try:
                query = f"SELECT color_name FROM color_names WHERE LOWER(hex_code) = LOWER('#{hex_code}')"
                await acur.execute(query)
                result = await acur.fetchone()
                return result
            except psycopg.InterfaceError:
                return "Error with database interface"
            except psycopg.DataError:
                return "Data is not valid"
            except psycopg.ProgrammingError:
                return "Error with SQL statement"
            except psycopg.DatabaseError:
                return "Undefined error with database"
            except psycopg.Error:
                return "Undefined error"


async def Select_all_device(db_info):
    async with await psycopg.AsyncConnection.connect(db_info) as aconn:
        async with aconn.cursor(row_factory=dict_row) as acur:
            try:
                query = f"SELECT * FROM device"
                await acur.execute(query)
                result = await acur.fetchall()
                return result
            except psycopg.InterfaceError:
                return "Error with database interface"
            except psycopg.DataError:
                return "Data is not valid"
            except psycopg.ProgrammingError:
                return "Error with SQL statement"
            except psycopg.DatabaseError:
                return "Undefined error with database"
            except psycopg.Error:
                return "Undefined error"


async def add_device(device_info, db_info):
    async with await psycopg.AsyncConnection.connect(db_info) as aconn:
        async with aconn.cursor() as acur:
            try:
                query = f"INSERT INTO device (name, kind, price, color, memory)" \
                        f"VALUES ('{device_info['name']}','{device_info['kind']}', {device_info['price']}, '{device_info['color']}', {device_info['memory']});"
                await acur.execute(query)
                return query
            except psycopg.errors.UniqueViolation:
                return False


async def select_products_with_similar_name(name: str, db_info):
    async with await psycopg.AsyncConnection.connect(db_info) as aconn:
        async with aconn.cursor(row_factory=dict_row) as acur:
            try:
                query = f"SELECT * FROM device WHERE LOWER(name) LIKE LOWER('%{name}%')"
                await acur.execute(query)
                d = await acur.fetchall()
                return d
            except psycopg.InterfaceError:
                return "Error with database interface"
            except psycopg.DataError:
                return "Data is not valid"
            except psycopg.ProgrammingError:
                return "Error with SQL statement"
            except psycopg.DatabaseError:
                return "Undefined error with database"
            except psycopg.Error:
                return "Undefined error"


async def select_device_by_id(id: int, db_info):
    async with await psycopg.AsyncConnection.connect(db_info) as aconn:
        async with aconn.cursor(row_factory=dict_row) as acur:
            try:
                query = f"SELECT * FROM device WHERE id = {id}"
                await acur.execute(query)
                characteristics = await acur.fetchone()
                return characteristics
            except psycopg.InterfaceError:
                return "Error with database interface"
            except psycopg.DataError:
                return "Data is not valid"
            except psycopg.ProgrammingError:
                return "Error with SQL statement"
            except psycopg.DatabaseError:
                return "Undefined error with database"
            except psycopg.Error:
                return "Undefined error"


async def select_category(category_name, db_info):
    async with await psycopg.AsyncConnection.connect(db_info) as aconn:
        async with aconn.cursor(row_factory=dict_row) as acur:
            try:
                query = f"SELECT * FROM device WHERE LOWER(kind) = LOWER('{category_name}')"
                await acur.execute(query)
                category = await acur.fetchall()
                return category
            except psycopg.InterfaceError:
                return "Error with database interface"
            except psycopg.DataError:
                return "Data is not valid"
            except psycopg.ProgrammingError:
                return "Error with SQL statement"
            except psycopg.DatabaseError:
                return "Undefined error with database"
            except psycopg.Error:
                return "Undefined error"
