import axios from "axios";

export const client = axios.create({
  baseURL: "http://3.145.122.114:4004/api/",
});
