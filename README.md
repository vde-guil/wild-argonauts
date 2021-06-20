# Project wild-argonaut

Simple Web app that Create and Reads crew members from a database.
A REST API does the creation and reading and a React SPA controls it.

you can visit the app deployed [here](https://wild-argonauts.vercel.app/)

## Front

### Stack

- NodeJS 15
- yarn
- react 17

### Installation

Clone the repo locally

```bash
git clone <repo url>
```

go into the clone directory then go into the front subirectory

```bash
cd front/
```

install the dependencies

```bash
yarn
```

to build the react project, type

```bash
yarn build
```

the build project will be available in front/dist directory

## API

REST API deployed [here](https://wild-argonaut-vde-guil.herokuapp.com/api) and
to access to swagger doc: [here](https://wild-argonaut-vde-guil.herokuapp.com/api-docs)

### Stack

- NodeJS 15
- NPM
- PostgreSQL 13
- [Sqitch 0.9999](http://sqitch.org/download/)

Those tools are necessary for the good execution of the API.

### Installation

The repo should be already cloned, go into the back subfolder

```bash
cd back/
```

then, once in the cloned directory, install the dependencies

```bash
npm i
```

Finally create a postgresql database and deploy the Sqitch project on it

```bash
createdb argonaut
sqitch deploy db:pg:argonaut
```

Please configure PostgreSQL (or provide the necessary environment variables) so that the `createdb` and `sqitch` command can execute properly.

### Seeding data

In order to seed some test datas, type the following command

```bash
psql -d argonaut -f seeding.sql
```

### Launch

```bash
npm start
```
