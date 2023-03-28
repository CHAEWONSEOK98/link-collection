import { useState } from 'react';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

const Header = () => {
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
    <button className="ml-4" onClick={handleThemeSwitch}>
      {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
    </button>
  );
};

export default Header;
