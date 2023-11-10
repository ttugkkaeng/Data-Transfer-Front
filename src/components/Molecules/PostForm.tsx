import { useState } from 'react';
import { UseGetAxiosSearch } from '../../Common/Axios';
import BtnSubmit from '../Atoms/BtnSubmit';
import InputLabel from '../Atoms/InputLabel';
import InputText from '../Atoms/InputText';
import { returnJsonType } from '../../Common/Types';
import './PostForm.css';

type propsType = {
  getSerchURL: string;
  //set함수를 보낼때는 타입이 이런식이다.
  setGetViewList: React.Dispatch<React.SetStateAction<returnJsonType | undefined>>
  pageIndex: number;
  pageSize: string;
};

export default function PostForm({ getSerchURL, setGetViewList, pageIndex, pageSize }: propsType) {
  const searchKeyWord = 'searchKeyWord'; //백에서 오타냄 이거 백이바꾸면 수정해야함
  const btnValue: string = "검색";
  const [input, setInput] = useState<string>('');

  const handleChangeText: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //새로고침방지
    const result = await UseGetAxiosSearch(getSerchURL, input, pageIndex, pageSize);
    setGetViewList(result);
  }

  return (
    <div id='searchArea'>
      <form onSubmit={handleFormSubmit}>
        <InputLabel inputId={searchKeyWord} />
        <InputText inputid={searchKeyWord} value={input} changeHandle={handleChangeText} />
        <BtnSubmit>{btnValue}</ BtnSubmit>
      </form>
    </div>
  )
}
