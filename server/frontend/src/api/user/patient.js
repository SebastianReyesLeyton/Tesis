import axios from "axios";
import { USER_BASE_URL } from "../conf";

const PATIENT_BASE_URL = USER_BASE_URL + '/patient';

export const register = (data) => axios.post(
    `${PATIENT_BASE_URL}/register`,
    data,
    {
        headers: {
            "Content-Type": "multipart/form-data",
            "x-user": JSON.parse(localStorage.getItem("user")).id,
            "x-access-token": localStorage.getItem("token")
        }
    }
);