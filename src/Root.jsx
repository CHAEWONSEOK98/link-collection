import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const Root = () => {
  return (
    <div className="h-screen dark:bg-black dark:text-white">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
