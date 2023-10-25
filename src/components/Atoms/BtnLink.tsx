type propsType = {
  btnValue: string,
  btnLink: string
}
export default function BtnLink(props: propsType) {
  const handleBtnClick = () => {
    alert(props.btnLink);
  }
  return (
    <div onClick={handleBtnClick}> {props.btnValue}</div>
  )
}
