import axios from "axios";

const local = "http://localhost:8989/api";
const api = axios.create({
  baseURL: local,
});

export default api;
