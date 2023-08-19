import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import './Quiz.scss';

function Quiz({ answerNumber, onClickAnswer, previousPath, nextPath, currentPath }) {
    const [tests, setTests] = useState({
        one: {
            currentPath: "/quiz/1",
            question: "Какие этикетки вы намерены использовать?",
            answers: ["ТермоЭтикетки (термо Эко или термоТоп)", "Термотрансферные этикетки", "Синтетические этикетки(полиэтилен, полипропилен)"],
            hint: "материал этикетки зависит от сферы её применения, например, весовой чек-это термоэтикетка, производство продуктов питания, логистика-термотрансферная этикетка, химические , медицинские производства-синтетическая этикетки"
        },
        two: {
            currentPath: "/quiz/2",
            question: "Ширина рулона этикетки в мм?",
            answers: ["От 0 до 60", "От 0 до 110"],
            hint: "если вы уверены, что максимальный размер ваших этикеток не превысит 60мм, то можно выбрать вариант 'от 0 до 60', если размер может измениться в большую сторону то 'от 0 до 110'"
        },
        three: {
            currentPath: "/quiz/3",
            question: "Сколько этикеток в смену вы будете печатать?",
            answers: ["До 3 тыс. в смену", "От 3 до 15 тыс. в смену", "От 15 до 30 тыс. в смену"],
            hint: "принтеры этикеток делятся на несколько классов, в зависимости от производительности"
        }
    });
    let test = {};

    switch (currentPath) {
        case "/quiz/1":
            test = tests.one;
            break;

        case "/quiz/2":
            test = tests.two;
            break;

        case "/quiz/3":
            test = tests.three;
            break;

        default:
            break;

    }

    const arrayAnswers = test.answers.map((item, index) => {
        let color = '';
        if(answerNumber === index){
            color = ' quiz__checkbox_checked';
        }
        
        console.log(index);
        return (
            <div className='quiz__answer' onClick={(event , x = currentPath , y = index) => { onClickAnswer(event , x, y); }} id={index} key={index} >
                {/* <Form.Group className="mb-3" controlId={index}>
                    <Form.Check
                        label={item}
                        name="group1"
                        type='radio'
                        checked={isChecked}
                    />
                </Form.Group> */}
                <div className={'quiz__checkbox' + color}></div>
                <div></div>
                <div className='quiz__checkbox-name'>{item}</div>
            </div>


        )
    })
    return (
        <div className='quiz'>
            <h3 className='quiz__title'>Подбираем принтер этикеток</h3>
            <hr></hr>
            <div className='quiz__content'>
                <h2 className='quiz__question'>{test.question}</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Подсказка</Accordion.Header>
                        <Accordion.Body>
                            {test.hint}
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
                <Form className='quiz__form'>
                    {arrayAnswers}
                </Form>
                <Loader />
                <div className='quiz__footer'>
                    <Link to={previousPath} className='main__button button' style={{  textDecoration: "none", backgroundColor: "gray"}} >Назад</Link>
                    <Link to={nextPath} className='main__button button' style={{  textDecoration: "none"}} >Далее</Link>
                </div>
            </div >
        </div>
    );

}

export default Quiz;