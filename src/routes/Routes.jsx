import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import NewsDetails from '../pages/Home/NewsDetails';
import Login from '../pages/Shared/Login/Login';
import Register from '../pages/Shared/Register/Register';
import About from '../pages/Shared/About/About';
import Career from '../pages/Shared/Career/Career';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/news.json'),
      },
      {
        path: '/newsdetails/:_id',
        element: <NewsDetails></NewsDetails>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/career',
        element: <Career></Career>,
      },
    ],
  },
]);

export default router;
