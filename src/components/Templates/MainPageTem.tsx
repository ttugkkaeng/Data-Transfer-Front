import { Outlet } from 'react-router-dom';
import PageFooter from '../Organisms/PageFooter';
import PageHeader from '../Organisms/PageHeader';
import SideNavigator from '../Organisms/SideNavigator';
import './MainPageTem.css';

export default function MainPageTem() {
  return (
    <div>
      <PageHeader />
      <div className='MainPageTem'>
        <SideNavigator />
        <Outlet />
      </div>
      <PageFooter />
    </div>
  )
}
