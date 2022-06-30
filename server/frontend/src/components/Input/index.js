import InputText from "./InputText";

export default function CompleteInput (props) {

    switch (props.type) {
        case 'text':
            return InputText(props);
        case 'password':
            return InputText(props);
        default:
            break;
    }
    
}