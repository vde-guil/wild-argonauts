# Project wild-argonaut

Simple Web app that Create and Reads crew members from a database.
A REST API does the creation and reading and a React SPA controls it.

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

Clone the repo locally

```bash
git clone <repo url>
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