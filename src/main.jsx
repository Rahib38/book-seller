import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Layout/Root';
import ErrorPage from './Components/ErrorPage';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import ListBook from './Layout/ListBook';
import PagesToRead from './Layout/PagesToRead';
import Home from './Layout/Home';
import BookDetails from './Layout/BookDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>
      },
      {
        path: "/ListBook",
        element: <ListBook></ListBook>,
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
