import { useState } from 'react';
import BtnSubmit from '../Atoms/BtnSubmit';
import Table from '../Atoms/Table';
import PostForm from '../Molecules/PostForm';
import { returnJsonType } from '../../Common/Types';
import { setUrl } from '../../Common/SetUrl';
import { urlType } from '../../Common/Types';
import './GetTableAndPostData.css';

enum serviceList { transbefore = 'trans-before', transafter = 'trans-after', transend = 'trans-end' }
type propsType = { serviceType: serviceList; }

export default function GetTableAndPostData({ serviceType = serviceList.transbefore }: propsType) {
  const [pageIndex, setPageIndex] = useState(0);
  const [getViewList, setGetViewList] = useState<returnJsonType | undefined>(undefined);
  const urlset: urlType = setUrl(serviceType);

  return (
    <div className='table-container'>
      <PostForm pageIndex={pageIndex} getSerchURL={urlset.getSerchURL} listStateHandler={setGetViewList} />
      <Table />
      <BtnSubmit children={undefined}></BtnSubmit>
    </div >
  )
}
