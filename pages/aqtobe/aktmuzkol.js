import React from 'react';
import college from "../../public/img/colleges/aktmuzkol.png"
import director from "../../public/img/directors/aktmuzkol.png"

aktmuzkol.title = "ГККП «Актюбинский колледж им. А.Жубанова»"
function aktmuzkol(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГККП «Актюбинский колледж им. А.Жубанова»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГККП «Актюбинский колледж им. А.Жубанова»"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1971 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности:</span> государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> г.Актобе, ул.Шернияза 31
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> aktmuzkol.edu.kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> akt_muz_koll@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 (7132) 210846
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Исмагулов Аманжол Дюсенович"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Исмагулов Аманжол Дюсенович
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 29 июня 1959 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Преподаватель, Исследователь музыки
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 39 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 34 год
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 14 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Аттестацию не проходил</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ротации не подлежит (предпенсионный возраст).  </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Проектная мощность:</span> 300 мест, располагается в нетиповом здании
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 323 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 94 студента
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 76 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 84,2% по данным ГЦВП
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> 107 педагогов
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 5 026 кв.м.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 81
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал приспособленный :</span> 90 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал :</span> 150 посадочных мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Столовая:</span> буфет, приспособленные на 24 места
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общежитие: </span>100 койко-мест
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Имеются лицензии по специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Инструментальное исполнительство (по видам инструментов) </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Теория музыки</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Вокальное искусство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Хоровое дирижирование</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Социально-культурная деятельность (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Народное художественное творчество (по видам)</span>
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
                            <span className="info-college__text_bold">Инструментальное исполнительство (по видам инструментов)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Теория музыки</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Вокальное искусство </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Хоровое дирижирование</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Социально-культурная деятельность (по видам)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Народное художественное творчество (по видам)</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Возврат лицензий:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Не планируется, так как все специальности профильные и имеется потребность  </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Получение лицензии по новым специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Артист оркестра эстрадных инструментов (дирижер)</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Артист эстрадного пения  </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default aktmuzkol;