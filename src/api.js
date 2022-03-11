// export function signup(name, email, password) {
//   return fetch("/api/auth/signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name,
//       email,
//       password,
//     }),
//   });
// }

import axios from "axios";

export function signup(name, email, password) {
  return axios.post("/api/auth/signup", {
    name,
    email,
    password,
  });
}

export function login(email, password) {
  return axios.post("/api/auth/login", {
    email,
    password,
  });
}

export function getAllTodos(token) {
  return axios.get("/api/todos", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export function getCompletedTodos(token) {
  return axios.get("/api/todos/completed", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export function getUncompletedTodos(token) {
  return axios.get("/api/todos/uncompleted", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function createTodo(token, description) {
  return axios.post(
    "/api/todos",
    { desc: description },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}