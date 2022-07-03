import SupervisorRegisterComponent from "./supervisor/register";

const RegisterComponent = (props) => {

    switch (props.user.rol) {
        case "admin":
            switch (props.registerType) {
                case "supervisor":
                    return SupervisorRegisterComponent(props);
                default:
                    return ;
            }
        default:
            return ;
    }

}

export default RegisterComponent;
