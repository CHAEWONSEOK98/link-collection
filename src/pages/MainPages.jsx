import { Link } from 'react-router-dom';

import Categorys from '../components/Categorys.jsx';
import Sites from '../components/Sites.jsx';
import CreateCategoryToggle from '../components/CreateCategoryToggle.jsx';
import CreateSiteToggle from '../components/CreateSiteToggle.jsx';

const MainPages = () => {
  return (
    <div className="max-w-[1600px] mx-auto w-full h-hull">
      <Categorys />
      <Sites />

      {/* page toggle */}
      <CreateCategoryToggle />

      {/* link toggle */}
      <CreateSiteToggle />
    </div>
  );
};

export default MainPages;
