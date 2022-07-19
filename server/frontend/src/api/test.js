import axios from "axios";
import { TEST_BASE_URL } from "./conf";

export const createTest = (data) => axios.post(
    `${TEST_BASE_URL}/create`,
    data,
    {
        headers: {
            "Content-Type": "multipart/form-data",
            "x-user": JSON.parse(localStorage.getItem("user")).id,
            "x-access-token": localStorage.getItem("token")
        }
    }
);

export const getInProgressTests = ({rows, offset}) => axios.get(
    `${TEST_BASE_URL}/all/in-progress/${rows}/${offset}`,
    {
        headers: {
            "Content-Type": "multipart/form-data",
            "x-user": JSON.parse(localStorage.getItem("user")).id,
            "x-access-token": localStorage.getItem("token")
        }
    }
);

export const getQuestionTypes = () => axios.get(
    `${TEST_BASE_URL}/question-types`,
    {
        headers: {
            "Content-Type": "multipart/form-data",
            "x-user": JSON.parse(localStorage.getItem("user")).id,
            "x-access-token": localStorage.getItem("token")
        }
    }
);

export const publish = (id) => axios.get(
    `${TEST_BASE_URL}/publish/${id}`,
    {
        headers: {
            "Content-Type": "multipart/form-data",
            "x-user": JSON.parse(localStorage.getItem("user")).id,
            "x-access-token": localStorage.getItem("token")
        }
    }
)