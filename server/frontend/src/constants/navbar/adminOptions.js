import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUserGear, 
    faUsersGear,
    faHospitalUser,
    faUsersLine,
    faUserTag,
    faAtom
} from '@fortawesome/free-solid-svg-icons';

export const AdminOptions = {
    Supervisor: [
        {
            option: "Registrar",
            icon: <FontAwesomeIcon icon={faUserGear} className="icon" />
        },
        {
            option: "Ver/Editar",
            icon: <FontAwesomeIcon icon={faUsersGear} className="icon" />
        },
        {
            option: "Modificar estado",
            icon: <FontAwesomeIcon icon={faUserTag} className="icon" />
        }
    ],
    Terapeuta: [
        {
            option: "Registrar",
            icon: <FontAwesomeIcon icon={faHospitalUser} className="icon" />
        },
        {
            option: "Ver/Editar",
            icon: <FontAwesomeIcon icon={faUsersLine} className="icon" />
        },
        {
            option: "Modificar estado",
            icon: <FontAwesomeIcon icon={faUserTag} className="icon" />
        }
    ],
    Tokens: [
        {
            option: "Ver",
            icon: <FontAwesomeIcon icon={faAtom} className="icon" />
        }
    ]
}