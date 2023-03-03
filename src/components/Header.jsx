import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <div className="flex justify-between max-w-[1440px] mx-auto p-10">
        <h1 className="font-bold">
          <Link to="/">vLINK</Link>
        </h1>
        <div className="flex">
          {login && <h1 className="font-bold mr-4 cursor-pointer">로그인</h1>}
        </div>
      </div>
    </div>
  );
};

export default Header;
