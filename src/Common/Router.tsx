import App from '../App'
import PostTestCom from '../components/Atoms/PostTestCom';
import InfoText from '../components/Organisms/InfoText';
import SideNavigator from '../components/Organisms/SideNavigator';
import ErrorPage from '../components/Pages/ErrorPage';
import LoginPage from '../components/Pages/LoginPage';

export const Router = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <InfoText /> },
      { path: "WssList", element: <PostTestCom /> }
    ],
  },
  {
    path: '/Login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/testComponent',
    element: <SideNavigator />
  }
];
