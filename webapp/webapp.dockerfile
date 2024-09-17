FROM python:3.11.9-slim


COPY reqirements.txt reqirements.txt
RUN pip install -r reqirements.txt

COPY . .

CMD ["python", "main.py"]