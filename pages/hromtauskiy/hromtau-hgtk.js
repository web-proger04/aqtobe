import React from 'react';
import collegePhoto from '../../public/img/colleges/hromtau-hgtk.png'
import directorPhoto from '../../public/img/directors/hromtau-hgtkDirector.png'
import Image from "next/image";
import Link from "next/link";
import hgtk from "../../public/img/colleges/hromtau-hgtk.png";
import hgtkDirector from "../../public/img/directors/hromtau-hgtkDirector.png";

export default function HrmotauHgtk(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГККП «Хромтауский горно-технический высший колледж»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={hgtk.src} alt="ГКП «Актюбинский Высший политехнический колледж» на ПХВ"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1979г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности:</span> государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> г.Хромтау, ул. Есет батыра, 9.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> www.hgtk.kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> khromtau_hgtk@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 (71336) 21046, 25150
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Направление:</span> горно-техническое
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={hgtkDirector.src} alt="Мулдашева Багдашжан Кадыржановна"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Мулдашева Багдашжан Кадыржановна
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 27 апреля 1969 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Учитель историй и права, Бакалавр экономики
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 35 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 35 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span>20 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прошла аттестацию:</span> в 2022 году с присвоением категории «Руководитель первой категории»
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прошла ротацию:</span> Ротации не подлежит (один колледж в районе)
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 907 студента, их них д/о по госзакау – 615 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 298 студентов, из них по госзаказу – 193 студента
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 194 студента, из них по госзаказу - 93 студента
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 100% (в том числе по данным ГЦВП – 98%)
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> 55 педагогов
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 3253 кв.м.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 22
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 12
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 6
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 288 кв.м, тренажерный зал, гимнастический зал, хореографический зал, теннисный зал, футбольное поле, полоса препятствий
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> 250 посадочных мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Столовая 100 мест</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Конференц зал с мультимедийным оборудованием и проектором</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Библиотека и читальный зал</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">2587кв.м. типовое здание с проектной мощностью – 95 койко мест</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">В 2019 году в колледже был открыт центр компетенций «WorldSkills» по горной отрасли</span>
                        </li>
                        <li className="info-college__text">
                        <span className="info-college__text_bold">В 2020 году был оснащен по программе «Жас маман» на сумму – 310,5 тыс.т.</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Имеются лицензии по специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Подземная разработка месторождений и полезных ископаемых</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Открытая разработка месторождений и полезных ископаемых</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация электромеханического оборудования (по видам и отраслям)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Обогащение полезных ископаемых</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство подземных сооружений</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Технология и техника разведки месторождений полезных ископаемых</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация автомобильного транспорта</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация нефтяных и газовых месторождений</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дошкольное воспитание и обучение</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Учет и аудит</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Вычислительная техника и программное обеспечение</span>
                        </li>
                        <li className="info-college__text">
                        <span className="info-college__text_bold">Документационное обеспечение управления и архивоведение </span>
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
                            <span className="info-college__text_bold">Подземная разработка месторождений и полезных ископаемых</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Открытая разработка месторождений и полезных ископаемых</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация электромеханического оборудования (по видам и отраслям)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Обогащение полезных ископаемых</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство подземных сооружений</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Технология и техника разведки месторождений полезных ископаемых</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация автомобильного транспорта</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания (проводить набор раз в пять лет,  по мере имеющейся потребности в районе)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дошкольное воспитание и обучение (проводить набор раз в пять лет,  по мере имеющейся потребности в районе)</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Возврат лицензий:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Вычислительная техника и программное обеспечение</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Учет и аудит</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold"> Документационное обеспечение управления и архивоведение</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Получение лицензии по новым специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электрооборудование, квалификация-Техник-электрик по потребности АО «Казхром»</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">По квалификациям «Горномонтажник» и «Горнорабочий очистного забоя» специальности -  Подземная разработка месторождений и полезных ископаемых</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Робототехника и встраиваемые системы</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}