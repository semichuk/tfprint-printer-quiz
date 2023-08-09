import './Feedback.scss';

import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

function Feedback({path}) {
    return (
        <>
            <Loader/>
              <Link to={path}>Далее1</Link>

        </>
    );
  }
  
  export default Feedback;