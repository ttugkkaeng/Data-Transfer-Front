import { Outlet } from 'react-router-dom';
import PageFooter from '../Organisms/PageFooter';
import PageHeader from '../Organisms/PageHeader';
import SideNavigator from '../Organisms/SideNavigator';
import './MainPageTemplate.css';

export default function MainPageTemplate() {
  return (
    <main className='first-section-div'>
      <PageHeader />
      <div className='contents-section-style'>
        <SideNavigator />
        <div className='outlet-wrapper'>
          <Outlet />
        </div>
      </div>
      <PageFooter />
    </main>
  )
}
