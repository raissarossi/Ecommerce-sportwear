import axios from "axios";

const api = axios.create({
  baseURL: "https://rai-sportwear.azurewebsites.net/",
});

export default api;