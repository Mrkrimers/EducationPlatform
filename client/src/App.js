import { Route, Routes } from 'react-router-dom';
import './App.css';
import PreviewPage from './pages/PreviewPage/PreviewPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import StudentPage from './pages/StudentPage/StudentPage';
import CoursePage from './pages/CoursePage/CoursePage';
import MyContext from './context/MyContext';
import useAuth from './hooks/useAuth';

function App() {
  const dataToken = useAuth();

  return (

    <MyContext.Provider value={dataToken}>
      <Routes>

        <Route path='/' element={<PreviewPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/students' element={<StudentPage />} />
        <Route path='/course/:id' element={<CoursePage />} />

      </Routes >
    </MyContext.Provider>

  );
}

export default App;
