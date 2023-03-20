import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import MainPages from './pages/MainPages';
import SubPages from './pages/SubPages';
import NotePage from './pages/NotePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <MainPages />,
      },
      {
        path: '/:subPagesName',
        element: <SubPages />,
      },
      {
        path: '/note',
        element: <NotePage />,
      },
    ],
  },
]);

export default router;
