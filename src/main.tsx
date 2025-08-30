import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home.tsx';
import AllProducts from './pages/allProducts/AllProducts.tsx';
import ShoppingCart from './pages/shoppingCart/ShoppingCart.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/produtos',
        element: <AllProducts/>
      },
      {
        path: '/carrinho',
        element: <ShoppingCart/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
