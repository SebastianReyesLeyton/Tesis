import { useSelector } from "react-redux";
import { Sidebar, Topbar } from "../../Navbars";
import RegisterComponent from "../../register";
import { Navigate } from "react-router-dom";

import "./dashboard.css";
import { useEffect } from "react";

const DashboardPage = () => {

    const reactUser = useSelector((state) => state.auth.user);
    let user = Boolean(reactUser) ? reactUser : JSON.parse(localStorage.getItem('user'));
    
    useEffect(() => {

        if ( !Boolean(user) ) {
            return ( <Navigate to="/" /> );
        }
    });

    return (
        <div className="dashboard-container">
            <div className="dashboard">
                <Sidebar user={user}/>
                <div className="dashboard-content-container">
                    <Topbar user={user}/>
                    <div className="dashboard-content">
                        <RegisterComponent user={user} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;