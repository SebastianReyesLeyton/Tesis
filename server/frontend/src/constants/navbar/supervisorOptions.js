import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUsersLine, 
    faHospitalUser, 
    faClipboardList,
    faFilePen,
    faBoxArchive,
    faUserTag
} from '@fortawesome/free-solid-svg-icons';

export const SupervisorOptions = {
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
    ],
    Pruebas: [
        {
            option: "Crear",
            icon: <FontAwesomeIcon icon={faClipboardList} className="icon" />,
            link: "/home"
        },
        {
            option: "Ver",
            icon: <FontAwesomeIcon icon={faBoxArchive} className="icon" />,
            link: "/home"
        },
        {
            option: "Editar",
            icon: <FontAwesomeIcon icon={faFilePen} className="icon" />,
            link: "/home"
        },
    ]
}