import { useLocation } from "react-router-dom";
import SupervisorRegisterComponent from "./supervisor/register";

const RegisterComponent = (props) => {

    const location = useLocation();
    let content;
    switch (location.pathname) {
        case "/register/supervisor":
            if (props.user.rol === 'admin') content = <SupervisorRegisterComponent />;
            break;
        default:
            break;
    }

    return (
        content
    )

}

export default RegisterComponent;
