import { Link, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { subPagesState } from '../atoms/subPagesState';

const SubPages = () => {
  let { subPagesName } = useParams();
  const [subPages, setSubpages] = useRecoilState(subPagesState);
  return (
    <div>
      <div>
        <div className="absolute right-12 lg:right-40 top-[2.5rem]">
          <div className="flex">
            <h1 className="font-bold mr-4 cursor-pointer">목록생성</h1>
            <h1 className="font-bold mr-4 cursor-pointer">링크연결</h1>
          </div>
        </div>
      </div>

      <div>
        <Link to={`/lastPage`}>asdf</Link>
      </div>
    </div>
  );
};

export default SubPages;
