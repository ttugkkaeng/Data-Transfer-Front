type propsType = {
  inputid: string
}
export default function InputText({ inputid }: propsType) {
  return (
    <input type='text' id={inputid}></input>
  )
}
