import college from '../../public/img/colleges/zhmk.png'
import director from '../../public/img/directors/zhmk.png'
import React from "react";


Zhmk.title = "КГУ «Жайсанский многопрофильный колледж»"
export default function Zhmk() {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                КГУ «Жайсанский многопрофильный колледж»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="КГУ «Жайсанский многопрофильный колледж»"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1936 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности: </span> Государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> Мартукский район, с.Жайсан ул.Партизанская ,5.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> zhmk.website
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> pl-13m@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 (71331) 28 6 8
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Кужаков Айбек Бауржанович"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Кужаков Айбек Бауржанович
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 25 мая 1978 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Учитель физической культуры  и спорта, Бакалавр юриспруденции
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 25 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 25 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 10 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прошел  аттестацию  в 2021 году с присвоением категории «Руководитель первой категории» </span>
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
                            <span className="info-college__text_bold">Проектная мощность:</span> 500 мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 208 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 72 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 70 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 92,8% (по данным ГЦВП- 92, 8%) .
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогических работников:</span> 51 человек.
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 7195 кв.м. (в т.ч. учебная – 3124,1 кв.м).
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 17
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 1
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 9
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 592 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> 100 посадочных мест (240 кв.метра)
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Столовая</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Машино-тракторная полигон и учебное хозяйство с площадью 291,5 га. </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общежитие: </span>2 типовых общежития  1725,6 кв.м., Вместительность до 130 студентов
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
                            <span className="info-college__text_bold">Строительство и эксплуатация зданий и сооружений</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство и эксплуатация автомобильных дорог и аэродромов </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Производство молоко и молочной продукции</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Учет и аудит</span>
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
                            <span className="info-college__text_bold">Строительство и эксплуатация автомобильных дорог и аэродромов </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Производство молоко и молочной продукции</span>
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
                            <span className="info-college__text_bold">Строительство и эксплуатация автомобильных дорог и аэродромов </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация обслуживания в сфере питания </span>
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
                            <span className="info-college__text_bold">Организация обслуживания в сфере питания</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        Обучение проводиться со студентами (37 чел) имеющими особые образовательные потребности по специальным программам
                    </h3>
                </li>
            </ul>
        </div>
    )
}