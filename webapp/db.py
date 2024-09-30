import psycopg
from psycopg.rows import dict_row


def add_device_sql_code(device_info):
    query = f"INSERT INTO device (name, kind, price, color, memory)" \
            f"VALUES ('{device_info['name']}','{device_info['kind']}', {device_info['price']}, '{device_info['color']}', {device_info['memory']});"
    return query


async def Select_all_device(db_info: str):
    async with await psycopg.AsyncConnection.connect(db_info) as aconn:
        async with aconn.cursor(row_factory=dict_row) as acur:
            try:
                query = f"SELECT * FROm device"
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


async def select_products_with_similar_name(name: str, db_info: str):
    async with await psycopg.AsyncConnection.connect(db_info) as aconn:
        async with aconn.cursor(row_factory=dict_row) as acur:
            try:
                query = f"SELECT * FROM device WHERE name LIKE '%{name}%'"
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


async def select_device_by_id(id: int, db_info: str):
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


async def select_Category(category_name, db_info):
    async with await psycopg.AsyncConnection.connect(db_info) as aconn:
        async with aconn.cursor(ow_factory=dict_row) as acur:
            try:
                query = f"SELECT * FROM device WHERE kind = '{category_name}'"
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

