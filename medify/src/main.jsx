import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  MyBookings  from './MyBookings/MyBookings.jsx';
import Home from './Home/Home.jsx';
import Search from './Search/Search.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
  
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/mybookings",
        element: <MyBookings />,
      },
    ],
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  
  </StrictMode>,
)