import React from 'react';
import college from "../../public/img/colleges/aktk-nt.png"
import director from "../../public/img/directors/aktk-nt.png"

AktobeAgk.title = "ГККП «Актюбинский гуманитарный колледж»"
function AktobeAgk(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГККП «Актюбинский гуманитарный колледж»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГККП «Актюбинский гуманитарный колледж»"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1922 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности:</span> государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> г.Актобе, ул. Есет батыра 73.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> aktobe_agk@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 56 -02 -30
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="АЛИШЕВА ЖАНАРА КУАНДЫКОВНА"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> АЛИШЕВА ЖАНАРА КУАНДЫКОВНА
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 12 апреля 1967 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Бакалавр  юриспруденции, Бакалавр педагогики и психологии
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 32 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 11 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 7 месяцев
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прошла аттестацию  в 2021 году с присвоением категорию руководител-лидер  </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прошла ротацию в феврале 2022 года  </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Проектная мощность:</span> 1090 мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 1580 студентов, из них по госзаказу 1443 студента
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 609 студентов, дневное отделение – 584 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 261 студентов, дневной отделение – 247 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 85%
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> 113 человек
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 9784 кв.м., в т.ч. учебная – 4190 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 50
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 2
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 2
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 1138 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> 350 посадочных мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Столовая</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общежитие:</span> 5588 кв.м.  на 350 койко-мест
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Имеются лицензии по специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дошкольное воспитание и обучение </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогика и методика преподавания языка и литературы основного среднего образования </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогика и методика начального обучения </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Музыкальное образование </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Народное художественное творчество (по видам) </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Библиотечное дело </span>
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
                            <span className="info-college__text_bold">Дошкольное воспитание и обучение</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогика и методика преподавания языка и литературы основного среднего образования</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогика и методика начального обучения</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Музыкальное образование</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Библиотечное дело</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Возврат лицензий:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Народное художественное творчество (по видам)  </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Получение лицензии по новым специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Получение лицензии по новым специальностям не планируется </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        Планируется переход на форму деятельности ГКП на ПХВ (идет процесс согласования)
                    </h3>
                </li>
            </ul>
        </div>
    );
}

export default AktobeAgk;