import React from 'react';
import college from "../../public/img/colleges/alga-college.png"
import director from "../../public/img/directors/alga-college.png"

export default function AlgaCollege(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГККП «Алгинский индустриально-технический колледж»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГККП «Алгинский индустриально-технический колледж»"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1956 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности: </span> Государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> Актюбинская область г. Алга ул.Есет-батыра 33а
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> www.alga-college.edu.kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> alga_5 pl@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 (71337) 42412
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Ахметова Нургул Жалгабаевна"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Ахметова Нургул Жалгабаевна
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 14 августа 1971 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Бакалавр  Экономист
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 24 год
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 22 год
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 3 год
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Аттестация планируется в 2024 году</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ротации  не подлежит (один колледж в районе)  </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Проектная мощность:</span> 250 мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 217 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 82 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 66 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 60%
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогических работников:</span> 31 человек
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span>5793,7кв.м., в т.ч. учебная – 2585,5 кв.м,
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 15
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 9
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 1
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 315 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мини спортплощадка:</span> 40 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> 100 посадочных мест, 313 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Библиотека: </span>60 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Приспособленный буфет</span>
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
                            <span className="info-college__text_bold">Организация питания </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело (по видам)  </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство и эксплуатация зданий и сооружений </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Швейное производство и моделирование одежды</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Монтаж и эксплуатация оборудования и систем газоснабжения</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация автомобильного транспорта</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электрооборудование (по видам и отраслям)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, техническое обслуживание и ремонт сельскохозяйственной техники </span>
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
                            <span className="info-college__text_bold">Эксплуатация, техническое обслуживание и ремонт сельскохозяйственной техники </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело (по видам)  </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Швейное производство и моделирование одежды</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Монтаж и эксплуатация оборудования и систем газоснабжения</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация автомобильного транспорта</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация электромеханического оборудования</span>
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
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Получение лицензии по новым специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Квалификацию «Мастер по ремонту сельскохозяйственной техники» по специальности - Механизация сельского хозяйства</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        В 2020 году АО «СНПС-АктобеМунайГаз»  обновили материально-техническую базу на сумму 92,8 млн.тенге в рамках закона «О недропользовании»
                    </h3>
                </li>
            </ul>
        </div>
    );
}