import React from 'react';
import college from "../../public/img/colleges/badamsha-college.png";
import director from "../../public/img/directors/badamsha-college.png"

BadamshaCollege.title = "КГУ «Бадамшинский агротехнический колледж »" // вот так добавляешь название странице
function BadamshaCollege(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                КГУ «Бадамшинский агротехнический колледж »
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="КГУ «Бадамшинский агротехнический колледж »"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 2002 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности:</span> государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> Актюбинская область , Каргалинский район, село Бадамша
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> badamsha-college.edu.kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> phbadam12@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 (71342) 22446
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Мухамбетпаизова Женискул Сагидоллаевна"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Карагулов Кайрат Серикович
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 04 июня 1986 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Инженер -механик
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 14 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span>1 0 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span>10 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Аттестацию планируется в 2024 году</span>
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
                            <span className="info-college__text_bold">Проектная мощность :</span> 150 мест.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 100 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 44  студента
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> в 2022 года не было
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> выпуск был в 2021 году - 85.4% (по данным ГЦВП) .
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> 18 человек.
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 1617 кв.м.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 7
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 2
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 2
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 152 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> 100 посадочных мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Столовая:</span> 120 кв. метра
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общежитие:</span> 22 места
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
                            <span className="info-college__text_bold">Сварочное дело</span>
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
                            <span className="info-college__text_bold">Сварочное дело</span>
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
                            <span className="info-college__text_bold">Эксплуатация, техническое обслуживание и ремонт сельскохозяйственной техники</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        В 2020 году АО «СНПС-АктобеМунайГаз»  обновили материально-техническую базу на сумму 67 млн.тенге в рамках закона «О недропользовании»
                    </h3>
                </li>
            </ul>
        </div>
    );
}

export default BadamshaCollege;