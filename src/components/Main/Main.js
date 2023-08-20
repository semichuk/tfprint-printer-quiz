import './Main.scss';

import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Main = ({ path }) => {
    return (
        <div className='main '>
            <Loader/>
            <div className='main__header'>
                <img src="/new-kviz-2023/build/images/header_main.webp" />
            </div>
            <br/>
            <br/>
            <h2>Подберите принтер этикеток за 2 минуты</h2>
            <br/>
            <br/>
            <Link to={path} className='main__button button' style={{  textDecoration: "none"}} >ВЫБРАТЬ ПРИНТЕР</Link>
        </div>
    )
}

export default Main;