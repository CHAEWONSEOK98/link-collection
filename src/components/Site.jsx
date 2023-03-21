const Site = ({ linkConnect, setLinkConnect }) => {
  //   link-delete
  const handleLinkDelete = (id) => {
    setLinkConnect((prev) => prev.filter((element) => element.id !== id));
  };
  return (
    <div>
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
                  className="dark:text-black absolute right-[-10px] top-[-12px] font-bold text-xs w-6 h-6 rounded-[100%] bg-slate-200 invisible group group-hover:visible "
                  onClick={() => handleLinkDelete(link.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <span className="absolute top-[-35px]  font-bold text-lg text-[#848484]">
            사이트
          </span>
        </section>
      )}
    </div>
  );
};

export default Site;
