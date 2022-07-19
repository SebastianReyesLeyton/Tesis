import * as API from "../api/test";

import { successAlertState } from "../reducers/user";
import { storeItems } from "../reducers/items";

import error from './errors';

export const createTest = (testData, navigate) => async (dispatch) => {

    try {

        let response = await API.createTest(testData);

        switch (response.data.message) {
            case "tiene refresh token":
                localStorage.setItem('token', response.data.accessToken);
                dispatch(createTest(testData, navigate));
                break;
            default:
                dispatch(successAlertState({ data: response.data }));
                break;
        }

    } catch (err) {
        dispatch(error(err, navigate));
    }

}

export const getInProgressTests = ({ rows, offset }, navigate) => async (dispatch) => {

    try {

        let response = await API.getInProgressTests({ rows, offset });

        switch (response.data.message) {
            case "tiene refresh token":
                localStorage.setItem('token', response.data.accessToken);
                dispatch(getInProgressTests({ rows, offset }, navigate));
                break;
            default:
                dispatch(storeItems({ data: response.data.tests}));
                break;
        }

    } catch (err) {
        dispatch(error(err, navigate));
    }
} 

export const getQuestionTypes = (navigate) => async (dispatch) => {

    try {
        
        let response = await API.getQuestionTypes();

        switch (response.data.message) {
            case "tiene refresh token":
                localStorage.setItem('token', response.data.accessToken);
                dispatch(getQuestionTypes(navigate));
                break;
            default:
                dispatch(storeItems({ data: response.data.tests }));
                break;
        }

    } catch (err) {
        dispatch(error(err, navigate));
    }

}

export const publishTest = (id, navigate) => async (dispatch) => {

    try {
        
        let response = await API.publish(id);

        switch (response.data.message) {
            case "tiene refresh token":
                localStorage.setItem('token', response.data.accessToken);
                dispatch(publishTest(id, navigate));
                break;
            default:
                dispatch(successAlertState({ data: response.data }));
                break;
        }

    } catch (err) {
        dispatch(error(err, navigate));
    }

} 