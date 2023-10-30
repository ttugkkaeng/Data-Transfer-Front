import { Link } from 'react-router-dom';
import './PageHeader.css';

export default function PageHeader() {
  return (
    <div className='HeaderBox'>
      <Link to="/">
        Here is PageHeader
      </Link>
    </div>
  )
}
