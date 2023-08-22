import './Feedback.scss';

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

function Feedback({ previousPath, nextPath, currentPath , answer1, answer2, answer3}) {
    return (
        <div className='feedback'>
            {/* <h2>Оставте свои данные и мы свяжемся с вами</h2> */}
            <div className='feedback__forms'>
                <div className='feedback__feedback-form'>
                    <h5>Оставте свои данные и посмотрите список подходящих принтеров</h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type="text"  placeholder="Введите имя" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Почта</Form.Label>
                            <Form.Control  type="email" placeholder="Введите почту" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Отправить
                        </Button>


                    </Form>
                    <br/>
                    <a style={{ textDecoration: "none" , fontSize: 10+"px"}} href='https://www.tfprint.ru/agreement.php'>Нажимая кнопку "Отправить" вы соглашаетесь на обработку персональных данных</a>
                </div>
                {/*  <div className='feedback__download-form'>
                     <h5>Скайчать список подходящих принтеров</h5>
                     
                 </div> */}
            </div>
            <div className='feedback__footer'>
                <Link to={previousPath} className='main__button button' style={{ textDecoration: "none", backgroundColor: "gray" }} >Назад</Link>
                <Link to={nextPath} className='main__button button' style={{ textDecoration: "none" }} >Далее</Link>
            </div>
            <Loader />


        </div>
    );
}

export default Feedback;