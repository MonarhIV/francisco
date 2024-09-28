import asyncio
import os

from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo
from dotenv import load_dotenv

from aiogram import Dispatcher, Bot, types

load_dotenv()

dp = Dispatcher()
bot = Bot(token=os.getenv("TG_TOKEN"))


@dp.message()
async def echo(message: types.Message) -> None:
    markup = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text='Open',
                    web_app=WebAppInfo(url=f'https://francisco-shop.ru/')
                )
            ]
        ]
    )
    await  message.answer("Start", reply_markup=markup)


async def main():
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
