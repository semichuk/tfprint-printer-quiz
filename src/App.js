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


    return (
        <div className="App">
            <Routes >
                <Route path='/' element={<Main path='/quiz/1' />} />
                <Route path='/quiz/1' element={<Quiz path='/quiz/2' />} />
                <Route path='/quiz/2' element={<Quiz path='/quiz/3' />} />
                <Route path='/quiz/3' element={<Quiz path='/feedback' />} />
                <Route path='/feedback' element={<Feedback path='/result' />} />
                <Route path='/result' element={<Result/>}/>
            </Routes>
        </div>
    );
}

export default App;
