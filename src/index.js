// import React from "react";
// import ReactDOM from "react-dom/client";
// import Login from "./pages/login";
// import Home from "./pages/home";
// import Produtos from "./pages/produtos";
// import ProdutoDetalhe from "./pages/produtoDetalhe";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login/>,
//   },
//   {
//     path: "/home",
//     element: <Home/>,
//   },
//   {
//     path: "/produtos",
//     element: <Produtos/>,
//   },
//   {
//     path: "/produto/:id",
//     element: <ProdutoDetalhe/>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
