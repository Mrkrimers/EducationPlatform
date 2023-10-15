import { Routes, Route } from "react-router-dom";
import PreviewPage from '../pages/PreviewPage/PreviewPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import StudentPage from '../pages/StudentPage/StudentPage';
import CoursePage from '../pages/CoursePage/CoursePage';
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function routesProvider(isAuth) {
    if (isAuth) {
        return (
            <Routes>
                <Route path='/' element={<PreviewPage />} />
                <Route path='/students' element={<StudentPage />} />
                <Route path='/course/:id' element={<CoursePage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        )
    }
    else {
        return (
            <Routes>
                <Route path='/' element={<PreviewPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/registration' element={<RegistrationPage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        )
    }
}

export default routesProvider;