import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from './components/Pages/LoginPage';
import TestPage from './components/Pages/TestPage';

function App() {
  const navigator = useNavigate();
  const [loginState] = useState(false);
  if (!loginState) {
    navigator("/Login")
  }
  return (
    (loginState ? <TestPage /> : <LoginPage />)
  )
}

export default App
