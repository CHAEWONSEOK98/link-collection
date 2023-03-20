import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { siteToggleState } from '../atoms/subPagesState';

const SubHeader = () => {
  const [login, setLogin] = useState(false);
  const [theme, setTheme] = useState('light');
  const [siteToggle, setSiteToggle] = useRecoilState(siteToggleState);

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

  const handleSiteToggle = () => {
    setSiteToggle((prev) => !prev);
  };

  return (
    <div>
      <div className="flex justify-between max-w-[1440px] mx-auto p-10">
        <h1 className="font-bold">
          <Link to="/">vLINK</Link>
        </h1>
        <div className="flex">
          <button
            className="font-bold cursor-pointer"
            onClick={handleSiteToggle}
          >
            사이트 추가
          </button>
          <button className="ml-4" onClick={handleThemeSwitch}>
            {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
