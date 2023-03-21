import { useEffect, useState } from 'react';
import Site from './Site';
import SubSitesToggle from './SubSitesToggle';
import { useParams } from 'react-router-dom';

const SubHome = () => {
  let { subPagesName } = useParams();
  const [linkConnect, setLinkConnect] = useState(
    () => JSON.parse(window.localStorage.getItem(`${subPagesName}`)) || []
  );

  useEffect(() => {
    window.localStorage.setItem(`${subPagesName}`, JSON.stringify(linkConnect));
  }, [linkConnect]);

  return (
    <div>
      <SubSitesToggle setLinkConnect={setLinkConnect} />
      <Site linkConnect={linkConnect} setLinkConnect={setLinkConnect} />
    </div>
  );
};

export default SubHome;
