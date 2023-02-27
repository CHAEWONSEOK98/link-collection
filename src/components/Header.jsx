import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pages from './Pages';

const Header = () => {
  const [pages, setPages] = useState([]);
  const [pageName, setPageName] = useState('');
  const [createPage, setCreatePage] = useState(false);

  const createPageHandler = () => {
    setCreatePage((prev) => !prev);
  };

  const changeHandler = (e) => {
    setPageName(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    setPages((prev) => [
      ...prev,
      {
        pageName,
        id: Math.random(),
      },
    ]);
    setPageName('');
  };

  return (
    <div>
      <div className="flex justify-between max-w-[1440px] mx-auto p-10">
        <h1 className="font-bold">
          <Link to="/">vLINK</Link>
        </h1>
        <div className="flex">
          <h1
            className="font-bold mr-4 cursor-pointer"
            onClick={createPageHandler}
          >
            페이지생성
          </h1>
          <h1 className="font-bold mr-4 cursor-pointer">메모</h1>
          <h1 className="font-bold mr-4 cursor-pointer">로그인</h1>
        </div>
      </div>
      <form onSubmit={formHandler}>
        <input
          value={pageName}
          onChange={changeHandler}
          placeholder="페이지 이름"
        />
        <button>확인</button>
      </form>
      <div>
        {pages.map((page) => (
          <Link to={`/${page.id}`}>
            <Pages key={page.id} id={page.id} pageName={page.pageName} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
