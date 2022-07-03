import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, DashboardPage } from './components/pages';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
    
    const AuthUser = useSelector((state) => state.auth.user );
    let user = Boolean(AuthUser) || localStorage.length === 3;
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={!user ? <LoginPage /> : <Navigate to="/home" />} />
                <Route path='/home' element={user ? <DashboardPage /> : <Navigate to="/" />}/>
                <Route path='/register'>
                    <Route path='supervisor' element={user ? <DashboardPage /> : <Navigate to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;