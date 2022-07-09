import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUserGear, 
    faUsersGear,
    faHospitalUser,
    faUsersLine,
    faUserTag
} from '@fortawesome/free-solid-svg-icons';

export const AdminOptions = {
    Supervisor: [
        {
            option: "Registrar",
            icon: <FontAwesomeIcon icon={faUserGear} className="icon" />,
            link: "/register/supervisor"
        },
        {
            option: "Ver/Editar",
            icon: <FontAwesomeIcon icon={faUsersGear} className="icon" />,
            link: "/show/supervisor"
        },
        {
            option: "Modificar estado",
            icon: <FontAwesomeIcon icon={faUserTag} className="icon" />,
            link: "/home"
        }
    ],
    Terapeuta: [
        {
            option: "Registrar",
            icon: <FontAwesomeIcon icon={faHospitalUser} className="icon" />,
            link: "/register/therapist"
        },
        {
            option: "Ver/Editar",
            icon: <FontAwesomeIcon icon={faUsersLine} className="icon" />,
            link: "/home"
        },
        {
            option: "Modificar estado",
            icon: <FontAwesomeIcon icon={faUserTag} className="icon" />,
            link: "/home"
        }
    ]
}