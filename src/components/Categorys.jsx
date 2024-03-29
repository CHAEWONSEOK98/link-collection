import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CategoryToggle from './CategoryToggle.jsx';

const Categorys = () => {
  const [mainPages, setMainPages] = useState(
    () => JSON.parse(window.localStorage.getItem('category')) || []
  );

  useEffect(() => {
    window.localStorage.setItem('category', JSON.stringify(mainPages));
  }, [mainPages]);

  // pageDelete
  const handlePageDelete = (id) => {
    setMainPages((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <div>
      <CategoryToggle setMainPages={setMainPages} />
      {mainPages.length > 0 && (
        <section className="relative rounded-xl p-4 mt-16">
          <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 xl:grid-cols-8 gap-4">
            {mainPages.map((mainPage) => (
              <div className="relative group">
                <Link to={`/${mainPage.pageName}`} key={mainPage.id}>
                  <li className="dark:border-white border-black border-2 font-bold  py-4 px-1 text-center rounded-xl list-none">
                    {mainPage.pageName}
                  </li>
                </Link>
                <button
                  className="dark:text-black absolute right-[-10px] top-[-12px] font-bold text-xs w-6 h-6 rounded-[100%] bg-slate-200 invisible group group-hover:visible "
                  onClick={() => handlePageDelete(mainPage.id)}
                >
                  X
                </button>
              </div>
            ))}
          </ul>
          <span className="absolute top-[-35px]  font-bold text-lg">목록</span>
        </section>
      )}
    </div>
  );
};

export default Categorys;
