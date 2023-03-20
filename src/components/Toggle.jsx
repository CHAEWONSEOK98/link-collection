import { useRef, useState } from 'react';

const Toggle = ({ setLinkConnect, siteToggle, setSiteToggle }) => {
  const [linkName, setLinkName] = useState('');
  const [url, setUrl] = useState('');

  const inputRef = useRef();

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
    inputRef.current.focus();
  };

  const handleLinkNameChange = (e) => {
    setLinkName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleReset = () => {
    setLinkName('');
    setUrl('');
    setSiteToggle((prev) => false);
  };
  return (
    <div>
      {siteToggle && (
        <form
          className="dark:text-black bg-gray-50 w-[30rem] h-[20rem] absolute top-[33%] left-[50%] translate-x-[-50%] border-black border-[1px] shadow-md flex rounded-lg"
          onSubmit={handleCreateLinkSubmit}
        >
          <div className="h-full w-full px-6">
            <div className="flex justify-between items-center py-4 mt-4">
              <span className=" font-bold text-lg">사이트 추가</span>
              <button className=" font-bold text-xl" onClick={handleReset}>
                X
              </button>
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className=" text-gray-400 font-bold">
                이름
              </label>
              <input
                ref={inputRef}
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
                className=" border-black border-[1px] px-7 py-[0.25rem] rounded-full text-sm"
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

export default Toggle;
