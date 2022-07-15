import updateContent from "./conf"; 
import UpdateContentComponent from "./update";

const UpdateComponent = (props) => {

    let content;

    switch (props.type) {
        case "supervisor":
            if (props.user.rol === 'admin') content = <UpdateContentComponent infoContent={updateContent.supervisor}/>
            break;
        default:
            break;
    }

    return (
        content
    )
}

export default UpdateComponent;