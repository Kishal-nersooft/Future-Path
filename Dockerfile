FROM python:3.13-alpine

WORKDIR /app

COPY index.html article.html resources.html universities.html style.css script.js ./

RUN adduser -D -H appuser
USER appuser

CMD ["python", "-m", "http.server", "8000", "--bind", "0.0.0.0"]
