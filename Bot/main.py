import asyncio
import os
from dotenv import load_dotenv

from aiogram import Dispatcher, Bot, types

load_dotenv()

dp = Dispatcher()
bot = Bot(token=os.getenv("TG_TOKEN"))


@dp.message()
async def echo(message: types.Message) -> None:
    await message.answer(text="Hello, world!")


async def main():
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
