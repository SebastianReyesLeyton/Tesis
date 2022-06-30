import * as API from '../api/auth';
import { authenticated, loginError } from '../reducers/auth';

export const login = (userData, navigate) => async (dispatch) => {

    try {
        const response = await API.loginRequest(userData);
        dispatch(authenticated(response.data));
        navigate("/home");
    } catch (err) {
        switch (err.message) {
            case "Request failed with status code 400":
                dispatch(loginError(err.response.data));
                break;
            default:
                console.log('Error', err);
                break;
        }
    }

}