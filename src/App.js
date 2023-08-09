import logo from './logo.svg';
import './App.scss';

import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Main from './components/Main/Main.js';
import Quiz from './components/Quiz/Quiz.js';
import Feedback from './components/Feedback/Feedback.js';
import Result from './components/Result/Result.js'

function App() {
    const [location, setLocation] = useState(useLocation());
    const [answer, setAnswer] = useState({
        "one": 0,
        "two": 0,
        "three": 0
    });

    const onClickAnswer = (path) => {

    }
    


    return (
        <div className="App">
            <Routes >
                <Route path='/' element={<Main path='/quiz/1' />} />
                <Route path='/quiz/1' element={<Quiz currentPath='/quiz/1' nextPath='/quiz/2' />} />
                <Route path='/quiz/2' element={<Quiz currentPath='/quiz/2' nextPath='/quiz/3' />} />
                <Route path='/quiz/3' element={<Quiz currentPath='/quiz/3' nextPath='/feedback' />} />
                <Route path='/feedback' element={<Feedback path='/result' />} />
                <Route path='/result' element={<Result/>}/>
            </Routes>
        </div>
    );
}

export default App;
