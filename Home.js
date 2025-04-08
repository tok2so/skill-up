import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Главная</h1>
            <Link to="/login">Login</Link> |{' '}
            <Link to="/register">Register</Link> |{' '}
            <Link to="/user/alex">User Page (alex)</Link>
        </div>
    );
}
