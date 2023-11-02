import App from '../App'
import PostForm from '../components/Molecules/PostForm';
import GetTableAndPostData from '../components/Organisms/GetTableAndPostData';
import InfoText from '../components/Organisms/InfoText';
import ErrorPage from '../components/Pages/ErrorPage';
import LoginPage from '../components/Pages/LoginPage';

export const Router = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <InfoText /> },
      { path: "load-wsslist", element: <GetTableAndPostData /> },
      { path: "transfer-state-list", element: <GetTableAndPostData /> },
      { path: "view-transfer-endlist", element: <GetTableAndPostData /> },
    ],
  },
  {
    path: '/Login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/testComponent',
    element: <PostForm />
  }
];
