import { Link } from 'react-router-dom';
import './BtnLink.css';

type propsType = {
  btnValue: string,
  btnLink: string
}
export default function BtnLink(props: propsType) {
  const handleBtnClick = () => {
    alert(props.btnLink);
  }
  return (
    <Link to={props.btnLink}>
      <div className='BtnLink' onClick={handleBtnClick}> {props.btnValue}</div>
    </Link>
  )
}
