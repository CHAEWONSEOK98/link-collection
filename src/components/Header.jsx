import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

const Header = () => {
  const [login, setLogin] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleThemeSwitch = () => {
    const html = document.querySelector('html');
    if (theme === 'light') {
      setTheme((prev) => 'dark');
      html.classList.add('dark');
    } else {
      setTheme((prev) => 'light');
      html.classList.remove('dark');
    }
  };
  return (
    <div>
      <div className="flex justify-between max-w-[1440px] mx-auto p-10">
        <h1 className="font-bold">
          <Link to="/">vLINK</Link>
          <button className="ml-4" onClick={handleThemeSwitch}>
            {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
          </button>
        </h1>
        <div className="flex">
          {login && <h1 className="font-bold mr-4 cursor-pointer">로그인</h1>}
        </div>
      </div>
    </div>
  );
};

export default Header;
