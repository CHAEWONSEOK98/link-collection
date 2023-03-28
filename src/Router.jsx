import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import MainPages from './pages/MainPages';
import SubPages from './pages/SubPages';
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
    ],
  },
]);

export default router;
