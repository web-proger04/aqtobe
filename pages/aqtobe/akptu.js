import React from 'react';
import college from "../../public/img/colleges/akptu.png";
import director from "../../public/img/directors/akptu.png"

Akptu.title = "«Актюбинский колледж промышленных технологий и управления» МКҚК"
function Akptu(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                «Актюбинский колледж промышленных технологий и управления» МКҚК
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГКП «Актюбинский Высший политехнический колледж» на ПХВ"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1929 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности:</span> государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> г. Актобе, ул. Герцена, 19б
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> www.akptu.edu.kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> akptu@bk.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 (7132) 975474
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Кыдырбаев Танжарык Утемисович"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Кыдырбаев Танжарык Утемисович
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 20 сентября 1975 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Учитель изобратательного искусства. Бакалавр государственного и местного управления
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 28 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 21 год
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span>6 месяцев
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Аттестация планируется в 2025 году</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ротации  не подлежит</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 579 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 240 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 139 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 75%  по данным ГЦВП
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> 61 педагогов
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 4168 кв.м.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 23
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 2
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 7
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 486 кв.м
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
                            <span className="info-college__text_bold">Общежитие:</span> 1627 кв.м. (85 койко-мест)
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Имеются лицензии по специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Автоматизация и управление технологическими процессами (по профилю)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электрооборудование (по видам и отраслям)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Технология машиностроения (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Токарное дело (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация машин и оборудования</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, ремонт и техническое обслуживание подвижного состава железных дорог</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Помощник машиниста локомотива</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация автомобильного транспорта</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Парикмахерское искусство</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Предлагаемые меры:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Автоматизация и управление технологическими процессами (по профилю)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электрооборудование (по видам и отраслям)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Технология машиностроения (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Токарное дело (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация машин и оборудования</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, ремонт и техническое обслуживание подвижного состава железных дорог</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Помощник машиниста локомотива</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация автомобильного транспорта</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Помощник машиниста локомотива</span>
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
                            <span className="info-college__text_bold">Парикмахерское искусство</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Получение лицензии по новым специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Квалификация  «Фрезеровщик» по специальности -  Токарное дело</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        В 2021 году был оснащен по программе «Жас маман» на сумму – 299,6 тыс.т
                    </h3>
                    <h3 className="info-college__title info-college__title_vinous">
                        В 2025 году планируется объединить с Актюбинским колледжем транспорта, коммуникаций и новых технологий
                    </h3>
                </li>
            </ul>
        </div>
    );
}

export default Akptu;