
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import GameContentComponent from "../../game-content";
import { getNumberOfQuestion, getQuestion } from "../../../actions/test";

import { resetGame } from "../../../reducers/game";

import { io } from "socket.io-client";
import { SOCKET_URL } from "../../../api/conf";

import "./game.css";

let socket;

const GamePage = () => {

    const user = useSelector((state) => state.auth.user) || JSON.parse(localStorage.getItem('user'));
    const test = useSelector((state) => state.game);
    const { idTest, idTherapy, currentQuestion } = useParams();
    const [ curQuestion, setCurQuestion ] = useState(Number(currentQuestion));
    const [ questionD, setQuestionD ] = useState(null);
    const [ load, setLoad ] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getNumberOfQuestion(idTest, navigate))
        dispatch(getQuestion(idTest, curQuestion, navigate));
        socket = io(SOCKET_URL);
        socket.emit('join_therapy_session', idTherapy);
    }, [])

    useEffect(() => {
        setQuestionD(test);
        if (questionD === null) setLoad(false)
        else if (test.curQuestion.id !== questionD.curQuestion.id) setLoad(false)
    }, [test])
    
    const handleSocketNext = () => {
        socket.emit('next', { therapy: idTherapy });
    }

    const handleNextQuestion = (e) => {
        e.preventDefault();
        console.log(curQuestion + 1, questionD.numQuestions)
        if ( curQuestion < questionD.numQuestions ) {
            dispatch(getQuestion(idTest, curQuestion + 1, navigate));
            setCurQuestion(curQuestion + 1);
            setLoad(true);
        } else {
            dispatch(resetGame())
            navigate('/home');
        }
    }

    if ( !Boolean(user) ) return <Navigate to="/" replace />;

    return (
        <div className="game-container">
            <div className="game-content">
                {
                    load ? 
                        <h1>Cargando</h1> 
                        :
                        <>
                            <label className="question-counter">{curQuestion} de {questionD.numQuestions}</label>
                            <GameContentComponent user={user} question={questionD} current={curQuestion} action={handleNextQuestion} socket={socket} nextAction={handleSocketNext} />
                        </> 
                }
            </div>
        </div>
    )
}

export default GamePage;