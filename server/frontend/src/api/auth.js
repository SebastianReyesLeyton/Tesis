import axios from 'axios';
import { AUTH_BASE_URL } from './conf';

export const loginRequest = (data) => axios.post(
    `${AUTH_BASE_URL}/login`, 
    data,
    {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }
);