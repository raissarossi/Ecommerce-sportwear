import axios from "axios";

// PARA USAR DJANGO NA AZURE
const api = axios.create({
  baseURL: "https://rai-sportwear.azurewebsites.net/",
});

// PARA USAR DJANGO LOCAL
// const api = axios.create({
//   baseURL: "http://127.0.0.1:8000/",
// });

export default api;
