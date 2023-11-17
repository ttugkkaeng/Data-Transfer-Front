import axios from 'axios';
import { returnJsonType, PostReturnJsonType } from './Types';

const useGetAxios = (URL: string, getParamKey: string, getParamValue: string) => {
  const getUrl = `${URL}?${getParamKey}=${getParamValue}`;
  axios.get(getUrl)
    .then((Respone) => {
      console.log(Respone.data);
      return Respone.data;
    })
    .catch((Error) => {
      console.log(Error)
    })
}

const UseGetAxiosPageing = async (URL: string, startIndex: number, pageSize: string,)
  : Promise<returnJsonType | undefined> => {
  const indexingParam = `?pageIndex=${startIndex}&&pageSize=${pageSize}`;
  const getUrl = URL + indexingParam;
  console.log(getUrl);
  try {
    const reponse = await axios.get(getUrl);
    console.log(reponse.data);
    return reponse.data;
  }
  catch (Error) {
    console.log(Error);
    throw Error;
  }
};

const UseGetAxiosSearch = async (URL: string, searchKeyWord: string, startIndex: number, pageSize: string)
  : Promise<returnJsonType | undefined> => {
  const indexingParam = `?searchKeyWord=${searchKeyWord}&pageIndex=${startIndex}&pageSize=${pageSize}`;
  const getUrl = URL + indexingParam;
  console.log(getUrl);
  try {
    const reponse = await axios.get(getUrl);
    console.log(reponse.data);
    return reponse.data;
  }
  catch (Error) {
    console.log(Error);
    throw Error;
  }
};

/**  personalId 는 1로 고정
*    projectCodeList= 1,2,3,4,65,232,3123,
*/

const UsePostAxiosCreateJiraProject = async (postProjectList: string[], postUrl: string)
  : Promise<PostReturnJsonType | undefined> => {
  if (postProjectList.length > 0) {
    const data = { projectCode: postProjectList };
    console.log(postUrl);
    try {
      const response: PostReturnJsonType = await axios.post(postUrl, data);
      console.log(response);
      return response;
    }
    catch (Error) {
      console.log(Error)
      throw Error;
    }
  }
  else {
    return
  }
}



export { useGetAxios, UseGetAxiosPageing, UseGetAxiosSearch, UsePostAxiosCreateJiraProject };
