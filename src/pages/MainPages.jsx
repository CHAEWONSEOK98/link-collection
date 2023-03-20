import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { mainPagesConnect } from '../atoms/mainPagesConnect';

import Categorys from '../components/Categorys.jsx';
import Sites from '../components/Sites.jsx';
import CreateCategoryToggle from '../components/CreateCategoryToggle.jsx';
import CreateSiteToggle from '../components/CreateSiteToggle.jsx';
import Header from '../components/Header.jsx';

const MainPages = () => {
  const [linkConnect, setLinkConnect] = useRecoilState(mainPagesConnect);
  return (
    <div className="max-w-[1600px] mx-auto w-full h-hull">
      <Header />

      <Categorys />
      <Sites linkConnect={linkConnect} setLinkConnect={setLinkConnect} />

      {/* page toggle */}
      <CreateCategoryToggle />

      {/* link toggle */}
      <CreateSiteToggle />
    </div>
  );
};

export default MainPages;
