import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUser, 
    faUserGroup,
    faUserTag
} from '@fortawesome/free-solid-svg-icons';

export const TherapistOptions = {
    Paciente: [
        {
            option: "Registrar",
            icon: <FontAwesomeIcon icon={faUser} className="icon" />,
            link: "/register/patient"
        },
        {
            option: "Ver/Editar",
            icon: <FontAwesomeIcon icon={faUserGroup} className="icon" />,
            link: "/show/patient"
        },
        {
            option: "Modificar estado",
            icon: <FontAwesomeIcon icon={faUserTag} className="icon" />,
            link: "/home"
        }
    ]
}