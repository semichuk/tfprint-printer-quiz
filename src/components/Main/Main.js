import './Main.scss';
import image from './header_main.webp';

import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Main = ({ path }) => {
    return (
        <div className='main '>
            <Loader/>
            <div className='main__header'>
                <img src={image} />
            </div>
            <h2>Подберите принтер этикеток за 2 минуты</h2>
            <Link to={path} className='main__button button' style={{  textDecoration: "none"}} >ВЫБРАТЬ ПРИНТЕР</Link>
        </div>
    )
}

export default Main;