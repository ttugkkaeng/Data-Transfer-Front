import { useEffect, useState } from 'react';
import BtnSubmit from '../Atoms/BtnSubmit';
import Table from '../Atoms/Table';
import SearchForm from '../Molecules/SearchForm';
import { returnJsonType, pageInfoType } from '../../Common/Types';
import { setUrl } from '../../Common/SetUrl';
import { urlType } from '../../Common/Types';
import './GetTableAndPostData.css';
import { UseGetAxiosSearch, UseGetAxiosPageing } from '../../Common/Axios';
import PageIndex from '../Atoms/PageIndex';

/***
 *  이슈) 
 *  1. 페이지 선택 후 검색을 날리면 index가 초기화가 안돼서 결과가 안뜸(Form쪽에서 최초 호출시 초기화 필요)
 *  2. 검색 후에 페이지 넘버링 선택시 useEffect에 걸린 전체 조회가 걸림(useEffect에서 분기를 걸면될것 같음)
 */

enum serviceList { transbefore = 'trans-before', transafter = 'trans-after', transend = 'trans-end' }
type ServicePropsType = { serviceType: serviceList }

export default function GetTableAndPostData({ serviceType }: ServicePropsType) {
  const [getViewList, setGetViewList] = useState<returnJsonType | undefined>(undefined);
  const [search, setSearch] = useState<string>('');

  const urlset: urlType = setUrl(serviceType);
  const pageSize = "10";

  const [pageInfo, setPageInfo] = useState<pageInfoType>({ totalPage: 0, numberOfElement: 0 });
  const [pageIndex, setPageIndex] = useState(0);

  const [postProjectList, setPostProjectList] = useState<Array<string>>([]);

  useEffect(() => {
    async function axiosGetPaging() {
      let result;
      if (search !== '') {
        result = await UseGetAxiosSearch(urlset.getSerchURL, search, pageIndex, pageSize);
        setGetViewList(result);
      }
      else {
        result = await UseGetAxiosPageing(urlset.getViewURL, pageIndex, pageSize);
        setGetViewList(result);
      }
      if (result !== undefined) setPageInfo({ totalPage: result.totalPages, numberOfElement: result.numberOfElements });
    }
    axiosGetPaging();
  }, [pageIndex, search, serviceType])

  return (
    <div className='table-container'>
      <SearchForm setPageIndex={setPageIndex} setSearch={setSearch} />
      <Table getViewList={getViewList} setPostProjectList={setPostProjectList} postProjectList={postProjectList} />
      <PageIndex pageInfo={pageInfo} pageIndex={pageIndex} setPageIndex={setPageIndex} />
      <BtnSubmit children={undefined}></BtnSubmit>
      <p>{JSON.stringify(postProjectList)}</p>
    </div >
  )
}
