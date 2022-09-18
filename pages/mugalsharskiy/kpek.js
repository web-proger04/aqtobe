import React from 'react';
import kpek from '../../public/kpek.png'
import kpekDirector from '../../public/kpekDirector.png'
import styles from '../../styles/kpek.module.scss'
import Image from "next/image";
import Link from "next/link";

function Kpek(props) {
    return (
        <div className={styles.kpek}>
            <div className={styles.name}>ГККП «Кандыагашский промышленно-экономический колледж»</div>

            <div className={styles.info}>
                <div className={styles.college}>
                    <div className={styles.imageContainer}>
                        <Image src={kpek} layout="fill" className={styles.image} />
                    </div>
                    <div className={styles.text}>
                        <ul>
                            <li><strong>Год образования: </strong>1946 г.</li>
                            <li><strong>Форма собственности: </strong>Государственная</li>
                            <li><strong>Адрес: </strong>г.Кандыагаш, ул.Құндызды, 1</li>
                            <li><strong>Сайт: </strong><Link href={"www.kpek.kz"}>www.kpek.kz</Link></li>
                            <li><strong>Е-mail: </strong>kpek2012@mail.ru</li>
                            <li><strong>Телефон: </strong>+7(713) 337 2377</li>
                            <li><strong>Направление: </strong>Техническое</li>
                            <li><strong>Форма обучения: </strong>Дневная</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.director}>
                    <div className={styles.imageContainer}>
                        <Image src={kpekDirector} layout="fill" className={styles.image} />
                    </div>
                    <div className={styles.text}>
                        <ul>
                            <li><strong>ФИО: </strong>Байбулов Бек Аманович</li>
                            <li><strong>Дата рождения: </strong>5 января 1969 года</li>
                            <li><strong>Общий стаж работы: </strong>32 года</li>
                            <li><strong>Педагогический стаж: </strong>29 лет</li>
                            <li><strong>Стаж в данной организации: </strong>12 лет</li>
                            <li><strong>Имеет категорию «Руководитель-лидера» (2022 год)</strong></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.about}>
                <div className={styles.title}>О колледже</div>
                <ul>
                    <li className={styles.disc}><strong>Контингент обучающихся: </strong>267 человек (из них по госзаказу 267 чел.).</li>
                    <li className={styles.disc}><strong>Прием: </strong>88 чел., по госзаказу - 88чел.</li>
                    <li className={styles.disc}><strong>Выпуск: </strong>107 чел., по госзаказу – 107 чел.</li>
                    <li className={styles.disc}><strong>Трудоустройство: </strong>87% (по данным ГЦВП).</li>
                    <li className={styles.disc}><strong>Педагогических работников: </strong>35 человек.</li>
                    <li className={styles.disc}><strong>Качество педагогических работников:</strong>
                        <ol>
                            <li><strong>педагог исследователь: </strong>5</li>
                            <li><strong>высшая категория: </strong>5 (14,2%)</li>
                            <li><strong>первая категория: </strong>13 (13%)</li>
                        </ol>
                    </li>
                </ul>
                <ul>
                    <li className={styles.circle}>В колледже есть медицинский пункт.</li>
                    <li className={styles.circle}>Столовая на 80 мест, оборудованная современным кухонным оборудованием.</li>
                    <li className={styles.circle}>Конференц-зал с мультимедийным оборудованием и проектором для проведения различных семинаров и занятий.</li>
                    <li className={styles.circle}>Есть адаптированный спортзал и борцовский зал.</li>
                </ul>

                <ul>
                    <li className={styles.disc}><strong>Сведение по общежитию:</strong> адаптированное общежитие на 40 мест.</li>
                    <li className={styles.disc}><strong>Условия общежития: </strong>интернет, читальный зал, прачечная, комната отдыха, столовая на 12 мест</li>
                </ul>

                <ul>
                    <li className={styles.circle}><strong>Планируется: </strong>согласно профилизации изменить название колледжа – Кандыагашский промышленно-технический колледж</li>
                </ul>
            </div>

            <div className={styles.table}>
                <h3>Подготовка кадров ведется по 9 специальностям: </h3>
                <div className="wrapper">
                    <div className="box"><strong>№</strong></div>
                    <div className="box"><strong>Есть лицензии</strong> </div>
                    <div className="box"><strong>Возврат лицензий</strong> </div>
                    <div className="box"><strong>Планируются получить новые</strong></div>

                    <div className="row">
                        <div className="box"><strong>1</strong></div>
                        <div className="box">«Автоматизация и управление технологическими процессами (по профилю)» (квалификация «Слесарь по обслуживанию и ремонту контрольно-измерительных приборов и автоматики»);</div>
                        <div className="box"></div>
                        <div className="box">«Слесарное дело (по отраслям и видам)»   (квалификация «Слесарь аварийно-восстановительных работ»);</div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>2</strong></div>
                        <div className="box">«Организация питания» (квалификация «Повар», «Кондитер- декоратор»)</div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>3</strong></div>
                        <div className="box">«Сварочное дело» (квалификация «Электрогазосварщик»)</div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>4</strong></div>
                        <div className="box">«Эксплуатация, ремонт и техническое обслуживание тягового подвижного состава железных дорог» (квалификация «Помощник машиниста тепловоза»);            </div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>5</strong></div>
                        <div className="box">«Эксплуатация нефтяных и газовых месторождений» (квалификация «Оператор»);</div>
                        <div className="box">«Эксплуатация нефтяных и газовых месторождений» (квалификация «Оператор»);</div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>6</strong></div>
                        <div className="box">«Монтаж и эксплуатация оборудования и систем газоснабжения» (квалификация «Слесарь по эксплуатации и ремонту газового оборудования»);</div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>7</strong></div>
                        <div className="box">Учет и аудит»   (квалификация «Бухгалтер-кассир»);</div>
                        <div className="box">Учет и аудит»   (квалификация «Бухгалтер-кассир»);</div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>8</strong></div>
                        <div className="box">«Хлебопекарное, макаронное и кондитерское производство»  (квалификация «Пекарь»).</div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                    <div className="row">
                        <div className="box"><strong>9</strong></div>
                        <div className="box">«Вычислительная техника и информационные сети (по видам)»  (квалификация «Оператор компьютерного аппаратного обеспечения»).</div>
                        <div className="box">«Вычислительная техника и информационные сети (по видам)»  (квалификация «Оператор компьютерного аппаратного обеспечения»).</div>
                        <div className="box"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kpek;