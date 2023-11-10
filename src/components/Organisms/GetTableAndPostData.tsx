import { useEffect, useState } from 'react';
import BtnSubmit from '../Atoms/BtnSubmit';
import Table from '../Atoms/Table';
import PostForm from '../Molecules/PostForm';
import { returnJsonType } from '../../Common/Types';
import { setUrl } from '../../Common/SetUrl';
import { urlType } from '../../Common/Types';
import './GetTableAndPostData.css';
import { UseGetAxiosPageing } from '../../Common/Axios';

enum serviceList { transbefore = 'trans-before', transafter = 'trans-after', transend = 'trans-end' }
type propsType = { serviceType: serviceList; }

export default function GetTableAndPostData({ serviceType = serviceList.transbefore }: propsType) {
  const [getViewList, setGetViewList] = useState<returnJsonType | undefined>(undefined);
  const urlset: urlType = setUrl(serviceType);
  const pageSize = "10";
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const result = UseGetAxiosPageing(urlset.getViewURL, pageIndex, pageSize);
    setGetViewList(result);
  }, [])

  return (
    <div className='table-container'>
      <PostForm getSerchURL={urlset.getSerchURL} setGetViewList={setGetViewList} pageIndex={pageIndex} pageSize={pageSize} />
      <Table getViewList={getViewList} />
      <BtnSubmit children={undefined}></BtnSubmit>
    </div >
  )
}
