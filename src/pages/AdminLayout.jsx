
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function AdminLayout() {
    return (
        <div className="admin-content">
            <Sidebar />
            <div className="container">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout