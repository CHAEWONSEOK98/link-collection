import { useState } from 'react';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { categoryToggleState } from '../atoms/mainPagesState';
import { sitesToggleState } from '../atoms/mainPagesConnect';
import { Link } from 'react-router-dom';

const Header = () => {
  const [login, setLogin] = useState(false);
  const [theme, setTheme] = useState('light');
  const [CategoryToggle, setCategoryToggle] =
    useRecoilState(categoryToggleState);
  const [siteToggle, setSiteToggle] = useRecoilState(sitesToggleState);

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

  // category
  const handleCategoryToggle = () => {
    setCategoryToggle((prev) => !prev);
    setSiteToggle((prev) => false);
  };

  // site
  const handleSiteToggle = () => {
    setSiteToggle((prev) => !prev);
    setCategoryToggle((prev) => false);
  };
  return (
    <div>
      <div className="flex justify-between max-w-[1440px] mx-auto p-10">
        <h1 className="font-bold">
          <Link to="/">vLINK</Link>
        </h1>
        <div className="flex">
          <button
            className="font-bold mr-4 cursor-pointer"
            onClick={handleCategoryToggle}
          >
            목록 생성
          </button>
          <button
            className="font-bold mr-4 cursor-pointer"
            onClick={handleSiteToggle}
          >
            사이트 추가
          </button>
          <Link to={`/note`}>
            <h1 className="font-bold mr-4 cursor-pointer">메모</h1>
          </Link>
          {login && <h1 className="font-bold mr-4 cursor-pointer">로그인</h1>}
          <button className="ml-4" onClick={handleThemeSwitch}>
            {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
