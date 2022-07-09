import * as API from '../api/user/supervisor';
import { closeSession  } from '../reducers/auth';
import { successAlertState, errorAlertState } from '../reducers/user';
import { loginError } from '../reducers/auth';

export const registerSupervisor = (userData, navigate) => async (dispatch) => {

    try {

        let response = await API.register(userData);
        
        switch (response.data.message) {
            case "tiene refresh token":
                localStorage.setItem('token', response.data.accessToken);
                dispatch(registerSupervisor(userData, navigate));
                break;
            default:
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