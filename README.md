# Future Path

Static website for Future Path, built with HTML, CSS, and JavaScript.

## Files

- `index.html` - Home page
- `resources.html` - Resources page
- `universities.html` - Universities page
- `article.html` - Article page
- `style.css` - Shared styling
- `script.js` - Shared JavaScript

## Run With Docker

Build and start the container:

```sh
docker compose up --build -d
```

The Compose setup does not publish any container ports to the host. The site is only reachable from inside the Docker network unless you add a port mapping later.

Stop the container:

```sh
docker compose down
```
