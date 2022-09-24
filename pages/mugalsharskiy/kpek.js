import React from 'react';
import collegePhoto from '../../public/img/colleges/kpek.png'
import directorPhoto from '../../public/img/directors/kpekDirector.png'
import Image from "next/image";
import Link from "next/link";
import college from "../../public/img/colleges/kpek.png";
import director from "../../public/img/directors/kpekDirector.png";

function Kpek(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГККП «Кандыагашский промышленно-экономический колледж»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГККП «Кандыагашский промышленно-экономический колледж»"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1946 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности:</span> государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> г.Кандыагаш, ул.Құндызды, 1
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> www.kpek.kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> kpek2012@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8713337237
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Байбулов Бек Аманович"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Байбулов Бек Аманович
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 5 января 1969 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Учитель казахского  языка и литературы
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 32 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 29 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 12 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прошел аттестацию:</span> в 2022 году с присвоением категории «Руководитель первой категории»
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ротации не подлежит:</span> (один колледж в районе)
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 267 студента, их них по госзакау – 267 студента
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 88 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 107 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 87% (в том числе по данным ГЦВП –871%)
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> 35 педагогов
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 5900 кв.м.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 14
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 2
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 8
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адаптированный спортзал и борцовский зал:</span> 59 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> 80 посадочных мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Столовая</span>
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
                            <span className="info-college__text_bold">Организация питания</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, ремонт и техническое обслуживание тягового подвижного состава железных дорог</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация нефтяных и газовых месторождений</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Монтаж и эксплуатация оборудования и систем газоснабжения</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Слесарное дело (по отраслям и видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Учет и аудит</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Хлебопекарное, макаронное и кондитерское производство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Вычислительная техника и информационные сети (по видам)</span>
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
                            <span className="info-college__text_bold">Автоматизация и управление технологическими процессами (по профилю)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, ремонт и техническое обслуживание тягового подвижного состава железных дорог</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Монтаж и эксплуатация оборудования и систем газоснабжения</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Хлебопекарное, макаронное и кондитерское производство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания (проводить набор раз в пять лет, по мере имеющейся потребности в районе)</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Возврат лицензий:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Учет и аудит</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация нефтяных и газовых месторождений</span>
                        </li>
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
                            <span className="info-college__text_bold">Электрооборудование, квалификация электромонтер</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        В следующем учебном году планируется объединение с Эмбинским колледжем сферы услуг т.к находятся  в одном районе.
                    </h3>
                    <h3 className="info-college__title info-college__title_vinous">
                        В 2023 году планируется согласно профилизации изменить название колледжа – Кандыагашский промышленно-технологический  колледж
                    </h3>
                </li>
            </ul>
        </div>
    );
}

export default Kpek;