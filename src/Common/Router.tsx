import App from '../App'
import ErrorPage from '../components/Pages/ErrorPage';
import LoginPage from '../components/Pages/LoginPage';
import MainPage from '../components/Pages/MainPage';

export const Router = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "page1", element: <ErrorPage /> }
    ],
  },
  {
    path: '/Login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  }
];
