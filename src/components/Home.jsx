import { mainPagesState } from '../atoms/mainPagesState.js';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [mainPages, setMainPages] = useRecoilState(mainPagesState);
  const [pageName, setPageName] = useState('');

  const handleCreateClick = () => {};

  const handleChange = (e) => {
    setPageName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMainPages((prev) => [
      ...prev,
      {
        pageName,
        id: Math.random(),
      },
    ]);
    setPageName('');
  };

  return (
    <div className="w-full h-hull">
      <div className="absolute right-12 lg:right-40 top-[2.5rem]">
        <div className="flex">
          <h1
            className="font-bold mr-4 cursor-pointer"
            onClick={handleCreateClick}
          >
            페이지생성
          </h1>
          <h1 className="font-bold mr-4 cursor-pointer">페이지삭제</h1>
          <h1 className="font-bold mr-4 cursor-pointer">링크연결</h1>
          <h1 className="font-bold mr-4 cursor-pointer">메모</h1>
        </div>
      </div>

      <div className="">
        {mainPages.map((mainPage) => (
          <Link to={`/${mainPage.pageName}`}>
            <div className="w-[5%] h-10 border">{mainPage.pageName}</div>
          </Link>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
      >
        <input
          value={pageName}
          onChange={handleChange}
          placeholder="페이지 이름"
        />
        <button>확인</button>
      </form>
    </div>
  );
};

export default Home;
