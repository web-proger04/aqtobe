import college from '../../public/img/colleges/shalkar.png'
import director from '../../public/img/directors/shalkar.png'
import React from "react";


Shalkarcollege.title = "КГУ «Шалкарский аграрно-технический колледж»"
export default function Shalkarcollege() {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                КГУ «Шалкарский аграрно-технический колледж»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="КГУ «Шалкарский аграрно-технический колледж»"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1960 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности: </span> Государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> г.Шалкар, ул. Профессиональная, 25.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> shalkar-pl11@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 (71335) 27378, 27455
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Направление:</span> аграрно-техническое
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Жұқатаева Жадыра Жиенғазықызы"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Жұқатаева Жадыра Жиенғазықызы
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span>22 сентября 1982 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Бакалавр казахского  языка и литературы
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 18,7 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 18,7 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 9,2 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Аттестацию проходила как заместитель директора в 2021 году </span>
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
                            <span className="info-college__text_bold">Проектная мощность:</span> 350 мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 263 студента
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 150 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 176 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 62,9%
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогических работников:</span> 40 педагогов
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 6691 кв.м.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 12
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 1
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 5
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 228 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал: </span>150 посадочных мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">столовая и буфет</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общежитие: </span>адаптированное общежитие на  36 мест -443 кв.м.
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
                            <span className="info-college__text_bold">Строительство и эксплуатация зданий и сооружений </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электрооборудование (по видам и отраслям)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство железных дорог, путь и путевое хозяйство </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, ремонт и техническое обслуживание вагонов и рефрижераторного  подвижного состава железных дорог</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, ремонт и техническое обслуживание тягового подвижного состава железных дорог </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Швейное производство и моделирование</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Учет и аудит</span>
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
                            <span className="info-college__text_bold">Строительство и эксплуатация зданий и сооружений </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электрооборудование (по видам и отраслям) </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство железных дорог, путь и путевое хозяйство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, ремонт и техническое обслуживание вагонов и рефрижераторного  подвижного состава железных дорог</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, ремонт и техническое обслуживание тягового подвижного состава железных дорог </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Швейное производство и моделирование </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Учет и аудит </span>
                        </li>

                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Возврат лицензий:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электрооборудование (по видам и отраслям)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство железных дорог, путь и путевое хозяйство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, ремонт и техническое обслуживание вагонов и рефрижераторного  подвижного состава железных дорог</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, ремонт и техническое обслуживание тягового подвижного состава железных дорог </span>
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
                            <span className="info-college__text_bold">Рыбное хозяйство </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ветеринария</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}