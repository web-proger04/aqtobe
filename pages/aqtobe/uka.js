import React from 'react'
import college from "../../public/img/colleges/uka.png";
import director from "../../public/img/directors/uka.png";


export default function Uka() {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                КГУ  «Актюбинский многопрофильный  колледж»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГККП «Актюбинский гуманитарный колледж»"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1973 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности:</span> государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> г.Актобе, Чекалина, 44строение
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> mn.kol.uka@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 (7132) 507304
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        Колледж ведет обучение лиц, осужденных к отбыванию наказания, в УКА-168/2 КУИС МВД РК
                    </h3>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Займолдин Серик Газизович"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Аманкулов Ахмет Ержанбаевич
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 03 декабря 1964 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Учитель русского язык и литература
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 38 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 30 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 8 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Имеет категорию «руководитель-организатор»    </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 100 мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 100 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 36  студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 30%
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогических работников:</span> 11 человек
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 268,5кв.метров,  здание приспособленное
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 4
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерские находятся в промышленной  зоне учреждения  КА-168/2.</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Имеются лицензии по специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Строительство и эксплуатация зданий и сооружений </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мебельное производство </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Монтаж и эксплуатация внутренних санитарно-технических устройств, вентиляции и инженерных   систем (по видам) </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Слесарное дело </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Токарное дело </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Швейное производство и моделирование одежды </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электрооборудование </span>
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
                            <span className="info-college__text_bold">Строительство и эксплуатация зданий и сооружений </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мебельное производство </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Монтаж и эксплуатация внутренних санитарно-технических устройств, вентиляции и инженерных   систем (по видам) </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сварочное дело </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Слесарное дело </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Токарное дело </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Швейное производство и моделирование одежды </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Электрооборудование </span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        Неоднократно выходили с предложением к руководству УКА-168/2 КУИС МВД РК  перевести обучающихся на краткосрочную форму обучения сроком до 10 месяцев
                    </h3>
                </li>
            </ul>
        </div>
    )
}