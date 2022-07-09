import * as API from '../api/user/patient';
import * as API2 from '../api/user/therapist';
import { closeSession } from '../reducers/auth';
import { successAlertState, errorAlertState } from '../reducers/user';
import { loginError } from '../reducers/auth';

export const registerPatient = (userData, navigate) => async (dispatch) => {
    try {
        
        let response = await API.register(userData);
        
        switch (response.data.message) {
            case "tiene refresh token":
                localStorage.setItem('token', response.data.accessToken);
                dispatch(registerPatient(userData, navigate));
                break;
            default:
                await API2.relatePatient(response.data.id);
                dispatch(successAlertState({ data: response.data }));
                break;
        }

    } catch (err) {

        switch (err.message) {
            case 'Request failed with status code 401':
                if (err.response.data.error === 'token no valido' ) {
                    dispatch(closeSession());
                    navigate("/", { replace: true });
                } else if ( err.response.data.error === 'inconsistencia en la petición' ) {
                    dispatch(closeSession());
                    dispatch(loginError(err.response.data));
                    navigate("/", { replace: true });
                } else {
                    console.log(err);
                }
                break;
            case 'Request failed with status code 400':
                dispatch(errorAlertState( { data: err.response.data })); 
                break;
            default:
                console.log(err);
        }
        
    }
}