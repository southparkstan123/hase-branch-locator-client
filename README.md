# branch-locator-client

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### (New) Build the Docker Container

1. Clone the git repo

2. Run the following command to build the image on your local machine and start the container:

```bash
docker-compose up --build --no-recreate -d
```

If the image on your local machine was built, run the following command to start the container:

```bash
docker-compose up -d
```

### Build and start the Application

1. Access to the container and then execute the commands

```bash
docker exec -it client sh
```

2. Install the node packages on the container by following command:

```bash
yarn install
```

<i>Troubleshooting</i> You may delete and reinstall the packages by:

```bash
rm -rf node_modules && yarn install
```

3. Start the app by the following command:

```bash
# For development mode
yarn run serve
```

or

```bash
# For production mode
yarn run build && yarn run preview --port 8000
```

4. Open http://localhost:8080 in web browser