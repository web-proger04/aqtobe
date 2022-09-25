import React from 'react';
import college from "../../public/img/colleges/aktcolser.png";
import director from "../../public/img/directors/aktcolser.png"

Aktcolser.title = "ГККП «Актюбинский колледж сервиса»"

function Aktcolser(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГККП «Актюбинский колледж сервиса»
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГККП «Актюбинский колледж сервиса»"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1947 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности:</span> государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> г.Актобе, ул.Маресьева,63
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> https://aktcolser.kz
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> pl3_aktobe@mail.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8 (7132) 545501
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Сахатова Гюльнара Санкешевна"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Сахатова Гюльнара Санкешевна
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 14 ноября 1965 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Специалист технологии основного органического и   нефтехимического синтеза
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 44 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 34 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 5 лет
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прошла аттестацию:</span> в 2022 году с присвоением категории «Руководитель первой категории»
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ротации не подлежит (пенсионный возраст)</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 587 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 277 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 191 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 93,2% по данным ГЦВП
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> 65 педагогов
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 3668 кв.м., имеется арендуемое здание – 311 кв.м.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 23
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 3
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 3
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 164 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> не имеется
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Буфет приспособленный </span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общежитие:</span> не имеется
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Имеются лицензии по специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Организация питания</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Швейное производство и моделирование одежды</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Маркетинг</span>
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
                            <span className="info-college__text_bold">Организация питания</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Швейное производство и моделирование одежды</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Маркетинг</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Возврат лицензий:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Не планируется, так как все специальности профильные и имеется потребность</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Получение лицензии по новым специальностям:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Гостиничный бизнес</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дизайн одежды</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Парикмахерское искусство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Туризм</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        В 2021 году был оснащен по программе «Жас маман» на сумму – 323,5 тыс.т
                    </h3>
                    <h3 className="info-college__title info-college__title_vinous">
                        В октябре нынешнего года планируется переезд в освободившееся типовое здание по адресу ул Гришина,7
                    </h3>
                    <h3 className="info-college__title info-college__title_vinous">
                        Согласно расширению перечня специальностей и отраслевой профилизации изменить название колледжа – Актюбинский колледж дизайна и сервисного обслуживания
                    </h3>
                </li>
            </ul>
        </div>
    );
}

export default Aktcolser;