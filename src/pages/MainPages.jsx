import { mainPagesState } from '../atoms/mainPagesState.js';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { mainPagesConnect } from '../atoms/mainPagesConnect.js';

const MainPages = () => {
  const [mainPages, setMainPages] = useRecoilState(mainPagesState);
  const [pageName, setPageName] = useState('');
  const [createPageToggle, setCreatePageToggle] = useState(false);

  const [pageDeleteName, setPageDeleteName] = useState('');
  const [pageDeleteNameToggle, setPageDeleteNameToggle] = useState(false);

  const [linkConnect, setLinkConnect] = useRecoilState(mainPagesConnect);
  const [linkName, setLinkName] = useState('');
  const [url, setUrl] = useState('');
  const [linkConnectToggle, setLinkConnectToggle] = useState(false);

  // page
  const handlePageToggle = () => {
    setCreatePageToggle((prev) => !prev);
  };

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
  const handlePageDeleteToggle = () => {
    setPageDeleteNameToggle((prev) => !prev);
  };

  const handlePageDeleteSubmit = (e) => {
    e.preventDefault();
    if (pageDeleteName.length === 0) return;
    setMainPages((prev) =>
      prev.filter((element) => element.pageName !== pageDeleteName)
    );
    setPageDeleteName('');
  };

  const handlePageDeleteChange = (e) => {
    setPageDeleteName(e.target.value);
  };

  // link
  const handleLinkConnectToggle = () => {
    setLinkConnectToggle((prev) => !prev);
  };

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
    <div className="max-w-[1600px] mx-auto w-full h-hull">
      <div className="absolute right-12 lg:right-40 top-[2.5rem]">
        <div className="flex">
          <button
            className="font-bold mr-4 cursor-pointer"
            onClick={handlePageToggle}
            disabled={pageDeleteNameToggle || linkConnectToggle}
          >
            목록 생성
          </button>
          <button
            className="font-bold mr-4 cursor-pointer"
            onClick={handlePageDeleteToggle}
            disabled={createPageToggle || linkConnectToggle}
          >
            목록 삭제
          </button>
          <button
            className="font-bold mr-4 cursor-pointer"
            onClick={handleLinkConnectToggle}
            disabled={createPageToggle || pageDeleteNameToggle}
          >
            사이트 추가
          </button>
          <Link to={`/note`}>
            <h1 className="font-bold mr-4 cursor-pointer">메모</h1>
          </Link>
        </div>
      </div>

      <section className="relative rounded-xl p-4 mt-5">
        <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {mainPages.map((mainPage) => (
            <Link to={`/${mainPage.pageName}`} key={mainPage.id}>
              <li className="border-black border-[2px] font-bold  py-4 px-1 text-center rounded-xl list-none">
                {mainPage.pageName}
              </li>
            </Link>
          ))}
        </ul>
        <span className="absolute top-[-35px] left-[50%] translate-x-[-50%] font-bold text-lg">
          목록
        </span>
      </section>

      <section className="relative mx-auto mt-20 p-4   rounded-xl">
        <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {linkConnect.map((link) => (
            <li
              className="relative border-gray-500 border-2 text-center rounded-lg h-20 group"
              key={link.id}
            >
              <a
                href={`${link.url}`}
                className=" font-bold text-[#848484] flex justify-center h-full items-center"
              >
                {link.linkName.substring(0, 18)}
              </a>

              <button
                className="absolute right-[-10px] top-[-12px] font-bold text-xs w-6 h-6 rounded-[100%] bg-slate-200 invisible group group-hover:visible "
                onClick={() => handleLinkDelete(link.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
        <span className="absolute top-[-35px] left-[50%] translate-x-[-50%] font-bold text-lg text-[#848484]">
          사이트
        </span>
      </section>

      {/* page */}
      {createPageToggle && (
        <form
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 border-blue-400 border-4"
          onSubmit={handlepageSubmit}
        >
          <input
            value={pageName}
            onChange={handlePageNameChange}
            placeholder="페이지 이름"
            className="outline-none"
          />
          <button>확인</button>
        </form>
      )}

      {/* pageDelete */}
      {pageDeleteNameToggle && (
        <form
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-blue-300 border-4"
          onSubmit={handlePageDeleteSubmit}
        >
          <input
            value={pageDeleteName}
            onChange={handlePageDeleteChange}
            className="outline-none"
          />
          <button>삭제</button>
        </form>
      )}

      {/* link */}
      {linkConnectToggle && (
        <form
          className="absolute top-[43%] left-[50%] translate-x-[-50%] border-green-600 border-2 flex"
          onSubmit={handleCreateLinkSubmit}
        >
          <div>
            <div>
              <label htmlFor="name">이름</label>
              <input
                id="name"
                className=" h-[72px] py-[1px] px-[6px] border-red-300 border-2 outline-none"
                value={linkName}
                onChange={handleLinkNameChange}
              />
            </div>
            <div>
              <label htmlFor="link">링크</label>
              <input
                id="link"
                className=" h-[72px] py-[1px] px-[6px] border-red-300 border-2 outline-none"
                value={url}
                onChange={handleUrlChange}
              />
            </div>
          </div>

          <button className=" h-[72px] py-[1px] px-[6px] border-red-300 border-2">
            완료
          </button>
        </form>
      )}
    </div>
  );
};

export default MainPages;
