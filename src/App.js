import logo from './logo.svg';
import './App.scss';

import { useState } from 'react';
import { Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';

import Main from './components/Main/Main.js';
import Quiz from './components/Quiz/Quiz.js';
import Feedback from './components/Feedback/Feedback.js';
import Result from './components/Result/Result.js'

function App() {
    const [location, setLocation] = useState(useLocation());

    const [answer1, setAnswer1] = useState(0);
    const [answer2, setAnswer2] = useState(0);
    const [answer3, setAnswer3] = useState(0);



    const onClickAnswer = (event, currentPath, index) => {
        switch (currentPath) {
            case '/quiz/1':
                setAnswer1(index);
                break;
            case '/quiz/2':
                setAnswer2(index);
                break;
            case '/quiz/3':
                setAnswer3(index);
                break;
            default:
                console.log(currentPath)
                break;
        }
    };



    return (
        <div className="App">
            {/* <div>ki1</div> */}
            
                <Routes >
                    <Route path='/' element={<Main path='/quiz/1' />} />
                    <Route path='/quiz/1' element={<Quiz answerNumber={answer1} onClickAnswer={onClickAnswer} previousPath='/' currentPath='/quiz/1' nextPath='/quiz/2' />} />
                    <Route path='/quiz/2' element={<Quiz answerNumber={answer2} onClickAnswer={onClickAnswer} previousPath='/quiz/1' currentPath='/quiz/2' nextPath='/quiz/3' />} />
                    <Route path='/quiz/3' element={<Quiz answerNumber={answer3} onClickAnswer={onClickAnswer} previousPath='/quiz/2' currentPath='/quiz/3' nextPath='/feedback' />} />
                    <Route path='/feedback' element={<Feedback previousPath='/quiz/3' currentPath='/feedback' nextPath='/result' answer1={answer1} answer2={answer2} answer3={answer3} />} />
                    <Route path='/result' element={<Result previousPath='/feedback' currentPath='/result' answer1={answer1} answer2={answer2} answer3={answer3} />} />
                </Routes>



            {/* <div>ki2</div> */}

        </div>
    );
}

export default App;
