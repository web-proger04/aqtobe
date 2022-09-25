import React from 'react';
import college from "../../public/img/colleges/ssch.png";
import director from "../../public/img/directors/ssch.png"

Ssch.title = "Актюбинская областная специальная (коррекционная) школа-интернат-колледж для детей с нарушением слуха"
function Ssch(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                Актюбинская областная специальная (коррекционная) школа-интернат-колледж для детей с нарушением слуха
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="Актюбинская областная специальная (коррекционная) школа-интернат-колледж для детей с нарушением слуха"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1988 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности:</span> государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> г.Актобе, ул Гришина, 13
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> ssch.edu.kz\kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> ssch2001@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 (7132) 513843
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Шакенова Гулсим Куанышевна"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Шакенова Гулсим Куанышевна
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 5 января 1969 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Учитель математики дефектолог
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 33 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 33 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 33 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Аттестацию не проходила</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ротации не подлежит </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 10 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 10 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 6 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 60%
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> по совместительству 13 чел
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 23715 кв.м. (в т.ч. учебная – 129,2 кв.м)
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 6
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 4
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> 70 посадочных мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Имеются лицензии по специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Парикмахерское искусство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Швейное производство и моделирование одежды</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Предлагаемые меры:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Парикмахерское искусство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Швейное производство и моделирование одежды</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Возврат лицензий:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold"> не планируется</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Получение лицензии по новым специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Вычислительная техника и информационные сети по квалификации</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Оператор компьютерного аппаратного обеспечения</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Ssch;