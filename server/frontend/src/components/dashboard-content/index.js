import { useLocation } from "react-router-dom";
import RegisterComponent from "./register";
import ShowComponent from "./show";
import UpdateComponent from "./update";
import ShowUserComponent from "./show-user";
import ShowTestsComponent from "./show-tests";
import ShowTestComponent from "./show-test";
import QuestionFormComponent from "./questions";
import TherapyComponent from "./therapy";
import TherapistComponent from "./therapies";

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
        case "create-test":
            content = <RegisterComponent user={props.user} type="create-test" />
            break;
        case "show-tests":
            content = <ShowTestsComponent user={props.user} />
            break;
        case "show-test":
            content = <ShowTestComponent user={props.user} />
            break;
        case "add-question":
            content = <QuestionFormComponent user={props.user} />
            break;
        case "add-therapy":
            content = <TherapyComponent user={props.user} />
            break;
        case "schedule-therapies":
            content = <TherapistComponent user={props.user} />
            break;
        default:
            break;
    }

    return (
        content
    )
}

export default DashboardContentComponent;