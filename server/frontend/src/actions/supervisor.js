import * as API from '../api/user/supervisor';

import { successAlertState } from '../reducers/user';
import { storeUsers } from '../reducers/users';

import error from './errors';

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
        dispatch(error(err, navigate));
    }
}

export const getSupervisors = ({ rows, offset }, navigate) => async (dispatch) => {

    try {
        
        let response = await API.getAll({ rows, offset });
        
        switch (response.data.message) {
            case "tiene refresh token":
                localStorage.setItem('token', response.data.accessToken);
                dispatch(getSupervisors({ rows, offset }, navigate));
                break;
            default:
                dispatch(storeUsers(response.data));
                break;
        }
        
    } catch (err) {
        dispatch(error(err, navigate));
    }
}

export const modifySupervisorState = ({ id, newState }, navigate) => async (dispatch) => {
    
    try {
        
        let response = await API.modifyState(id, newState);

        switch (response.data.message) {
            case "tiene refresh token":
                localStorage.setItem('token', response.data.accessToken);
                dispatch(modifySupervisorState({ id, newState }, navigate));
                break;
            default:
                dispatch(successAlertState({ data: response.data }));
                break;
        }
        
    } catch (err) {
        dispatch(error(err, navigate));
    }
}