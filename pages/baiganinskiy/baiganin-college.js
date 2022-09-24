import React from 'react';
import college from "../../public/img/colleges/baiganin-college.png";
import director from "../../public/img/directors/baiganin-college.png"

BaiganinСollege.title = "КГУ «Байганинский технический колледж»" // вот так добавляешь название странице
function BaiganinСollege(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГКП «Актюбинский Высший политехнический колледж» на ПХВ
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГКП «Актюбинский Высший политехнический колледж» на ПХВ"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1960 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности:</span> государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> с. Карауылкелды, ул.Барак батыра,
                            46.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> www.baiganin-college.kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> baiganin_college@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 (71345) 22185, 22994
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Мухамбетпаизова Женискул Сагидоллаевна"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Абат Қасен Абатұлы
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 5 августа 1961 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Учитель математики
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 40 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 40 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span>19 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ПАттестацию не проходил</span>
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
                            <span className="info-college__text_bold">Проектная мощность:</span> 150 мест, располагается в  приспособленном здание
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 140 студентов
                        </li>

                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 85 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 43 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 75,1%
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> 22 педагогов
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 4245 кв.м. (в т.ч. учебная - 1194,0 кв.м).
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 14
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 3
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 4
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 592 кв.м
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
                            <span className="info-college__text_bold">Механизация сельского хозяйства</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство и эксплуатация зданий и сооружений</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Учет и аудит</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Швейное производство и моделирование одежды</span>
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
                            <span className="info-college__text_bold">Строительство и эксплуатация зданий и сооружений</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Швейное производство и моделирование одежды</span>
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
                            <span
                                className="info-college__text_bold">Квалификацию «Мастер по ремонту сельскохозяйственной техники» по специальности - Механизация сельского хозяйства</span>
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

export default BaiganinСollege;