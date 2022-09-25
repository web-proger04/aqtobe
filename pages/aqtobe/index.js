import React from 'react';
import Link from "next/link";
import ahpc from '../../public/img/colleges/ahpc.png'
import ashk from "../../public/img/colleges/ashk-college.png";
import aksib from "../../public/img/colleges/aksid.png"
import ahmc from "../../public/img/colleges/ahmc.png"
import aadk from "../../public/img/colleges/aadk.png";
import aktkNt from "../../public/img/colleges/aktk-nt.png";
import aktmuzkol from "../../public/img/colleges/aktmuzkol.png"
import aktobeAgk from "../../public/img/colleges/aktobe_agk.png"
import aktcolser from "../../public/img/colleges/aktcolser.png"
import acce from "../../public/img/colleges/acce.png"
import ssch from "../../public/img/colleges/ssch.png"
import akptu from "../../public/img/colleges/akptu.png"
import esetbatyr from "../../public/img/colleges/esetbatyr.png"
Aqtobe.title = "Актобе"

function Aqtobe(props) {

    return (
        <div className="colleges">
            <h2 className="header-title">Актобе</h2>
            <div className="cards">
                <article className="card">
                    <div className="card-image">
                        <img src={ahpc.src} alt="ГКП «Актюбинский Высший политехнический колледж» на ПХВ"/>
                    </div>
                    <div className="card-title">
                        ГКП «Актюбинский Высший политехнический колледж» на ПХВ
                    </div>
                    <Link href={"/aqtobe/ahpc"}>
                        <a className="card-button">
                            Перейти
                        </a>
                    </Link>
                </article>
                <article className="card">
                    <div className="card-image">
                        <img src={ashk.src}
                             alt="ГККП Актюбинский высший сельскохозяйственный колледж имени Шыганак Берсиева"/>
                    </div>
                    <div className="card-title">
                        ГККП "Актюбинский высший сельскохозяйственный колледж имени Шыганак Берсиева"
                    </div>
                    <Link href={"/aqtobe/ashk"}>
                        <a className="card-button">
                            Перейти
                        </a>
                    </Link>
                </article>
                <article className="card">
                    <div className="card-image">
                        <img src={aksib.src} alt="ГККП «Актюбинский колледж строительства и бизнеса»"/>
                    </div>
                    <div className="card-title">
                        ГККП «Актюбинский колледж строительства и бизнеса»
                    </div>
                    <Link href={"/aqtobe/aksib"}>
                        <a className="card-button">
                            Перейти
                        </a>
                    </Link>
                </article>
                <article className="card">
                    <div className="card-image">
                        <img src={ahmc.src}
                             alt="ГКП «Актюбинский Высший медицинский колледж имени героя Советского Союза Маншук Маметовой»»"/>
                    </div>
                    <div className="card-title">
                        ГКП «Актюбинский Высший медицинский колледж имени героя Советского Союза Маншук Маметовой» на
                        ПХВ
                    </div>
                    <Link href={"/aqtobe/ahmc"}>
                        <a className="card-button">
                            Перейти
                        </a>
                    </Link>
                </article>
                <article className="card">
                    <div className="card-image">
                        <img src={aadk.src} alt="ГККП «Актюбинский автомобильно-дорожный колледж»"/>
                    </div>
                    <div className="card-title">
                        ГККП «Актюбинский автомобильно-дорожный колледж» на ПХВ
                    </div>
                    <Link href={"/aqtobe/aadk"}>
                        <a className="card-button">
                            Перейти
                        </a>
                    </Link>
                </article>
                <article className="card">
                    <div className="card-image">
                        <img src={aktkNt.src} alt="ГККП «Актюбинский гуманитарный колледж»"/>
                    </div>
                    <div className="card-title">
                        ГККП «Актюбинский гуманитарный колледж»
                    </div>
                    <Link href={"/aqtobe/aktk-nt"}>
                        <a className="card-button">
                            Перейти
                        </a>
                    </Link>
                </article>
                <article className="card">
                    <div className="card-image">
                        <img src={aktmuzkol.src} alt="ГККП «Актюбинский колледж им. А.Жубанова»"/>
                    </div>
                    <div className="card-title">
                        ГККП «Актюбинский колледж им. А.Жубанова»
                    </div>
                    <Link href={"/aqtobe/aktmuzkol"}>
                        <a className="card-button">
                            Перейти
                        </a>
                    </Link>
                </article>
                <article className="card">
                    <div className="card-image">
                        <img src={aktobeAgk.src} alt="ГККП «Актюбинский гуманитарный колледж»"/>
                    </div>
                    <div className="card-title">
                        ГККП «Актюбинский гуманитарный колледж»
                    </div>
                    <Link href={"/aqtobe/aktobe-agk"}>
                        <a className="card-button">
                            Перейти
                        </a>
                    </Link>
                </article>
                <article className="card">
                    <div className="card-image">
                        <img src={aktcolser.src} alt="ГККП «Актюбинский колледж сервиса»"/>
                    </div>
                    <div className="card-title">
                        ГККП «Актюбинский колледж сервиса»
                    </div>
                    <Link href={"/aqtobe/aktcolser"}>
                        <a className="card-button">
                            Перейти
                        </a>
                    </Link>
                </article>
                <article className="card">
                    <div className="card-image">
                        <img src={acce.src} alt="ГККП «Актюбинский колледж связи и электротехники»"/>
                    </div>
                    <div className="card-title">
                        ГККП «Актюбинский колледж связи и электротехники»
                    </div>
                    <Link href={"/aqtobe/acce"}>
                        <a className="card-button">
                            Перейти
                        </a>
                    </Link>
                </article>
                <article className="card">
                    <div className="card-image">
                        <img src={ssch.src} alt="Актюбинская областная специальная (коррекционная) школа-интернат-колледж для детей с нарушением слуха"/>
                    </div>
                    <div className="card-title">
                        Актюбинская областная специальная (коррекционная) школа-интернат-колледж для детей с нарушением слуха
                    </div>
                    <Link href={"/aqtobe/ssch"}>
                        <a className="card-button">
                            Перейти
                        </a>
                    </Link>
                </article>
                <article className="card">
                    <div className="card-image">
                        <img src={akptu.src} alt="«Актюбинский колледж промышленных технологий и управления» МКҚК"/>
                    </div>
                    <div className="card-title">
                        «Актюбинский колледж промышленных технологий и управления» МКҚК
                    </div>
                    <Link href={"/aqtobe/akptu"}>
                        <a className="card-button">
                            Перейти
                        </a>
                    </Link>
                </article>
                <article className="card">
                    <div className="card-image">
                        <img src={esetbatyr.src} alt="КГУ «Областная специализированная школа-интернат-колледж олимпийского резерва имени Есет батыра»"/>
                    </div>
                    <div className="card-title">
                        КГУ «Областная специализированная школа-интернат-колледж олимпийского резерва имени Есет батыра»
                    </div>
                    <Link href={"/aqtobe/esetbatyr"}>
                        <a className="card-button">
                            Перейти
                        </a>
                    </Link>
                </article>
            </div>
        </div>
        //     1<div>ГККП «Актюбинский гуманитарный колледж»</div>
        //  2   <div>ГККП «Актюбинский колледж транспорта, коммуникаций и новых технологий»</div>
        //6     <div>ГККП «Актюбинский музыкальный колледж им. А. Жубанова»</div>
        // 7    <div>ГККП «Актюбинский колледж связи и электротехники»</div>
        //   9  <div>ГККП «Актюбинский колледж промышленных технологий и управления»</div>
        //    10 <div>ГККП «Актюбинский колледж сервиса»</div>
        //  12   <div>КГУ «Актюбинский областной специальный комплекс «школа- интернат- колледж» для детей с нарушениями слуха и зрения »</div>
        //    13 <div>КГУ «Областная специализированная школа-интернат-колледж олимпийского резерва имени Есет батыра»</div>
        //14     <div>КГУ «Актюбинский многопрофильный колледж»</div>
        // 15    <div>ТОО «Высший колледж АРУ имени К.Жубанова»</div>
        //  16   <div>ЧУ «Актюбинский технико-технологический колледж»</div>
        //   17  <div>ТОО «Баишев Высший Медицинский колледж»</div>
        //   18  <div>ЧУ «Актюбинский строительно –монтажный колледж»</div>
        //19     <div>ЧУ «Актюбинский индустриально-профессиональный колледж»</div>
        //20     <div>ТОО "Школа-Гимназия и Колледж КАЗГЮУ"</div>
        //21     <div>ТОО «Актюбинский колледж АО «Казахская академия транспорта и коммуникаций им. М.Тынышпаева»</div>
        //22   <div>ЧУ "Европейский высший колледж экономики, бизнеса и права"</div>
        //23   <div>ТОО «Актюбинский многопрофильный колледж АГУ Тарлан»</div>
        //  24   <div>ЧУ «Многопрофильный Высший колледж «Болашак»</div>
        //    25 <div>ЧУ колледж «Дуние»</div>
        // 26    <div>Негосударственное независимое некоммер-ческое образовательное учреждение «Экономико -правовой колледж»</div>
        //   27  <div>ЧУ «Актюбинский педагогический колледж»</div>
        //28     <div>ТОО «Актюбинский гуманитарно-технический универсальный мультипрофильный колледж»</div>
        // 29    <div>ЧУ «Многопрофильный колледж «Рауан» (Нет контингента)</div>
        //   30  <div>ЧУ «Мугалжарский гуманитарно-технический колледж»</div>
        //  31   <div>ЧУ «Колледж медресе Актобе»</div>
        //
        //
        // </div>

        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ГККП «Актюбинский гуманитарный колледж»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ГККП «Актюбинский колледж транспорта, коммуникаций и новых технологий»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/ahpc'}>
        //     <a className="card">
        //         <img src={ahpc.src} alt=""/>
        //         <div className="name">ГКП «Актюбинский Высший политехнический колледж» на ПХВ</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ГККП «Актюбинский Высший сельскохозяйственный колледж»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ГКП «Актюбинский Высший медицинский колледж имени героя Советского Союза Маншук Маметовой» на ПХВ</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ГККП «Актюбинский музыкальный колледж им. А. Жубанова»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ГККП «Актюбинский колледж связи и электротехники»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ГККП «Актюбинский колледж строительства и бизнеса»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ГККП «Актюбинский колледж промышленных технологий и управления»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ГККП «Актюбинский колледж сервиса»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ГККП «Актюбинский автомобильно - дорожный колледж»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">КГУ «Актюбинский областной специальный комплекс «школа- интернат- колледж» для детей с нарушениями слуха и зрения»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">КГУ «Областная специализированная школа-интернат-колледж олимпийского резерва имени Есет батыра»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">КГУ «Актюбинский многопрофильный колледж»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ТОО «Высший колледж АРУ имени К.Жубанова»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ЧУ «Актюбинский технико-технологический колледж»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ТОО «Баишев Высший Медицинский колледж»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ЧУ «Актюбинский строительно–монтажный колледж»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ЧУ «Актюбинский индустриально-профессиональный колледж»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ТОО "Школа-Гимназия и Колледж КАЗГЮУ"</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ТОО «Актюбинский колледж АО «Казахская академия транспорта и коммуникаций им. М.Тынышпаева»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ЧУ "Европейский высший колледж экономики, бизнеса и права"</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ТОО «Актюбинский многопрофильный колледж АГУ Тарлан»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ЧУ «Многопрофильный Высший колледж «Болашак»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ЧУ колледж «Дуние»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">Негосударственное независимое некоммер-ческое образовательное учреждение «Экономико-правовой колледж»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ЧУ «Актюбинский педагогический колледж»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ТОО «Актюбинский гуманитарно-технический универсальный мультипрофильный колледж»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ЧУ «Многопрофильный колледж «Рауан» (Нет контингента)</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ЧУ «Мугалжарский гуманитарно-технический колледж»</div>
        //     </a>
        // </Link>
        //
        // <Link href={'/aqtobe/noninfo'}>
        //     <a className="card">
        //         <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
        //         <div className="name">ЧУ «Колледж медресе Актобе»</div>
        //     </a>
        // </Link>
    );
}

export default Aqtobe;