import React from 'react';
import college from '../../public/img/colleges/ashk-college.png'
import director from '../../public/img/directors/ashk-director.png'


Ashk.title = "ГККП Актюбинский высший сельскохозяйственный колледж имени Шыганак Берсиева" // вот так добавляешь название странице
function Ashk(props) {
    return (
        <div className="collegeContainer">
            <h2 className="header-title">
                ГККП "Актюбинский высший сельскохозяйственный колледж имени Шыганак Берсиева"
            </h2>
            <ul className="info-college">
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_college">
                        <img src={college.src} alt="ГКП «Актюбинский Высший политехнический колледж» на ПХВ"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Год образования:</span> 1977 г.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Форма собственности:</span> государственная
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Адрес:</span> г. Актобе, район Алматы,
                            Село К. Нокин, улица Кокшетау№ 2
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Сайт:</span> http://ashk1977.kz/
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Е-mail:</span> 20801@rambler.ru
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Телефон:</span> 8(7132) 994305, 994810
                        </li>
                    </ul>
                </li>
                <li className="info-college__item">
                    <div className="info-college__image info-college__image_director">
                        <img src={director.src} alt="Алдияров Касымбек Тулеуович"/>
                    </div>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">ФИО:</span> Алдияров Касымбек Тулеуович
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Дата рождения:</span> 19 декабря 1959 года
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Образование:</span> Инженер-механик, Бакалавр юриспруденции
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общий стаж работы:</span> 41 год
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогический стаж:</span> 41 год
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стаж в данной организации:</span> 8 месяцев
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прошел аттестацию:</span> в 2021 году с присвоением 1 категорию руководителя
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прошел ротацию:</span> в феврале 2022 года
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Информация о колледже:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Контингент обучающихся:</span> 744 студента
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Прием:</span> 325 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Выпуск:</span> 153 студентов
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Трудоустройство:</span> 89% по данным ГЦВП
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Педагогические кадры:</span> 76 человек
                        </li>
                    </ul>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Материально-техническая база:</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общая площадь:</span> 7656 кв.м.
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Количество учебных кабинетов:</span> 48
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лабораторий:</span> 21
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Мастерских:</span> 2
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Спорт зал:</span> 434 кв.м
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Актовый зал:</span> 250 посадочных мест
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Медицинский пункт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Столовая и буфет</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Общежитие:</span> 3980 кв.м. на 320 койко-мест
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
                            <span className="info-college__text_bold">Агрономия</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ветеринария</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лесное хозяйство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Охотоведение и звероводство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Зоотехния</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Землеустроиство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стандартизация, метрология и сертификация</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация автомобильного транспорта</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Физическая культура и спорт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Учет-аудит</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Технология производства пищевых продуктов</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Производства мяса и мясных продуктов</span>
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
                            <span className="info-college__text_bold">Агрономия</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Ветеринария</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Лесное хозяйство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Охотоведение и звероводство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Зоотехния</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Землеустроиство</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Стандартизация, метрология и сертификация</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Производства мяса и мясных продуктов</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title">
                        Возврат лицензий:
                    </h3>
                    <ul className="info-college__list">
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Техническое обслуживание, ремонт и эксплуатация автомобильного транспорта</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Физическая культура и спорт</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">Технология производства пищевых продуктов</span>
                        </li>
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
                            <span className="info-college__text_bold">Организация  тепличного хозяйства, по квалификациям- Фитосанитар  по уходу за растениями"</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">«Оператор тепличного хозяйства"</span>
                        </li>
                        <li className="info-college__text">
                            <span className="info-college__text_bold">"Мастер тепличных производства"</span>
                        </li>
                    </ul>
                </li>
                <li className="info-college__item info-college__item_no-flex">
                    <h3 className="info-college__title info-college__title_vinous">
                        В 2023 году планируется пройти отраслевую аккредитацию
                    </h3>
                    <h3 className="info-college__title info-college__title_vinous">
                        Колледж имеет территория земельного участка, где расположена теплица, дендропарк, питомник, виварий, лабораторий для птиц и зверей, СТО, зимний сад.
                    </h3>
                    <h3 className="info-college__title info-college__title_vinous">
                        В 2021 году был оснащен по программе «Жас маман» на сумму – 320,9 тыс.т
                    </h3>
                </li>
            </ul>
        </div>
    );
}

export default Ashk;