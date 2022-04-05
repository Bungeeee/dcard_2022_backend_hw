# dcard_2022_backend_hw
Homework of Dcard 2022 Backend Intern Application

## File Structure

```
dcard_2022_backend_hw
├── index.js
├── mongo.js
├── routes.js
├── schema.js
├── package.json
├── README.md
├── LICENSE
└── yarn.lock
```

## Server

> Build by Node.js (Express)

### node_modules

- `nodemon`
- `express`
- `mongoose`
- `dotenv`
- `cors`

### How to start

#### Set up `.env` file

- `MONGO_URL`
  - URL to a `MongoDB` cluster for connection
- `PORT` (optional)
  - Set up your own running port if needed

#### Run the Server

```
npm install
npm run dev
```

- Default running port
  - `localhost:4000`  