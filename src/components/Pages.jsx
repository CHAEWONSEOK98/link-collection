import React from 'react';
import { useParams } from 'react-router-dom';

const Pages = () => {
  let { pageName } = useParams();
  return (
    <div>
      <div>
        <div className="absolute right-12 lg:right-40 top-[2.5rem]">
          <div className="flex">
            <h1 className="font-bold mr-4 cursor-pointer">페이지생성</h1>
            <h1 className="font-bold mr-4 cursor-pointer">페이지삭제</h1>
            <h1 className="font-bold mr-4 cursor-pointer">링크연결</h1>
            <h1 className="font-bold mr-4 cursor-pointer">메모</h1>
          </div>
        </div>
      </div>

      <span>1</span>
      <span> {pageName}</span>
    </div>
  );
};

export default Pages;
