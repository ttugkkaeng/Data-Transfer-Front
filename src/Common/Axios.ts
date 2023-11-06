import axios from 'axios';
interface returnJsonType {
  content: Array<object>;
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: boolean
  pagealbe: object
  size: number
  sort: object
  totalElements: number
  titalPage: number
}

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

const UseGetAxiosPageing = (URL: string, startIndex: number, pageSize: string,) => {
  const indexingParam = `?pageIndex=${startIndex}&&pageSize=${pageSize}`
  const getUrl = URL + indexingParam;
  axios.get(getUrl)
    .then((Respone) => {
      console.log(Respone.data);
      return Respone.data;
    })
    .catch((Error) => {
      console.log(Error)
    })
}

export { useGetAxios, UseGetAxiosPageing };
