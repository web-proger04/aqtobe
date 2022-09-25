import React from 'react';
import college from "../../public/img/colleges/aktk-nt.png"
import director from "../../public/img/directors/aktk-nt.png"

aktkNt.title = "ГККП «Актюбинский колледж транспорта, коммуникаций и новых технологий»"
function aktkNt(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГККП «Актюбинский колледж транспорта, коммуникаций и новых технологий»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГККП «Актюбинский колледж транспорта, коммуникаций и новых технологий»"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1932 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> г. Актобе., ул. 8 Марта, 1А
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> www.aktk-nt.kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> aktk-nt@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 (7132) 21-35-35
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="НУРГАЛИЕВ ЕРАЛЫ ГУБАЕВИЧ"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> НУРГАЛИЕВ ЕРАЛЫ ГУБАЕВИЧ
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 25 августа 1963 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Учитель истории обществоведения, Юрист
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 40 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 21 год
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 8 месяцев (в рамках ротации переведен из Актюбинского гуманитарного колледжа)
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прошел аттестацию в 2021 году с присвоением 1 категорию руководителя </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Проектная мощность:</span> 1074 мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 1104 студентов, по госзаказу– 1022 студента
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 290 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 332 студента
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 93%.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> 90 педагогов
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 16520 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 49
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 25
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 9
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 323 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> 300 посадочных мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Столовая и буфет</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">мини типография (издательский центр)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">конференц зал с мультимедийным оборудованием и проектором</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общежитие: </span>2703 кв.м. 300 койко-мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">В 2021 году был оснащен по программе «Жас маман» на сумму – 284,0 тыс.т</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Имеются лицензии по специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Автоматизация и управление технологическими процессами </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Автоматика, телемеханика и управление движением на железнодорожном транспорте</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, ремонт и техническое обслуживание вагонов и рефрижераторного подвижного состава железных дорог</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация и техническое обслуживание подъемно-транспортных, строительно-дорожных машин и механизмов железнодорожного транспорта</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация перевозок и управление движением на железнодорожном транспорте</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация устройств оперативной технологической связи железнодорожного транспорта</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство железных дорог, путь и путевое хозяйство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, ремонт и техническое обслуживание тягового подвижного состава железных дорог</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электроснабжение, эксплуатация, техническое обслуживание и ремонт электротехнических систем железных дорог</span>
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
                            <span className="info-college__text_bold">Автоматика, телемеханика и управление движением на железнодорожном транспорте</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, ремонт и техническое обслуживание вагонов и рефрижераторного подвижного состава железных дорог</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация и техническое обслуживание подъемно-транспортных, строительно-дорожных машин и механизмов железнодорожного транспорта</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация перевозок и управление движением на железнодорожном транспорте</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация устройств оперативной технологической связи железнодорожного транспорта</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство железных дорог, путь и путевое хозяйство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Эксплуатация, ремонт и техническое обслуживание тягового подвижного состава железных дорог</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электроснабжение, эксплуатация, техническое обслуживание и ремонт электротехнических систем железных дорог</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Возврат лицензий:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Автоматизация и управление технологическими процессами  </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Получение лицензии по новым специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мехатроника, квалификация - Монтажник-наладчик мехатронных систем </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Робототехника и встраиваемые системы, квалификация- Техник мобильной робототехники </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        В рамках профилизации и оптимизации проводится слияние с Актюбинским колледжем связи и электротехники с названием «Актюбинский колледж транспорта, связи и новых технологий»
                    </h3>
                </li>
            </ul>
        </div>
    );
}

export default aktkNt;