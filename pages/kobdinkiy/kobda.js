import React from 'react';
import college from "../../public/img/colleges/kobda.png"
import director from "../../public/img/directors/kobda.png"

Kobda.title="ГККП «Кобдинский многопрофильный колледж» "
export default function Kobda(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГККП «Кобдинский многопрофильный колледж»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГККП «Кобдинский многопрофильный колледж» "/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1959 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности: </span> Государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> Актюбинская область, Кобдинский район, село Кобда, улица Алтынсарина №4
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> kobda-college.kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> Kobda_mpk@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8(71341)21675
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Ахметова Нургул Жалгабаевна"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Курганбаев Адилбек Салимович
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 08 сентября 1959 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Учитель истории и обществоведения
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 42,5 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 38,8 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 22 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Аттестацию не проходил</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ротации не подлежит (пенсионер). В настоящее время находиться в отпуске с последующим увольнением на заслуженный отдых </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Проектная мощность:</span> 300 мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 168 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 85 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 109 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 95,4% по данным ГЦВП
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогических работников:</span> 25 педагогов
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 8286 кв.м.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 14
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 2
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 5
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">авто(трактор)дром:</span> 1
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 309 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> 200 посадочных мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Типовая столовая</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общежитие: </span>на  50 мест, 366 кв.м.
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
                            <span className="info-college__text_bold">Сварочное дело (по видам) </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ветеринария  </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания   </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мебельное производство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Монтаж и эксплуатация оборудования и систем газоснабжения</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство и эксплуатация зданий и сооружений</span>
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
                            <span className="info-college__text_bold">Ветеринария</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело (по видам)  </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мебельное производство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Монтаж и эксплуатация оборудования и систем газоснабжения</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство и эксплуатация зданий и сооружений</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Возврат лицензий:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Пчеловодство и шелководство</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}