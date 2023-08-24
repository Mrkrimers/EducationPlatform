import { Route, Routes } from 'react-router-dom';
import './App.css';
import PreviewPage from './pages/PreviewPage/PreviewPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import StudentPage from './pages/StudentPage/StudentPage';

function App() {
  return (
    <Routes>

      <Route path='/' element={<PreviewPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/registration' element={<RegistrationPage />} />
      <Route path='/students' element={<StudentPage />} />

    </Routes >
  );
}

export default App;
