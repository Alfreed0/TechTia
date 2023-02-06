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

function TiaRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate replace to='/access'/>} />
                <Route path='/user' element={<User/>} />
                <Route path='/access' element={<Access/>} />
                <Route path='/register' element={<Register/>} />
            </Routes>
        </Router>
    );
}

export default TiaRoutes;