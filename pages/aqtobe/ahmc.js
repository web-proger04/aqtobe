import React from 'react';
import college from "../../public/img/colleges/ahmc.png"
import director from "../../public/img/directors/ahmc.png"

Ahmc.title = "ГКП «Актюбинский Высший медицинский колледж имени героя Советского Союза Маншук Маметовой» " // вот так добавляешь название странице
function Ahmc(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГКП «Актюбинский Высший медицинский колледж имени героя Советского Союза Маншук Маметовой»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГКП «Актюбинский Высший медицинский колледж имени героя Советского Союза Маншук Маметовой»"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1935 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности:</span> Государственное коммунальное предприятие на праве хозяйственного ведения
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> Город Актобе,  улица Шернияза, 18
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> www.gkkp-amk.kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> medkolledg70@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8(7132) 400482 ;  8(7132) 400498
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Кузбаков Мажит Хамитович"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Кузбаков Мажит Хамитович
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 21 сентября 1959 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Врач, лечебное дело
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 35,6 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 32,5 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 9,9 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Аттестацию не проходил</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ротации не подлежит (предпенсионный возраст)</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 2021 студентов, из них по госзаказу 1165 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 730 студентов, по гос заказу - 507 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 373 студентов, по госзаказу – 240 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 87% по данным ГЦВП
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> 123 педагогов
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 8994 кв.м.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 74
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 13
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 300 кв.м
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
                            <span className="info-college__text_bold">Общежитие:</span> 3479кв.м. на 150 койко- мест
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Имеются лицензии по специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сестринское дело</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторная диагностика</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лечебное дело</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Акушерское дело</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Фармация</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стоматология</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стоматология ортопедическая</span>
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
                            <span className="info-college__text_bold">Сестринское дело</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторная диагностика</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лечебное дело</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Акушерское дело</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Фармация</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стоматология</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стоматология ортопедическая</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Возврат лицензий:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Не планируется </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Получение лицензии по новым специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Не планируется </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        Проводится обучение студентов, имеющие особые образовательные потребности (по диагнозу - слабовидящие и слабослышащие)
                    </h3>
                    <h3 className="info-college__title info-college__title_vinous">
                        Работает центр профессионального массажа «Зрячие руки» для организации клинической и профессиональной практики.
                    </h3>
                    <h3 className="info-college__title info-college__title_vinous">
                        Работает центр профессионального массажа «Зрячие руки» для организации клинической и профессиональной практики.
                    </h3>
                </li>
            </ul>
        </div>
    );
}

export default Ahmc;