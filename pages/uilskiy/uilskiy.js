import React from 'react';
import college from "../../public/img/colleges/agrarka-uil.png";
import director from "../../public/img/directors/agrarka-uil.png";


Uilskiy.title = "ГККП «Уилский аграрный колледж» "
function Uilskiy(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГККП «Уилский аграрный колледж»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГККП «Актюбинский гуманитарный колледж»"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1963 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности:</span> государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> Жолмурзаева 42
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> www.agrarka-uil.kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> agrarka.uil@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 71 (332) 2-17-14
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Займолдин Серик Газизович"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Займолдин Серик Газизович
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 02 декабря 1972 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Инженер-механик,  Техник-механик, Магистр менеджмента
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 34,7 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 27 год
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 27 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прошел  аттестацию  в 2022 году с присвоением категории «Руководитель первой категории»   </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ротации  не подлежит (один колледж в районе) </span>
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
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 188 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 90 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 93 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 86% (по данным ГЦВП)
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> 26 педагогов
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 11970 кв метров
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 24
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 9
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 8
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Автодром:</span> 1
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 411кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> 150 посадочных мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Конференц-зал:</span> 200 мест
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
                            <span className="info-college__text_bold">Механизация сельского хозяйства </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, техническое обслуживание и ремонт сельскохозяйственной техники» </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ветеринария  </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Программное обеспечение </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Документационное обеспечение управления и архивоведение </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство и эксплуатация зданий и сооружений </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Теплоэнергетические установки тепловых электрических станций </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация электромеханического оборудования  </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Физическая культура и спорт </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Учет и аудит </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания </span>
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
                            <span className="info-college__text_bold">Механизация сельского хозяйства </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, техническое обслуживание и ремонт сельскохозяйственной техники» </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ветеринария  </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство и эксплуатация зданий и сооружений </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Возврат лицензий:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Программное обеспечение </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Документационное обеспечение управления и архивоведение </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Теплоэнергетические установки тепловых электрических станций </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация электромеханического оборудования  </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Физическая культура и спорт </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Учет и аудит </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Получение лицензии по новым специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация  тепличного хозяйства </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        В 2023 году планируется согласно профилизации изменить название колледжа – Уилский  аграрно-профессиональный  колледж
                    </h3>
                </li>
            </ul>
        </div>
    );
}

export default Uilskiy;