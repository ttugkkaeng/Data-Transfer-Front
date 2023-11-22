import { pageInfoType } from '../../Common/Types';
import { setIndexNumber } from '../../Common/UtilFunction';
import './PageIndex.css'

type PageIndexPropsType = {
  pageInfo: pageInfoType
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>
}

export default function PageIndex({ pageInfo, pageIndex, setPageIndex }: PageIndexPropsType) {
  const handleIndexplus = () => {
    if (pageIndex >= pageInfo?.totalPage - 1) {
      alert('마지막 페이지입니다.')
      return;
    }
    setPageIndex(pageIndex + 1)
  };
  const handleIndexMinus = () => {
    if (pageIndex <= 0) {
      alert('제일 첫 페이지입니다.')
      return;
    }
    setPageIndex(pageIndex - 1)
  }
  const pagingNumber = setIndexNumber(pageInfo.totalPage, pageIndex + 1);
  return (
    <div className='pageNumverSelector'>
      <button className='btn-previous' onClick={handleIndexMinus}>Previous</button>
      {pagingNumber.map((item, index) => (
        <div className='pageNumber' key={index}>{item}</div>
      ))}
      <button className='btn-next' onClick={handleIndexplus}>Next</button>
    </div>
  )
}
