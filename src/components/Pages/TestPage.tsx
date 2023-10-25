import { Outlet } from 'react-router-dom';
import PageFooter from '../Organisms/PageFooter';
import PageHeader from '../Organisms/PageHeader';

export default function TestPage() {
  return (
    <div>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </div>
  )
}
