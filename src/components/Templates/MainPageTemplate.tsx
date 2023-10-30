import { Outlet } from 'react-router-dom';
import PageFooter from '../Organisms/PageFooter';
import PageHeader from '../Organisms/PageHeader';
import SideNavigator from '../Organisms/SideNavigator';
import './MainPageTemplate.css';

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
