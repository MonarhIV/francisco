FROM python:3.11-slim


COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

CMD ["gunicorn", "main:app"]
ENV PATH="/path/to/gunicorn:${PATH}"