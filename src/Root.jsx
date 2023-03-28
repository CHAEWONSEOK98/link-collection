import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className="h-screen dark:bg-black dark:text-white">
      <Outlet />
    </div>
  );
};

export default Root;
