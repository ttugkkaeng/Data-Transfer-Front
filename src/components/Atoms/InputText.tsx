import './InputText.css';
type propsType = {
  inputid: string;
  value: string;
  changeHandle: () => void;
};
export default function InputText(props: propsType) {
  return (
    <input type='text' id={props.inputid} value={props.value} onChange={props.changeHandle}></input>
  )
}
