import * as API from "../api/therapy";

import { successAlertState } from "../reducers/user";
import { storeItems } from "../reducers/items";

import error from "./errors";

export const scheduleTherapy = ( data, navigate ) => async (dispatch) => {

    try {

        let response = await API.schedule(data);

        switch (response.data.message) {
            case "tiene refresh token":
                localStorage.setItem('token', response.data.accessToken);
                dispatch(scheduleTherapy(data, navigate));
                break;
            default:
                dispatch(successAlertState({ data: response.data }));
                break;
        }

    } catch (err) {
        dispatch(error(err, navigate));
    }

}

export const getNotFinishedTherapy = ( { rows, offset }, navigate ) => async (dispatch) => {

    try {
        
        let response = await API.getNotFinished({ rows, offset });

        switch (response.data.message) {
            case "tiene refresh token":
                localStorage.setItem('token', response.data.accessToken);
                dispatch(getNotFinishedTherapy({ rows, offset }, navigate));
                break;
            default:
                dispatch(storeItems({ data: response.data }));
                break;
        }

    } catch (err) {
        dispatch(error(err, navigate));
    }

}