import { useEffect, useState } from 'react';

import MainSitesToggle from './MainSitesToggle.jsx';
import Site from './Site';

const MainSites = () => {
  const [linkConnect, setLinkConnect] = useState(
    () => JSON.parse(window.localStorage.getItem('linkConnect')) || []
  );

  useEffect(() => {
    window.localStorage.setItem('linkConnect', JSON.stringify(linkConnect));
  }, [linkConnect]);

  return (
    <div>
      <MainSitesToggle setLinkConnect={setLinkConnect} />
      <Site linkConnect={linkConnect} setLinkConnect={setLinkConnect} />
    </div>
  );
};

export default MainSites;
