# Facehook

A modern web application built with React that allows users to register, login, view and interact with posts. Includes features like profile management, liking posts, commenting, and avatar upload.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Features

- User registration and login with JWT authentication
- Profile management including avatar upload and bio editing
- Create, view, like, and comment on posts
- Responsive UI with modern React hooks
- Optimistic updates for likes
- Token refresh for maintaining session

---

## Technologies

- Frontend:
  - React
  - React Hooks (`useState`, `useEffect`, `useReducer`)
  - react-hook-form
  - Axios
  - Tailwind CSS (or your preferred CSS framework)
- Backend:
  - REST API (Node.js)
  - JWT for authentication
- Tools:
  - Vite
  - Postman (for API testing)

---

## Installation


```bash

1. Clone the repository:
git clone https://github.com/nh-nahid/facehook.git
cd facehook
```
```bash

2. Install dependencies:
npm install
```
```bash

3. Create a .env file in the root with the following variables:
VITE_SERVER_BASE_URL=http://localhost:3000
```
```bash
4. Start the development server:
npm run dev
```

## Usage
- Register a new user via the registration form.

- Login using your credentials.

- Access your profile to view and edit your bio, or upload an avatar.

- View posts on the home page.

- Like/unlike posts and add comments.

## API Endpoints

| Endpoint              | Method | Description               |
| --------------------- | ------ | ------------------------- |
| `/auth/register`      | POST   | Register a new user       |
| `/auth/login`         | POST   | Login user and return JWT |
| `/auth/refresh-token` | POST   | Refresh expired JWT token |
| `/profile/:id`        | GET    | Get user profile details  |
| `/profile/:id`        | PATCH  | Update user profile (bio) |
| `/profile/:id/avatar` | POST   | Upload user avatar        |
| `/posts`              | GET    | Get all posts             |
| `/posts/:id/like`     | PATCH  | Like or unlike a post     |


## License
All right reserved by LWS
