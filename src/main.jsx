import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import About from './pages/About.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <PageNotFound />,
    },
    {
      path: '/about',
      element: <About />,
    },
  ],
  {
    basename: '/Terrific_Bites',
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);