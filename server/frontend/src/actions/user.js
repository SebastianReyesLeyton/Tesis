import * as API from '../api/user';
import { closeSession  } from '../reducers/auth';
import { register, userError } from '../reducers/user';

export const registerSupervisor = (userData, navigate) => async (dispatch) => {

    try {

        let response = await API.register(userData);

        switch (response.data.message) {
            case "tiene refresh token":
                localStorage.setItem('token', response.data.accessToken);
                dispatch(registerSupervisor(userData, navigate));
                break;
            default:
                dispatch(register(response.data));
                break;
        }

    } catch (err) {
        
        switch (err.message) {
            case 'Request failed with status code 401':
                if (err.response.data.error === 'token no valido' ) {
                    dispatch(closeSession());
                    navigate("/", { replace: true });
                } else {
                    console.log(err);
                }
                break;
            case 'Request failed with status code 400':
                dispatch(userError(err.response.data));
                break;
            default:
                console.log(err);
        }
    }
}