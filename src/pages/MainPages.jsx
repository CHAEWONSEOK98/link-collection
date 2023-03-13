import { mainPagesState } from '../atoms/mainPagesState.js';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { mainPagesConnect } from '../atoms/mainPagesConnect.js';

const MainPages = () => {
  const [mainPages, setMainPages] = useRecoilState(mainPagesState);
  const [pageName, setPageName] = useState('');
  const [createPageToggle, setCreatePageToggle] = useState(false);

  const [linkConnect, setLinkConnect] = useRecoilState(mainPagesConnect);
  const [linkName, setLinkName] = useState('');
  const [url, setUrl] = useState('');
  const [linkConnectToggle, setLinkConnectToggle] = useState(false);

  // page
  const handlePageToggle = () => {
    setCreatePageToggle((prev) => !prev);
    setLinkConnectToggle(false);
    setLinkName('');
    setUrl('');
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
  const handlePageDelete = (id) => {
    setMainPages((prev) => prev.filter((element) => element.id !== id));
  };

  // link
  const handleLinkConnectToggle = () => {
    setLinkConnectToggle((prev) => !prev);
    setCreatePageToggle(false);
    setPageName('');
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

  // reset
  const handleReset = () => {
    setLinkName('');
    setUrl('');
    setLinkConnectToggle((prev) => false);

    setPageName('');
    setCreatePageToggle((prev) => false);
  };

  return (
    <div className="max-w-[1600px] mx-auto w-full h-hull">
      <div className="absolute right-12 lg:right-40 top-[2.5rem]">
        <div className="flex">
          <button
            className="font-bold mr-4 cursor-pointer"
            onClick={handlePageToggle}
          >
            목록 생성
          </button>
          <button
            className="font-bold mr-4 cursor-pointer"
            onClick={handleLinkConnectToggle}
          >
            사이트 추가
          </button>
          <Link to={`/note`}>
            <h1 className="font-bold mr-4 cursor-pointer">메모</h1>
          </Link>
        </div>
      </div>

      {mainPages.length > 0 && (
        <section className="relative rounded-xl p-4 mt-16">
          <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {mainPages.map((mainPage) => (
              <div className="relative group">
                <Link to={`/${mainPage.pageName}`} key={mainPage.id}>
                  <li className=" border-black border-2 font-bold  py-4 px-1 text-center rounded-xl list-none">
                    {mainPage.pageName}
                  </li>
                </Link>
                <button
                  className="absolute right-[-10px] top-[-12px] font-bold text-xs w-6 h-6 rounded-[100%] bg-slate-200 invisible group group-hover:visible "
                  onClick={() => handlePageDelete(mainPage.id)}
                >
                  X
                </button>
              </div>
            ))}
          </ul>
          <span className="absolute top-[-35px] left-[50%] translate-x-[-50%] font-bold text-lg">
            목록
          </span>
        </section>
      )}

      {linkConnect.length > 0 && (
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
      )}

      {/* page */}
      {createPageToggle && (
        <form
          className="bg-gray-50 w-[30rem] h-[20rem] absolute top-[43%] left-[50%] translate-x-[-50%] border-black border-[1px] shadow-md flex rounded-lg"
          onSubmit={handlepageSubmit}
        >
          <div className="h-full w-full px-6">
            <div className="flex justify-between items-center py-4 mt-4">
              <span className="font-bold text-lg">목록 생성</span>
              <button className="font-bold text-xl" onClick={handleReset}>
                X
              </button>
            </div>
            <div className="flex flex-col mt-10">
              <label htmlFor="name" className=" text-gray-400 font-bold">
                이름
              </label>
              <input
                placeholder="목록 제목"
                id="name"
                className="h-12 py-[1px] px-[6px] mt-1 border-gray-400 border-2 rounded-md"
                value={pageName}
                onChange={handlePageNameChange}
              />
            </div>
            <div className="flex justify-end mt-20 space-x-3">
              <button
                className="border-black border-[1px] px-7 py-[0.25rem] rounded-full text-sm"
                onClick={handleReset}
              >
                취소
              </button>
              <button className=" px-7 py-[0.25rem] rounded-full text-white bg-gray-400 text-sm">
                저장
              </button>
            </div>
          </div>
        </form>
      )}

      {/* link */}
      {linkConnectToggle && (
        <form
          className="bg-gray-50 w-[30rem] h-[20rem] absolute top-[43%] left-[50%] translate-x-[-50%] border-black border-[1px] shadow-md flex rounded-lg"
          onSubmit={handleCreateLinkSubmit}
        >
          <div className="h-full w-full px-6">
            <div className="flex justify-between items-center py-4 mt-4">
              <span className="font-bold text-lg">사이트 추가</span>
              <button className="font-bold text-xl" onClick={handleReset}>
                X
              </button>
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className=" text-gray-400 font-bold">
                이름
              </label>
              <input
                placeholder="웹 사이트 제목"
                id="name"
                className="h-12 py-[1px] px-[6px] mt-1 border-gray-400 border-2 rounded-md"
                value={linkName}
                onChange={handleLinkNameChange}
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="link" className="font-bold text-gray-500">
                URL
              </label>
              <input
                placeholder="웹 사이트 주소"
                id="link"
                className="h-12 py-[1px] px-[6px] mt-1 border-gray-400 border-2 rounded-md"
                value={url}
                onChange={handleUrlChange}
              />
            </div>
            <div className="flex justify-end mt-4 space-x-3">
              <button
                className="border-black border-[1px] px-7 py-[0.25rem] rounded-full text-sm"
                onClick={handleReset}
              >
                취소
              </button>
              <button className=" px-7 py-[0.25rem] rounded-full text-white bg-gray-400 text-sm">
                저장
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default MainPages;
