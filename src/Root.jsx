import { Outlet } from 'react-router-dom';
import Header from './components/SubHeader';

const Root = () => {
  return (
    <div className="h-screen dark:bg-black dark:text-white">
      <Outlet />
    </div>
  );
};

export default Root;
