FROM 3.11-slim


COPY reqirements.txt reqirements.txt
RUN pip install -r reqirements.txt

COPY . .

CMD ["python", "main.py"]