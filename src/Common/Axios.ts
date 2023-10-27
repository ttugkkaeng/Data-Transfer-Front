import axios from 'axios';

export const useGetAxios = (URL: string, getParamKey: string, getParamValue: string) => {
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
