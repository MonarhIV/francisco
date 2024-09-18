FROM 3.9.20-slim-bullseye


COPY reqirements.txt reqirements.txt
RUN pip install -r reqirements.txt

COPY . .

CMD ["python", "main.py"]