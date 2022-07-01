import { useSelector } from "react-redux";
import { Sidebar, Topbar } from "../../Navbars";

import "./dashboard.css";

const DashboardPage = () => {

    const reactUser = useSelector((state) => state.auth.user);
    let user = Boolean(reactUser) ? reactUser : JSON.parse(localStorage.getItem('user'));

    return (
        <div className="dashboard-container">
            <div className="dashboard">
                <Sidebar user={user}/>
                <div className="dashboard-content-container">
                    <Topbar user={user}/>
                    <div className="dashboard-content">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;