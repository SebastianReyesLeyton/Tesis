import { useLocation } from "react-router-dom";
import RegisterComponent from "./register";
import ShowComponent from "./show";

const DashboardContentComponent = (props) => {

    const location = useLocation();
    let content;

    switch (location.pathname.split('/')[1]) {
        case "register":
            content = <RegisterComponent user={props.user} type={location.pathname.split('/')[2]}/>
            break;
        case "show":
            content = <ShowComponent user={props.user} type={location.pathname.split('/')[2]}/>
            break;
        default:
            break;
    }

    return (
        content
    )
}

export default DashboardContentComponent;