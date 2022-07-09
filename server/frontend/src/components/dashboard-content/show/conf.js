import { getPatients, modifyPatientState } from "../../../actions/patient";
import { getSupervisors, modifySupervisorState } from "../../../actions/supervisor";
import { getTherapists, modifyTherapistState } from "../../../actions/therapist";

const showContent = {
    supervisor: {
        title: 'Ver supervisores',
        initialValues: { 
            rows: 10,
            offset: 0
        },
        getAllAction: getSupervisors,
        modifyStateAction: modifySupervisorState
    },
    therapist: {
        title: 'Ver terapeutas',
        initialValues: { 
            rows: 10,
            offset: 0
        },
        getAllAction: getTherapists,
        modifyStateAction: modifyTherapistState
    },
    patient: {
        title: 'Ver mis pacientes',
        initialValues: { 
            rows: 10,
            offset: 0
        },
        getAllAction: getPatients,
        modifyStateAction: modifyPatientState
    },
}


export default showContent;