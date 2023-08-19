import './Result.scss';

import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

function Result({ previousPath, currentPath, answer1, answer2, answer3 }) {

    const [result, setResult] = useState(0);
    const [results, setResults] = useState([
        (
            <div className='result__items'>
                <div className='result__item'>
                    <code>1. ТЕРМОПРИНТЕР ЭТИКЕТОК TSC TDP-225 SU</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати: термо-печать
                    <br />
                    Класс принтера: начальный
                    <br />
                    Ширина печати: 54мм
                    <br />
                    Нагрузка в сутки: до 3000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 127 мм/сек
                    <br />
                    Интерфейсы: USB 2.0, RS-232
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: 99-039A001-00LF
                    <br />
                </div>
                <div className='result__item'>
                    <code>2. ТЕРМО ПРИНТЕР ЭТИКЕТОК ZEBRA ZD410 203DPI (USB+HOST)</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати: термо-печать
                    <br />
                    Класс принтера: начальный
                    <br />
                    Ширина печати: до 56 мм
                    <br />
                    Нагрузка в сутки: до 3000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 152 мм/сек
                    <br />
                    Интерфейсы: USB+HOST
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: ZD41022-D0E000EZ
                    <br />
                </div>
            </div>

        ),
        (
            <div className='result__items'>
                <div className='result__item'>
                    <code>1. ТЕРМОПРИНТЕР ЭТИКЕТОК TSC DA210</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати: термо-печать
                    <br />
                    Класс принтера: начальный
                    <br />
                    Ширина печати: до 108 мм
                    <br />
                    Нагрузка в сутки: до 3000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 152,4 мм/сек
                    <br />
                    Интерфейсы USB: 2.0
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: 99-158A001-0002
                    <br />
                </div>
                <div className='result__item'>
                    <code>2. ТЕРМО-ПРИНТЕР ЭТИКЕТОК ZEBRA GK420DT 203DPI, RS232, USB, LPT</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати: термо-печать
                    <br />
                    Класс принтера: начальный
                    <br />
                    Ширина печати: до 104 мм
                    <br />
                    Нагрузка в сутки: до 3000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 127 мм/сек
                    <br />
                    Интерфейсы: USB, RS232, LPT
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: GK42-202520-000
                    <br />
                </div>
                <div className='result__item'>
                    <code>3. ПРИНТЕР DATAMAX-O`NEIL E-4204B MARK III BASIC DT</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати:  термо-печать
                    <br />
                    Класс принтера: начальный
                    <br />
                    Ширина печати: 108 мм
                    <br />
                    Нагрузка в сутки: до 3000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 102 мм/сек
                    <br />
                    Интерфейсы: RS-232, USB
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: EB2-00-0E005B00
                    <br />
                </div>
            </div>
        ),
        (
            <div className='result__items'>
                <div className='result__item'>
                    <code>1.ТЕРМОТРАНСФЕРНЫЙ ПРИНТЕР ЭТИКЕТОК TSC TTP-225 (СВЕТЛЫЙ) SU</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати: термо-печать, термотранферная печать
                    <br />
                    Класс принтера: начальный
                    <br />
                    Ширина печати: 54мм
                    <br />
                    Нагрузка в сутки до: 3000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 127 мм/сек
                    <br />
                    Интерфейсы: USB 2.0, RS-232
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: 99-040A001-00LF
                    <br />
                </div>
                <div className='result__item'>
                    <code>2.ТЕРМОТРАНСФЕРНЫЙ ПРИНТЕР ЭТИКЕТОК ZEBRA TLP2824 (RS232, USB)</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати: термо-печать, термотранферная печать
                    <br />
                    Класс принтера: начальный
                    <br />
                    Ширина печати: до 56 мм
                    <br />
                    Нагрузка в сутки: до 3000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 102 мм/сек
                    <br />
                    Интерфейсы: USB, RS232
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: 282P-101120-000
                    <br />
                </div>
            </div>
        ),
        (
            <div className='result__items'>
                <div className='result__item'>
                    <code>1. ПРИНТЕР ЭТИКЕТОК TSC TE 200</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати: термо-печать, термотранферная печать
                    <br />
                    Класс принтера: начальный
                    <br />
                    Ширина печати: до 108 мм
                    <br />
                    Нагрузка в сутки: до 3000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 152 мм/сек
                    <br />
                    Интерфейсы: USB 2.0
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: 99-065A101-R0LF05
                    <br />


                </div>
                <div className='result__item'>
                    <code>2. ТЕРМОТРАНСФЕРНЫЙ ПРИНТЕР ЭТИКЕТОК ZEBRA GC420TT 203DPI, RS232, LPT, USB</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати: термотрансферная печать
                    <br />
                    Класс принтера: начальный
                    <br />
                    Ширина печати:: до 104 мм
                    <br />
                    Нагрузка в сутки: до 3000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 102 мм/сек
                    <br />
                    Интерфейсы: USB, RS232, LPT
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: GC420-100520-000
                    <br />
                </div>
                <div className='result__item'>
                    <code>3. ПРИНТЕР DATAMAX-O`NEIL E-4204B MARK III BASIC TT</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати:  термотрансферная печать
                    <br />
                    Класс принтера:  начальный
                    <br />
                    Ширина печати: 108 мм
                    <br />
                    Нагрузка в сутки: до 3000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 102 мм/сек
                    <br />
                    Интерфейсы: RS-232, USB
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: EB2-00-1E005B00
                    <br />
                </div>
            </div>
        ),
        (
            <div className='result__items'>
                <div className='result__item'>
                    <code>1. ПРИНТЕР DATAMAX-O`NEIL M-4206 MARK II DT</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати:  термо-печать
                    <br />
                    Класс принтера: средний
                    <br />
                    Ширина печати: 108 мм
                    <br />
                    Нагрузка в сутки: до 15000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 152 мм/сек
                    <br />
                    Интерфейсы: RS-232, USB, LPT
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: KD2-00-06000000
                    <br />


                </div>
                <div className='result__item'>
                    <code>2. ТЕРМО-ПРИНТЕР ЭТИКЕТОК ZEBRA ZT220; 203 DPI, SERIAL, USB</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати: термо-печать
                    <br />
                    Класс принтера: средний
                    <br />
                    Ширина печати: до 104 мм
                    <br />
                    Нагрузка в сутки: до 15000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 152 мм/сек
                    <br />
                    Интерфейсы: Serial, USB
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: ZT22042-D0E000FZ
                    <br />
                </div>
            </div>
        ),
        (
            <div className='result__items'>
                <div className='result__item'>
                    <code>1. ТЕРМОТРАНСФЕРНЫЙ ПРИНТЕР ЭТИКЕТОК TSC ML240P</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати: термо-печать, термотранферная печать
                    <br />
                    Класс принтера: средний
                    <br />
                    Ширина печати: до 108мм
                    <br />
                    Нагрузка в сутки: до 10 000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 152 мм/сек
                    <br />
                    Интерфейсы: RS-232, USB 2.0, Ethernet, 10/100 Мб/с
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: 99-080A005-0302
                    <br />
                </div>
                <div className='result__item'>
                    <code>2. ТЕРМОТРАНСФЕРНЫЙ ПРИНТЕР ЭТИКЕТОК ZEBRA ZT220; 203 DPI, SERIAL, USB</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати: термо-печать, термотранферная печать
                    <br />
                    Класс принтера: средний
                    <br />
                    Ширина печати: до 104 мм
                    <br />
                    Нагрузка в сутки: до 15000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 152 мм/сек
                    <br />
                    Интерфейсы: Serial, USB
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: ZT22042-T0E000FZ
                    <br />
                </div>
                <div className='result__item'>
                    <code>3. ПРИНТЕР DATAMAX-O`NEIL M-4206 MARK II TT</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати:  термотрансферная печать
                    <br />
                    Класс принтера: средний
                    <br />
                    Ширина печати: 108 мм
                    <br />
                    Нагрузка в сутки: до 15000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 152 мм/сек
                    <br />
                    Интерфейсы: RS-232, USB, LPT
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: KD2-00-46000000
                    <br />
                </div>
            </div>
        ),
        (
            <div className='result__items'>
                <div className='result__item'>
                    <code>1. ТЕРМОТРАНСФЕРНЫЙ ПРИНТЕР TSC MB240T</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати: термо-печать, термотранферная печать
                    <br />
                    Класс принтера: промышленный
                    <br />
                    Ширина печати: до 108 мм
                    <br />
                    Нагрузка в сутки: до 30 000
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 203 мм/сек
                    <br />
                    Интерфейсы: USB 2.0, Ethernet, 10/100 Мбит/с, RS-232
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: 99-068A001-1202
                    <br />
                </div>
                <div className='result__item'>
                    <code>2. ПРИНТЕР DATAMAX-O`NEIL I-4212E MARK II TT</code>
                    <br />
                    <strong>Краткие характеристики:</strong>
                    <br />
                    Способ печати:  термотрансферная печать
                    <br />
                    Класс принтера: промышленный
                    <br />
                    Ширина печати: 108 мм
                    <br />
                    Нагрузка в сутки: до 30000 этикеток
                    <br />
                    Качество печати: 203 dpi
                    <br />
                    Скорость печати: 304 мм/сек
                    <br />
                    Интерфейсы: RS-232, USB, LPT
                    <br />
                    Установленные опции: нет
                    <br />
                    Артикул: I12-00-46000007
                    <br />
                </div>
            </div>
        )
    ]);

    useEffect(() => {
        if (answer1 === 0 && answer2 === 0 && answer3 === 0) {
            setResult(0);
        } else if (answer1 === 0 && answer2 === 1 && answer3 === 0) {
            setResult(1);
        } else if ((answer1 === 1 || answer1 === 2) && answer2 === 0 && answer3 === 0) {
            setResult(2);
        } else if ((answer1 === 1 || answer1 === 2) && answer2 === 1 && answer3 === 0) {
            setResult(3);
        } else if (answer1 === 0 && (answer2 === 1 || answer2 === 0) && answer3 === 1) {
            setResult(4);
        } else if ((answer1 === 1 || answer1 === 2) && (answer2 === 1 || answer2 === 0) && answer3 === 1) {
            setResult(5);
        } else if ((answer1 === 1 || answer1 === 2 || answer1 === 0) && (answer2 === 1 || answer2 === 0) && answer3 === 2) {
            setResult(6);
        }
    }, [answer1, answer2, answer3]);

    return (
        <div className='result'>
            <h1>Вам подойдут следующие принтеры этикеток:</h1>
            {results[result]}
            <Loader />
            <div className='result__footer'>
                <Link to={previousPath} className='main__button button' style={{ textDecoration: "none", backgroundColor: "gray" }} >Назад</Link>
            </div>
        </div>

    );

}

export default Result;
