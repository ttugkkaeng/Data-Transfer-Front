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
  const handlePageIndex = (pageIndex: number) => {
    setPageIndex(pageIndex);
  }
  const pagingNumber = setIndexNumber(pageInfo.totalPage, pageIndex + 1);
  return (
    <div className='page-number-selector'>
      <button className='btn-previous' type='button' onClick={handleIndexMinus}>Previous</button>
      {pagingNumber.map((item, index) => (
        item === (pageIndex + 1) ?
          <button className='page-number-select' type='button' key={index} value={item - 1}>{item}</button>
          : <button className='page-number-not-select' type='button' key={index} value={item - 1} onClick={() => handlePageIndex(item - 1)}>{item}</button>
      ))}
      <button className='btn-next' type='button' onClick={handleIndexplus}>Next</button>
    </div>
  )
}
