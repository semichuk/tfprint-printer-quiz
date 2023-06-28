import { useEffect, useState } from 'react';
import './Quiz.scss';

import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

function Quiz({ path }) {
    
    return (
        <div>
            <Loader />
            <Link to={path}>Далее</Link>
        </div>
    );

}

export default Quiz;