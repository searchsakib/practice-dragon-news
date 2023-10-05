import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import NewsDetails from '../pages/Home/NewsDetails';

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
    ],
  },
]);

export default router;
