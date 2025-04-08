import { Outlet, Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="settings">Перейти к настройкам</Link>
            <Outlet />
        </div>
    );
}
