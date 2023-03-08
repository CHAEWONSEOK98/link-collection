import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import MainPages from './pages/MainPages';
import SubPages from './pages/SubPages';
import LastPage from './pages/LastPage';

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
        path: '/:subPagesName/:lastPage',
        element: <LastPage />,
      },
    ],
  },
]);

export default router;
