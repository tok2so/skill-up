import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './Account/Login';
import Register from './Account/Register';
import Profile from './Account/Profile';
import UserPage from './pages/UserPage';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

const RoutesContent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user/:username" element={<UserPage />} />
            <Route path="/dashboard" element={<Dashboard />}>
                <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
    );
};

export default RoutesContent;
