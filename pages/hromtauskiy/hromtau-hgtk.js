import React from 'react';
import collegePhoto from '../../public/img/colleges/hromtau-hgtk.png'
import directorPhoto from '../../public/img/directors/hromtau-hgtkDirector.png'
import Image from "next/image";
import Link from "next/link";

export default function HrmotauHgtk(props) {
    return (
        <div className="collegeContainer">
            <div className="name">ГКП «Актюбинский Высший политехнический колледж» на ПХВ</div>

            <div className="info">
                <div className="college">
                    <div className="imageContainer">
                        <Image src={collegePhoto} layout="fill" className="image"/>
                    </div>
                    <div className="text">
                        <ul>
                            <li><strong>Год образования: </strong>1965 г.</li>
                            <li><strong>Адрес: </strong>город Актобе, улица Рыскулова-267.</li>
                            <li><strong>Сайт: </strong>www.ahpc.edu.kz</li>
                            <li><strong>Е-mail: </strong>politech1965@mail.ru</li>
                            <li><strong>Телефон: </strong>8 (7132) 56-20-51</li>
                            <li><strong>Направление: </strong>Техническое</li>
                        </ul>
                    </div>
                </div>
                <div className="director">
                    <div className="imageContainer">
                        <Image src={directorPhoto} layout="fill" className="image"/>
                    </div>
                    <div className="text">
                        <ul>
                            <li><strong>ФИО: </strong>Мухамбетпаизова Женискул Сагидоллаевна</li>
                            <li><strong>Дата рождения: </strong>8 мая 1965 года</li>
                            <li><strong>Образование: </strong>Инженер по управлению железной дороги и перевозочными
                                процессами на железнодорожном транспорте
                            </li>
                            <li><strong>Общий стаж работы: </strong>36,8 лет</li>
                            <li><strong>Педагогический стаж: </strong>24,2 год</li>
                            <li><strong>Стаж в данной организации: </strong>6 месяцев</li>
                            <li><strong>Прошла аттестацию: </strong>2022 году с присвоением 1 категорию руководителя
                                (2022год)
                            </li>
                            <li><strong>Прошла ротацию: </strong>в феврале 2022 года</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="title">О колледже</div>
                <ul>
                    <li className="disc"><strong>Контингент обучающихся: </strong>2048 студента, их них по госзакау –
                        1962 студента
                    </li>
                    <li className="disc"><strong>Прием: </strong>601 студентов</li>
                    <li className="disc"><strong>Выпуск: </strong>469 студентов</li>
                    <li className="disc"><strong>Трудоустройство: </strong>91% (в том числе по данным ГЦВП – 91%).</li>
                    <li className="disc"><strong>Педагогические кадры: </strong>112 педагога - (77 %)</li>
                </ul>
                <ul>
                    <li><strong>Материально-техническая база:</strong>
                        <ul style={{marginTop: 5}}>
                            <li className="circle" style={{marginLeft: 30}}><strong>Общая площадь: </strong>12 323,7
                                кв.м.
                            </li>
                            <li className="circle" style={{marginLeft: 30}}><strong>Количество учебных
                                кабинетов: </strong>63
                            </li>
                            <li className="circle" style={{marginLeft: 30}}><strong>Лабораторий: </strong>20</li>
                            <li className="circle" style={{marginLeft: 30}}><strong>Мастерских: </strong>10</li>
                            <li className="circle" style={{marginLeft: 30}}><strong>Спорт зал: </strong>1138 кв.м</li>
                            <li className="circle" style={{marginLeft: 30}}><strong>Актовый зал: </strong>200 посадочных
                                мест
                            </li>
                            <li className="circle" style={{marginLeft: 30}}><strong>Медицинский пункт</strong></li>
                            <li className="circle" style={{marginLeft: 30}}><strong>Столовая и буфет</strong></li>
                            <li className="circle" style={{marginLeft: 30}}><strong>Конференц зал с мультимедийным
                                оборудованием и проектором</strong></li>
                            <li className="circle" style={{marginLeft: 30}}><strong>В 2019 году в колледже был открыт
                                региональный IT-центр новейшего поколения</strong></li>
                            <li className="circle" style={{marginLeft: 30}}><strong>Общежитие: </strong>1965 кв.м. (94
                                места), В 2020 году был оснащен по программе «Жас маман» на сумму – 308,0 тыс.т
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="table">
                <h3>Подготовка кадров ведется по 9 специальностям: </h3>
                <div className="wrapper">
                    <div className="box"><strong>№</strong></div>
                    <div className="box"><strong>Есть лицензии</strong></div>
                    <div className="box"><strong>Возврат лицензий</strong></div>
                    <div className="box"><strong>Планируются получить новые</strong></div>

                    <div className="row">
                        <div className="box"><strong>1</strong></div>
                        <div className="box">Программное обеспечение (по видам)</div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>2</strong></div>
                        <div className="box">Лабораторная технология</div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>3</strong></div>
                        <div className="box">Технология переработки нефти и газа</div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>4</strong></div>
                        <div className="box">Электроснабжение (по отраслям)</div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>5</strong></div>
                        <div className="box">Техническое обслуживание, ремонт и эксплуатация электромеханического
                            оборудования (по видам и отраслям)
                        </div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>6</strong></div>
                        <div className="box">Автоматизация и управление технологическими процессами (по профилю)</div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>7</strong></div>
                        <div className="box">Технология машиностроения</div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>8</strong></div>
                        <div className="box">Техническое обслуживание, ремонт и эксплуатация автомобильного транспорта
                        </div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>9</strong></div>
                        <div className="box">Эксплуатация нефтяных и газовых месторождений</div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>10</strong></div>
                        <div className="box">Строительство и эксплуатация зданий и сооружений</div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>11</strong></div>
                        <div className="box">Переводческое дело (по видам)</div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>12</strong></div>
                        <div className="box">Учет и аудит</div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}