import { Link } from 'react-router-dom';
import './PageHeader.css';

export default function PageHeader() {
  return (
    <header className='header-style'>
      <Link to="/">
        <img src="/public/images/logo.png" className="markanyLogo" />
      </Link>
    </header>
  )
}
