import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import ErrorPage from './Pages/404.jsx';
import ProductsPage from './Pages/products.jsx';
import { MantineProvider } from '@mantine/core';
import DashboardPage from './Pages/dashboard.jsx';
import { NavbarSegmented } from './components/Fragments/SideBar.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Welcome</h1>,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/products",
    element: <ProductsPage />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />
  },
  {
    path: "/sidebar",
    element: <NavbarSegmented />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
