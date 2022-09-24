import React from 'react';
import collegePhoto from '../../public/img/colleges/ahpc.png'
import directorPhoto from '../../public/img/directors/ahpcDirector.png'
import Image from "next/image";
import Link from "next/link";
import ahpc from "../../public/img/colleges/ahpc.png";
import ahpcDirector from "../../public/img/directors/ahpcDirector.png"

Ahpc.title = "AHPC" // вот так добавляешь название странице
function Ahpc(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГКП «Актюбинский Высший политехнический колледж» на ПХВ
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={ahpc.src} alt="ГКП «Актюбинский Высший политехнический колледж» на ПХВ"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1965 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> город Актобе, улица Рыскулова-267.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> www.ahpc.edu.kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> politech1965@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 (7132) 56-20-51
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Направление:</span> Техническое
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={ahpcDirector.src} alt="Мухамбетпаизова Женискул Сагидоллаевна"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Мухамбетпаизова Женискул Сагидоллаевна
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 8 мая 1965 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Инженер по управлению железной
                            дороги и перевозочными процессами на железнодорожном транспорте
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 36,8 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 24,2 год
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span>6 месяцев
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прошла аттестацию:</span> 2022 году с присвоением
                            1 категорию руководителя (2022год)
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прошла ротацию:</span> в феврале 2022 года
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 2048 студента, их
                            них по госзакау – 1962 студента
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 601 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 469 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 91% (в том числе по данным
                            ГЦВП – 91%).
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> 112 педагога - (77 %)
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 12 323,7 кв.м.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 63
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 20
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 10
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 1138 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> 200 посадочных мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Столовая и буфет</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Конференц зал с мультимедийным оборудованием и проектором</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">В 2019 году в колледже был открыт региональный IT-центр новейшего поколения</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общежитие: 1965 кв.м. (94 места)</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Имеются лицензии по специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Программное обеспечение (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторная технология</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Технология переработки нефти и газа</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электроснабжение (по отраслям)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация электромеханического оборудования</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Автоматизация и управление технологическими процессами</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Технология машиностроения</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация автомобильного транспорта</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация нефтяных и газовых месторождений</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство и эксплуатация зданий и сооружений</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Переводческое дело (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold"> Учет и аудит</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Предлагаемые меры:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <h4 className="info-college__subtitle">
                                Продолжить подготовку кадров по профильным специальностям:
                            </h4>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Программное обеспечение (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Автоматизация и управление технологическими процессами</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Технология</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторная технология</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Технология переработки нефти и газа</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация нефтяных и газовых месторождений</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электроснабжение (по отраслям)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация электромеханического оборудования</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Возврат лицензий:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация автомобильного транспорта</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство и эксплуатация зданий и сооружений</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Переводческое дело (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Учет и аудит</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Получение лицензии по новым специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Вычислительная техника и информационные сети,</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мехатроника</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Робототехника и встраиваемые системы</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        В 2023 году планируется пройти отраслевую аккредитацию
                    </h3>
                </li>
            </ul>
        </div>
    );
}

export default Ahpc;