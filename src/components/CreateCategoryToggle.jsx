import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { categoryToggleState, mainPagesState } from '../atoms/mainPagesState';

const CreateCategoryToggle = () => {
  const [mainPages, setMainPages] = useRecoilState(mainPagesState);
  const [createCategoryToggle, setCreateCategoryToggle] =
    useRecoilState(categoryToggleState);
  const [pageName, setPageName] = useState('');

  const inputRef = useRef();

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
    inputRef.current.focus();
  };

  const handlePageNameChange = (e) => {
    setPageName(e.target.value);
  };

  // reset
  const handleReset = () => {
    setPageName('');
    setCreateCategoryToggle((prev) => false);
  };

  return (
    <div>
      {createCategoryToggle && (
        <form
          className="dark:text-black bg-gray-50 w-[30rem] h-[20rem] absolute top-[33%] left-[50%] translate-x-[-50%] border-black border-[1px] shadow-md flex rounded-lg"
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
                ref={inputRef}
                placeholder="목록 제목"
                id="name"
                className="h-12 py-[1px] px-[6px] mt-1 border-gray-400 border-2 rounded-md"
                value={pageName}
                onChange={handlePageNameChange}
              />
            </div>
            <div className="flex justify-end mt-20 space-x-3">
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

export default CreateCategoryToggle;
