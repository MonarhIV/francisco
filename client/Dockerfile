FROM python:3.11-slim

EXPOSE 5000

# Create a folder app in container and work inside it
WORKDIR /client

RUN apt-get update && apt-get install -y libpq-dev
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

CMD ["python", "client.py"]