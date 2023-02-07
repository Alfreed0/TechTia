import React from 'react';
import {
    Route,
    Routes,
    Navigate,
    BrowserRouter as Router
} from 'react-router-dom';
import Access from '../components/access/access';
import User from '../components/user/user';
import Register from '../components/register/register';
import Landing from '../components/landing/landing';

function TiaRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate replace to='/landing'/>} />
                <Route path='/user' element={<User/>} />
                <Route path='/access' element={<Access/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/landing' element={<Landing/>} />
            </Routes>
        </Router>
    );
}

export default TiaRoutes;