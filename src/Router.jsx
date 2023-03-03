import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './components/Home';
import Pages from './components/Pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/:pageName',
        element: <Pages />,
      },
    ],
  },
]);

export default router;
