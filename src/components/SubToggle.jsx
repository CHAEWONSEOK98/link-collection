import { useRecoilState } from 'recoil';
import { subPagesState, siteToggleState } from '../atoms/subPagesState';
import Toggle from './Toggle';

const SubToggle = () => {
  const [linkConnect, setLinkConnect] = useRecoilState(subPagesState);
  const [siteToggle, setSiteToggle] = useRecoilState(siteToggleState);

  return (
    <Toggle
      setLinkConnect={setLinkConnect}
      siteToggle={siteToggle}
      setSiteToggle={setSiteToggle}
    />
  );
};

export default SubToggle;
