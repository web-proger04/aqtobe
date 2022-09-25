import React from 'react';
import college from "../../public/img/colleges/acce.png";
import director from "../../public/img/directors/acce.png"

Acce.title = "ГККП «Актюбинский колледж связи и электротехники» "
function Acce(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГККП «Актюбинский колледж связи и электротехники»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГККП «Актюбинский колледж связи и электротехники»"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1978 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности:</span> государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> г.Актобе, ул. Гришина, 5
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> acce.kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> bailanyskolledj@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8(7132)533088, 533026
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Канбаев Муратбек Сабирович"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Канбаев Муратбек Сабирович
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 14 мая 1966 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 25 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 25 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 17 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Аттестацию не проходил</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 463 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 150 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 119 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 47% по данным ГЦВП
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> 35 человек
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 9124 кв. м.м. (в т. ч. учебная-1005,8 кв. м)
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 11
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 12
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 1
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 269 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> 250 посадочных мест
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
                            <span className="info-college__text_bold">Общежитие:</span> 1965 кв.м. (120 койко- мест)
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Имеются лицензии по специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Теплоэнергетические установки тепловых электрических станций</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация и техническое обслуживание машин и оборудования</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Почтовая связь</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Радиотехника, электроника и телекоммуникации</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация и техническое обслуживание машин и оборудования</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и экплуатация электромеханического оборудования</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Оптическое и электронное оборудование</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Предлагаемые меры:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">В данном учебном заведение за последние пять лет наблюдается снижение контингента, слабый набор, низкое трудоустройство и т.д. Соответственно было принято решение о слиянии с Актюбинским колледжем транспорта, коммуникаций и новых технологий. </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">По данному вопросу подготовлено Постановление Акимата Актюбинской области № 294 от 24.08.2022 года. На сегодняшний день решаются все организационные вопросы по монтажу учебного оборудования кабинетов и лабораторий и переезда. </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        Планируется слияние с Актюбинским колледжем транспорта, коммуникаций и новых технологий и переезд
                    </h3>
                </li>
            </ul>
        </div>
    );
}

export default Acce;