import axios from 'axios';
import { THERAPY_BASE_URL } from './conf';

export const schedule = (data) => axios.post(
    `${THERAPY_BASE_URL}/schedule`,
    data,
    {
        headers: {
            "Content-Type": "multipart/form-data",
            "x-user": JSON.parse(localStorage.getItem("user")).id,
            "x-access-token": localStorage.getItem("token")
        }
    }
)

export const getNotFinished = ({ rows, offset }) => axios.get(
    `${THERAPY_BASE_URL}/all/not-finished/${rows}/${offset}`,
    {
        headers: {
            "Content-Type": "multipart/form-data",
            "x-user": JSON.parse(localStorage.getItem("user")).id,
            "x-access-token": localStorage.getItem("token")
        }
    }
)