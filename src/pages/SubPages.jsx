import { Link, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { subPagesState } from '../atoms/subPagesState';

const SubPages = () => {
  let { subPagesName } = useParams();
  const [subPages, setSubpages] = useRecoilState(subPagesState);
  return (
    <div>
      <div>
        <Link to={`/lastPage`}>subPages</Link>
      </div>
    </div>
  );
};

export default SubPages;
