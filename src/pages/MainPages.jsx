import Header from '../components/Header.jsx';
import Categorys from '../components/Categorys.jsx';
import MainSites from '../components/MainSites.jsx';

const MainPages = () => {
  return (
    <div className="max-w-[1600px] mx-auto w-full h-hull">
      <Header />
      <Categorys />
      <MainSites />
    </div>
  );
};

export default MainPages;
