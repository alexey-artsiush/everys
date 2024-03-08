import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API,
  timeout: 300 * 1000,
  auth: {
    username: import.meta.env.REACT_APP_LOGIN,
    password: import.meta.env.REACT_APP_PASSWORD,
  },
});

export { api };
