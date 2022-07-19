import { TextField } from '@mui/material';

export default function InputText (props) {

    let input;
    switch (props.type) {

        case 'text':
            input = <TextField 
                        name={props.name}
                        label={props.label}
                        value={props.value}
                        variant={props.variant}
                        required={props.required}
                        onChange={props.onChange}
                        className={props.className}
                        defaultValue={props.defaultValue}
                    />
            break;
        case 'password':
            input = <TextField 
                        name={props.name}
                        type={props.type}
                        label={props.label}
                        value={props.value}
                        variant={props.variant}
                        required={props.required}
                        onChange={props.onChange}
                        className={props.className}
                        defaultValue={props.defaultValue}
                    />
            break;
        case 'multiline':
            input = <TextField 
                        multiline
                        maxRows={props.maxRows}
                        name={props.name}
                        label={props.label}
                        value={props.value}
                        variant={props.variant}
                        required={props.required}
                        onChange={props.onChange}
                        className={props.className}
                        defaultValue={props.defaultValue}
                    />
            break;
        default:
            break;
    }

    return (input);

}