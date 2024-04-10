# HASE Branch Locator Client

[![Netlify Status](https://api.netlify.com/api/v1/badges/c5d02cbd-12eb-4b39-a2d1-24cafcdf5ce5/deploy-status)](https://app.netlify.com/sites/hase-branch-locator/deploys)

## Introduction

This is an SPA part using Vue2 for searching the information of the branches and ATMs of Heng Seng Bank in Hong Kong.

The repository of backend (API) is [here](https://github.com/southparkstan123/hase-branch-locator-api).

## Technical information

### Javascript Framework

**Vue 2.6.10** and **Node 16** used on this repository.

### CSS Framework

**Bootstrap 4.3.1** is used on this repository.

### Others

**BootstrapVue 2.0.0** and **Vuex 3.1.1** are used on this repository.

## Project setup

### Environment setting

1. Clone the git repo as following command:

```bash
git clone https://github.com/southparkstan123/hase-branch-locator-client.git
```

2. You can add the ```.env``` files to store the configuration value for different environments , the example file is in ```.env.example```, just copy this file for specific environment and modify the key and value as the backend part of this project. 

For example, in development environment, rename the copied file as ```.env.development.local```, then input the key and value on it.

### Build the Docker Container

Run the following command to build the image on your local machine and start the container:

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
# For production mode with hot module reload
yarn run serve-hot
```

or

```bash
# For production mode
yarn run build
```

4. Open http://localhost:8080 in web browser

## Future

Due to the EOL for Vue 2 is expired, this project will be revamped using new techniques such as Vue3 and TailwindCSS to exhance the development and user experience.

Happy Coding!!!!!!! :)