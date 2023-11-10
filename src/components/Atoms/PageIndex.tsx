import { pageInfoType } from '../../Common/Types';

type propsType = {
  pageInfo: pageInfoType | undefined
  startIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>
}

const setIndexNumber: Array<number> = (startIndex: number, pageCount: number, totalPage: number) => {
  const newIndexArray: Array<number> = [];
  for (let i = startIndex; i++; pageCount) {
    newIndexArray.push(i + 1);
  }
  if (pageCount > 10) newIndexArray.push(totalPage);
  return newIndexArray;
}

export default function PageIndex({ pageInfo, startIndex, setPageIndex }: propsType) {
  const handleIndexplus = () => { setPageIndex(startIndex + 1) };
  const handleIndexMinus = () => { setPageIndex(startIndex - 1) }

  return (
    <div>
      <button className='btn-previous' onClick={handleIndexMinus}>Previous</button>

      <button className='btn-next' onClick={handleIndexplus}>Next</button>
    </div>
  )
}
