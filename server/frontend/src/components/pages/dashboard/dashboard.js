import { useSelector } from "react-redux";
import { Sidebar, Topbar } from "../../Navbars";
import { useLocation } from "react-router-dom";
import RegisterComponent from "../../register";

import "./dashboard.css";

const DashboardPage = () => {

    const reactUser = useSelector((state) => state.auth.user);
    const location = useLocation();
    let user = Boolean(reactUser) ? reactUser : JSON.parse(localStorage.getItem('user'));
    let content = undefined;

    switch (location.pathname) {
        case "/register/supervisor":
            content = <RegisterComponent user={user} registerType="supervisor" />
            break;
        default:
            break;
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard">
                <Sidebar user={user}/>
                <div className="dashboard-content-container">
                    <Topbar user={user}/>
                    <div className="dashboard-content">
                        { Boolean(content) && content }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;