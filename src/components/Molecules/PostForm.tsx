import { useState } from 'react';
import { UseGetAxiosPageing } from '../../Common/Axios';
import BtnSubmit from '../Atoms/BtnSubmit';
import InputLabel from '../Atoms/InputLabel';
import InputText from '../Atoms/InputText';
import './PostForm.css';

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


export default function PostForm() {
  //testValue
  const testIndex = 0;
  const testGetURL = "http://localhost:8080//transfer/project/after/list";
  const [setTestGetResult] = useState<returnJsonType>();
  //---------------------
  const inputId = 'serchInput';
  const btnValue: string = "검색";
  const pageSize = "10";
  const [input, setInput] = useState<string>('');
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleFormSubmit = () => {
    setTestGetResult(UseGetAxiosPageing(testGetURL, testIndex, pageSize));
  }
  return (
    <div id='searchArea'>
      <form onSubmit={handleFormSubmit}>
        <InputLabel inputId={inputId} />
        <InputText inputid={inputId} value={input} changeHandle={() => handleChangeText} />
        <BtnSubmit>{btnValue}</ BtnSubmit>
      </form>
    </div>
  )
}
// 함수를 보낼때 저렇게 보내야하는건 진짜 상상도못함 ㄴㅇㄱ
