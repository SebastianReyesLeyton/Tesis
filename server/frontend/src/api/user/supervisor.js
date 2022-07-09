import axios from "axios";
import { USER_BASE_URL } from "../conf";

const SUPERVISOR_BASE_URL = USER_BASE_URL + '/supervisor';

export const register = (data) => axios.post(
    `${SUPERVISOR_BASE_URL}/register`,
    data,
    {
        headers: {
            "Content-Type": "multipart/form-data",
            "x-user": JSON.parse(localStorage.getItem("user")).id,
            "x-access-token": localStorage.getItem("token")
        }
    }
);
