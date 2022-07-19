import InputText from "./InputText";
import InputSelect from "./InputSelect";
import InputDate from "./InputDate";

export default function CompleteInput (props) {

    switch (props.type) {
        case 'text':
            return InputText(props);
        case 'password':
            return InputText(props);
        case 'select':
            return InputSelect(props);
        case 'date':
            return InputDate(props);
        case 'multiline':
            return InputText(props);
        default:
            break;
    }
    
}