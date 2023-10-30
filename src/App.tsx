import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from './components/Pages/LoginPage';
import MainPage from './components/Pages/MainPage';

function App() {
  const navigator = useNavigate();
  const [loginState] = useState(true);
  if (!loginState) {
    navigator("/Login")
  }
  return (
    (loginState ? <MainPage /> : <LoginPage />)
  )
}

export default App
