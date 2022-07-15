import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, DashboardPage } from './components/pages';

const App = () => {
    

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/home' element={<DashboardPage />}/>
                <Route path='/register'>
                    <Route path='supervisor' element={<DashboardPage />} />
                    <Route path='therapist' element={<DashboardPage />} />
                    <Route path='patient' element={<DashboardPage />} />
                </Route>
                <Route path='/show'>
                    <Route path='supervisor' element={<DashboardPage />} />
                    <Route path='therapist' element={<DashboardPage />} />
                    <Route path='patient' element={<DashboardPage />} />
                </Route>
                <Route path='/edit-user'>
                    <Route path='supervisor/:id' element={<DashboardPage />} />
                    <Route path='therapist/:id' element={<DashboardPage />} />
                    <Route path='patient/id' element={<DashboardPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;