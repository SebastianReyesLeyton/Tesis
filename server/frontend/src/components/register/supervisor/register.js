import useForm from "../../Form/useForm";
import CompleteInput from "../../Input";
import Form from "../../Form/Form";
import Error from "../../Error";
import Success from "../../Success";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import { registerSupervisor } from "../../../actions/user";

import "./register.css";

const SupervisorRegisterComponent = () => {

    const { values, setValues, handleInputChange } = useForm({
        name: String(),
        email: String(),
        password: String(),
        docnum: String()
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alertRef = useRef(null);
    let alertMessage = useSelector((state) => state.userRequest);
    
    const handleClear = (e) => {
        e.preventDefault();
        setValues({
            name: String(),
            email: String(),
            password: String(),
            docnum: String()
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerSupervisor(values, navigate));
        if (alertRef.current != null) alertRef.current.hiddenAlert(Boolean(alertMessage.error));
    }

    return (
        <div className="register-container">
            {  Boolean(alertMessage.error) && <Error ref={alertRef}>{alertMessage.error}</Error>}
            {  Boolean(alertMessage.success) && <Success ref={alertRef}>{alertMessage.success}</Success>}
            <h1 className="title">Registrar supervisor</h1>
            <section className="register-content">
                <Form onSubmit={handleSubmit} className="register-form">
                    <section className="register-form-inputs">
                        <CompleteInput 
                            type = "text"
                            name = "name"
                            value = {values.name}
                            label = "Nombre"
                            onChange = {handleInputChange}
                            className = "input-group"
                        />
                        <CompleteInput 
                            type = "text"
                            name = "email"
                            value = {values.email}
                            label = "Correo electrónico"
                            onChange = {handleInputChange}
                            className = "input-group"
                        />
                        <CompleteInput 
                            type = "password"
                            name = "password"
                            value = {values.password}
                            label = "Contraseña"
                            onChange = {handleInputChange}
                            className = "input-group"
                        />
                        <CompleteInput 
                            type = "text"
                            name = "docnum"
                            value = {values.docnum}
                            label = "Número de cédula"
                            onChange = {handleInputChange}
                            className = "input-group"
                        />
                    </section>
                    <section className="buttons-section">
                        <Button
                            variant = "contained"
                            type = "submit"
                            className="login-button"
                        >
                            <span>Enviar</span>
                        </Button>
                        <Button 
                            variant = "contained"
                            className = "clear-button"
                            onClick={handleClear}
                        >
                            Limpiar
                        </Button>
                    </section>
                </Form>
            </section>
        </div>
    )
}

export default SupervisorRegisterComponent;