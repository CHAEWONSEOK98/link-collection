import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold">
        <Link to="/">vLINK</Link>
      </h1>
      <div className="flex">
        <h1 className="font-bold mr-2">페이지생성</h1>
        <h1 className="font-bold mr-2">메모</h1>
        <h1 className="font-bold mr-2">로그인</h1>
      </div>
    </div>
  );
};

export default Header;
