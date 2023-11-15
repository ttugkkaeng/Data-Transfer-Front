import axios from 'axios';
import { returnJsonType } from './Types';

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

const UsePostAxiosCreateJiraProject = (postProjectList: string[]) => {
  postProjectList.map((item, index) => {

  });

}



export { useGetAxios, UseGetAxiosPageing, UseGetAxiosSearch, UsePostAxiosCreateJiraProject };
