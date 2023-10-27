import { useGetAxios } from '../../Common/Axios'

export default function PostTestCom() {
  //const getUrl = 'http://192.168.11.106:8080/transfer/project/db/list?test=test1234';
  const getUrl = 'http://localhost:8080/transfer/project/test';
  const paramKey = "test";
  const paramValue = "10";

  const HandleClick = () => {
    useGetAxios(getUrl, paramKey, paramValue);
  }
  return (
    <div>
      <input type='text' id='testValue' name='testValue' />
      <button onClick={HandleClick}>GOGOGOGOGOGOGOGO</button>
    </div>
  );
}
