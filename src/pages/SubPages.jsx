import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { subPagesState } from '../atoms/subPagesState';

import SubHeader from '../components/SubHeader';
import SubToggle from '../components/SubToggle';
import Sites from '../components/Sites';

const SubPages = () => {
  let { subPagesName } = useParams();
  const [linkConnect, setLinkConnect] = useRecoilState(subPagesState);

  return (
    <div>
      <SubHeader />
      <Sites linkConnect={linkConnect} setLinkConnect={setLinkConnect} />
      <SubToggle />
    </div>
  );
};

export default SubPages;
