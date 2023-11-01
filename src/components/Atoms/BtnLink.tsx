import { Link } from 'react-router-dom';
import './BtnLink.css';

type propsType = {
  btnValue: string,
  btnLink: string
}
export default function BtnLink(props: propsType) {
  return (
    <Link to={props.btnLink}>
      <div className='btn-link'> {props.btnValue}</div>
    </Link>
  )
}
