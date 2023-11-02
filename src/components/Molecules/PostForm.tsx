import InputText from '../Atoms/InputText';
// import BtnSubmit from '../Atoms/BtnSubmit';
import './PostInputText.css';

export default function PostForm() {
  const inputud = 'test';
  return (
    <form>
      <InputText inputid={inputud} />
    </form>
  )
}
