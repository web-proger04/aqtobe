import React from 'react';
import college from "../../public/img/colleges/AitekeMk1974.png";
import director from "../../public/img/directors/AitekeMk1974.png";


AitekeMk1974.title = "ГККП «Айтекебииский многпрофильный колледж»"
export default function AitekeMk1974(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГККП «Айтекебииский многпрофильный колледж»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГККП «Айтекебииский многпрофильный колледж»"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1974 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> Айтекебииский район ул. Ы.Алтынсарина, 14
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> aiteke_2013@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 (71339) 21728
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Ахметова Нургул Жалгабаевна"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Жиенкожаев Махсут Самуратович
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> Жиенкожаев Махсут Самуратович
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Инженер-механик подъемно -транспортных  и строительных машин и оборудования
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 39 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 27 год
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 6 месяцев
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Аттестацию не проходил</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ротации не подлежит  </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Проектная мощность:</span> 300 мест, приспособленное здание
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 193 студента
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 100 студентов.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 48  студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 69% (по данным ГЦВП- 65%)
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогических работников:</span> 29 человек.
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span>3764 кв метра
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 14
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 1
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 5
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Автодром:</span> 1
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 152 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> 150 посадочных мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Столовая:</span> 120 кв. метра
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общежитие:</span> адаптированное  на 50 мест
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Имеются лицензии по специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Механизация сельского хозяйства</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электрооборудование (по видам и отраслям) </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Монтаж и эксплуатация оборудования и систем газоснабжения </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Вычислительная техника и информационные сети (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания</span>
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
                            <span className="info-college__text_bold">Механизация сельского хозяйства</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электрооборудование (по видам и отраслям) </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Монтаж и эксплуатация оборудования и систем газоснабжения  </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Возврат лицензий:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Вычислительная техника и информационные сети (по видам)</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Получение лицензии по новым специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Квалификацию «Мастер по ремонту сельскохозяйственной техники» по специальности - Механизация сельского хозяйства</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, техническое обслуживание и ремонт сельскохозяйственной техники</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}