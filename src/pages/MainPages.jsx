import { mainPagesState } from '../atoms/mainPagesState.js';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { mainPagesConnect } from '../atoms/mainPagesConnect.js';

const MainPages = () => {
  const [mainPages, setMainPages] = useRecoilState(mainPagesState);
  const [pageName, setPageName] = useState('');

  const [pageDeleteName, setPageDeleteName] = useState('');

  const [linkConnect, setLinkConnect] = useRecoilState(mainPagesConnect);
  const [linkName, setLinkName] = useState('');
  const [url, setUrl] = useState('');

  // page
  const handlepageSubmit = (e) => {
    e.preventDefault();
    if (pageName.length === 0) return;
    setMainPages((prev) => [
      ...prev,
      {
        pageName,
        id: Math.random(),
      },
    ]);
    setPageName('');
  };

  const handlePageNameChange = (e) => {
    setPageName(e.target.value);
  };

  // pageDelete
  const handlePageDeleteSubmit = (e) => {
    e.preventDefault();
    if (pageDeleteName.length === 0) return;
    setMainPages((prev) =>
      prev.filter((element) => element.pageName !== pageDeleteName)
    );
    setPageDeleteName('');
  };

  const handlePageDelete = () => {};

  const handlePageDeleteChange = (e) => {
    setPageDeleteName(e.target.value);
  };

  // link
  const handleCreateLinkSubmit = (e) => {
    e.preventDefault();
    if (url.length < 10 || linkName.length === 0) return;
    setLinkConnect((prev) => [
      ...prev,
      {
        linkName,
        url,
        id: Math.random(),
      },
    ]);
    setLinkName('');
    setUrl('');
  };

  const handleLinkNameChange = (e) => {
    setLinkName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleLinkDelete = (id) => {
    setLinkConnect((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <div className="max-w-[1440px] mx-auto w-full h-hull border-orange-400 border-4">
      <div className="absolute right-12 lg:right-40 top-[2.5rem]">
        <div className="flex">
          <h1 className="font-bold mr-4 cursor-pointer">목록생성</h1>
          <h1
            className="font-bold mr-4 cursor-pointer"
            onClick={handlePageDelete}
          >
            목록삭제
          </h1>
          <h1 className="font-bold mr-4 cursor-pointer">링크연결</h1>
          <Link to={`/note`}>
            <h1 className="font-bold mr-4 cursor-pointer">메모</h1>
          </Link>
        </div>
      </div>

      <main className="flex justify-between ">
        <section>
          <ul>
            {mainPages.map((mainPage) => (
              <Link to={`/${mainPage.pageName}`} key={mainPage.id}>
                <li className="w-[5%] h-10 border list-none">
                  {mainPage.pageName}
                </li>
              </Link>
            ))}
          </ul>
        </section>

        <section>
          <ul>
            {linkConnect.map((link) => (
              <li className="border-yellow-300 border-2" key={link.id}>
                <a href={`${link.url}`} className="font-bold">
                  {link.linkName}
                </a>
                <button
                  className="font-bold ml-2"
                  onClick={() => handleLinkDelete(link.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* page */}
      <form
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 border-blue-400 border-4"
        onSubmit={handlepageSubmit}
      >
        <input
          value={pageName}
          onChange={handlePageNameChange}
          placeholder="페이지 이름"
        />
        <button>확인</button>
      </form>

      <form
        className="absolute top-[50%] left-[60%] border-blue-300 border-4"
        onSubmit={handlePageDeleteSubmit}
      >
        <input value={pageDeleteName} onChange={handlePageDeleteChange} />
        <button>삭제</button>
      </form>

      {/* link */}
      <form
        className="absolute top-[50%] left-[50%] translate-x-[-50%] border-green-600 border-2 flex"
        onSubmit={handleCreateLinkSubmit}
      >
        <div>
          <div>
            <label htmlFor="name">이름</label>
            <input
              id="name"
              className=" h-[72px] py-[1px] px-[6px] border-red-300 border-2"
              value={linkName}
              onChange={handleLinkNameChange}
            />
          </div>
          <div>
            <label htmlFor="link">링크</label>
            <input
              id="link"
              className=" h-[72px] py-[1px] px-[6px] border-red-300 border-2"
              value={url}
              onChange={handleUrlChange}
            />
          </div>
        </div>

        <button className=" h-[72px] py-[1px] px-[6px] border-red-300 border-2">
          완료
        </button>
      </form>
    </div>
  );
};

export default MainPages;
