# FullStack-app

A small full-stack posts app: users can create posts, view a single post and add comments to it. Includes a basic user registration/login API with bcrypt-hashed passwords.

- `client/` - React front end (Create React App)
- `server/` - Express REST API using Sequelize with MySQL

## Tech stack

**Client:** React 18, React Router 6, Formik + Yup, Axios

**Server:** Node.js, Express, Sequelize (mysql2), bcrypt, cors, nodemon

## Project structure

```
client/
  src/
    App.js            routes: /, /createpost, /post/:id, /login
    pages/            Home, CreatePost, Post, login
server/
  config/config.json  Sequelize DB config (development/test/production)
  models/             Posts, Comments, Users
  routes/             Posts, Comments, Users
  index.js            Express entry point (port 3001)
```

## API

| Method | Path | Description |
|---|---|---|
| GET | `/posts` | List posts |
| GET | `/posts/byId/:id` | Get one post |
| POST | `/posts` | Create a post (`title`, `postText`, `username`) |
| GET | `/comments/:postId` | List comments of a post |
| POST | `/comments` | Add a comment |
| POST | `/users` | Register (`username`, `password`) |
| POST | `/users/login` | Log in |

## Getting started

Prerequisites: Node.js, npm and a running MySQL server.

1. Create a MySQL database and set its credentials in `server/config/config.json` (the `development` block). Tables are created automatically on startup by `sequelize.sync()`.

2. Start the API (http://localhost:3001):

   ```bash
   cd server
   npm install
   npm start
   ```

3. Start the client:

   ```bash
   cd client
   npm install
   npm install axios   # used by the pages but not yet listed in package.json
   npm start
   ```

The client calls the API at `http://localhost:3001` (hard-coded in the page components).

## Environment variables

None are read by the code; database settings live in `server/config/config.json`.
