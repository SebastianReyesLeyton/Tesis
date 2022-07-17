import { useLocation } from "react-router-dom";
import RegisterComponent from "./register";
import ShowComponent from "./show";
import UpdateComponent from "./update";
import ShowUserComponent from "./show-user";

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
        case "edit-user":
            content = <UpdateComponent user={props.user} type={location.pathname.split('/')[2]}/>
            break;
        case "show-user":
            content = <ShowUserComponent user={props.user} type={location.pathname.split('/')[2]}/>
            break;
        default:
            break;
    }

    return (
        content
    )
}

export default DashboardContentComponent;