import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faUsersLine, 
    faHospitalUser, 
    faUserGear, 
    faUsersGear, 
    faClipboardList,
    faFilePen,
    faBoxArchive
} from '@fortawesome/free-solid-svg-icons'

export const SupervisorOptions = {
    Terapeuta: [
        {
            option: "Registrar",
            icon: <FontAwesomeIcon icon={faHospitalUser} className="icon" />
        },
        {
            option: "Ver terapeutas",
            icon: <FontAwesomeIcon icon={faUsersLine} className="icon" />
        }
    ],
    Supervisor: [
        {
            option: "Registrar",
            icon: <FontAwesomeIcon icon={faUserGear} className="icon" />
        },
        {
            option: "Ver",
            icon: <FontAwesomeIcon icon={faUsersGear} className="icon" />
        }
    ],
    Pruebas: [
        {
            option: "Crear",
            icon: <FontAwesomeIcon icon={faClipboardList} className="icon" />
        },
        {
            option: "Ver",
            icon: <FontAwesomeIcon icon={faBoxArchive} className="icon" />
        },
        {
            option: "Editar",
            icon: <FontAwesomeIcon icon={faFilePen} className="icon" />
        },
    ]
}