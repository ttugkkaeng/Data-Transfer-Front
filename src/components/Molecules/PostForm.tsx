import { useState } from 'react';
import { UseGetAxiosPageing } from '../../Common/Axios';
import BtnSubmit from '../Atoms/BtnSubmit';
import InputLabel from '../Atoms/InputLabel';
import InputText from '../Atoms/InputText';
import { returnJsonType } from '../../Common/Types';
import './PostForm.css';

type propsType = {
  pageIndex: number;
  getSerchURL: string;
  setGetViewList: returnJsonType | undefined
};

export default function PostForm({ pageIndex, getSerchURL, setGetViewList }: propsType) {
  const inputId = 'serchInput';
  const btnValue: string = "검색";
  const pageSize = "10";
  const [input, setInput] = useState<string>('');

  const handleChangeText: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //새로고침방지
    const result = await UseGetAxiosPageing(getSerchURL, pageIndex, pageSize);
    setGetViewList(result);
  }

  return (
    <div id='searchArea'>
      <form onSubmit={handleFormSubmit}>
        <InputLabel inputId={inputId} />
        <InputText inputid={inputId} value={input} changeHandle={handleChangeText} />
        <BtnSubmit>{btnValue}</ BtnSubmit>
      </form>
    </div>
  )
}
// 함수를 보낼때 저렇게 보내야하는건 진짜 상상도못함 ㄴㅇㄱ
