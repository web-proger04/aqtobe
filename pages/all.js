import React from 'react';
import Link from "next/link";
import ahpc from '../public/img/colleges/ahpc.png'
import ashk from "../public/img/colleges/ashk-college.png";
import aksib from "../public/img/colleges/aksid.png"
import ahmc from "../public/img/colleges/ahmc.png"
import aadk from "../public/img/colleges/aadk.png";
import aktkNt from "../public/img/colleges/aktk-nt.png";
import aktmuzkol from "../public/img/colleges/aktmuzkol.png"
import aktobeAgk from "../public/img/colleges/aktobe_agk.png"
import aktcolser from "../public/img/colleges/aktcolser.png"
import acce from "../public/img/colleges/acce.png"
import ssch from "../public/img/colleges/ssch.png"
import akptu from "../public/img/colleges/akptu.png"
import esetbatyr from "../public/img/colleges/esetbatyr.png"
import uka from "../public/img/colleges/uka.png";
import aitekebiyskiyCollege from "../public/img/colleges/AitekeMk1974.png";
import algaCollege from "../public/img/colleges/alga-college.png"
import baiganinСollege from "../public/img/colleges/baiganin-college.png";
import hgtk from "../public/img/colleges/hromtau-hgtk.png";
import badamshaCollege from '../public/img/colleges/badamsha-college.png'
import kobda from "../public/img/colleges/kobda.png";
import ZhmkCollege from "../public/img/colleges/zhmk.png";
import kpek from '../public/img/colleges/kpek.png'
import embin from "../public/img/colleges/embin.png"
import ShalkarskiyCollege from '../public/img/colleges/shalkar.png'
import uilskiyCollege from '../public/img/colleges/agrarka-uil.png'

All.title = "Все колледжи"
function All(props) {
    return (
        <div>
            <div className="colleges">
                <h2 className="header-title">Все колледжи</h2>
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
                            <img src={aktkNt.src} alt="ГККП «Актюбинский колледж транспорта, коммуникаций и новых технологий»"/>
                        </div>
                        <div className="card-title">
                            ГККП «Актюбинский колледж транспорта, коммуникаций и новых технологий»
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
                    <article className="card">
                        <div className="card-image">
                            <img src={uka.src} alt="КГУ  «Актюбинский многопрофильный  колледж»"/>
                        </div>
                        <div className="card-title">
                            КГУ  «Актюбинский многопрофильный  колледж»
                        </div>
                        <Link href={"/aqtobe/uka"}>
                            <a className="card-button">
                                Перейти
                            </a>
                        </Link>
                    </article>
                    <article className="card">
                        <div className="card-image">
                            <img src={aitekebiyskiyCollege.src} alt="ГККП «Айтекебииский многпрофильный колледж»"/>
                        </div>
                        <div className="card-title">
                            ГККП «Айтекебииский многпрофильный колледж»
                        </div>
                        <Link href={"/baiganinskiy/baiganin-college"}>
                            <a className="card-button">
                                Перейти
                            </a>
                        </Link>
                    </article>
                    <article className="card">
                        <div className="card-image">
                            <img src={algaCollege.src} alt="ГККП «Алгинский индустриально-технический колледж»"/>
                        </div>
                        <div className="card-title">
                            ГККП «Алгинский индустриально-технический колледж»
                        </div>
                        <Link href={"/alginskiy/alga-college"}>
                            <a className="card-button">
                                Перейти
                            </a>
                        </Link>
                    </article>
                    <article className="card">
                        <div className="card-image">
                            <img src={baiganinСollege.src} alt="КГУ «Байганинский технический колледж»"/>
                        </div>
                        <div className="card-title">
                            КГУ «Байганинский технический колледж»
                        </div>
                        <Link href={"/baiganinskiy/baiganin-college"}>
                            <a className="card-button">
                                Перейти
                            </a>
                        </Link>
                    </article>
                    <article className="card">
                        <div className="card-image">
                            <img src={hgtk.src} alt="ГККП «Хромтауский горно-технический высший колледж»"/>
                        </div>
                        <div className="card-title">
                            ГККП «Хромтауский горно-технический высший колледж»
                        </div>
                        <Link href={"/hromtauskiy/hromtau-hgtk"}>
                            <a className="card-button">
                                Перейти
                            </a>
                        </Link>
                    </article>
                    <article className="card">
                        <div className="card-image">
                            <img src={badamshaCollege.src} alt="КГУ «Бадамшинский агротехнический колледж»"/>
                        </div>
                        <div className="card-title">
                            КГУ «Бадамшинский агротехнический колледж»
                        </div>
                        <Link href={"/kargalinskiy/badamsha-college"}>
                            <a className="card-button">
                                Перейти
                            </a>
                        </Link>
                    </article>
                    <article className="card">
                        <div className="card-image">
                            <img src={kobda.src} alt="ГККП «Кобдинский многопрофильный колледж»"/>
                        </div>
                        <div className="card-title">
                            ГККП «Кобдинский многопрофильный колледж»
                        </div>
                        <Link href={"/kobdinkiy/kobda"}>
                            <a className="card-button">
                                Перейти
                            </a>
                        </Link>
                    </article>
                    <article className="card">
                        <div className="card-image">
                            <img src={ZhmkCollege.src} alt="КГУ «Жайсанский многопрофильный колледж»"/>
                        </div>
                        <div className="card-title">
                            КГУ «Жайсанский многопрофильный колледж»
                        </div>
                        <Link href={"/martukskiy/zhmk"}>
                            <a className="card-button">
                                Перейти
                            </a>
                        </Link>
                    </article>
                    <article className="card">
                        <div className="card-image">
                            <img src={kpek.src} alt="ГККП «Кандыагашский промышленно-экономический колледж»"/>
                        </div>
                        <div className="card-title">
                            ГККП «Кандыагашский промышленно-экономический колледж»
                        </div>
                        <Link href={"/mugalsharskiy/kpek"}>
                            <a className="card-button">
                                Перейти
                            </a>
                        </Link>
                    </article>
                    <article className="card">
                        <div className="card-image">
                            <img src={embin.src} alt="КГУ «Эмбинский колледж сферы услуг»"/>
                        </div>
                        <div className="card-title">
                            КГУ «Эмбинский колледж сферы услуг»
                        </div>
                        <Link href={"/mugalsharskiy/embin"}>
                            <a className="card-button">
                                Перейти
                            </a>
                        </Link>
                    </article>
                    <article className="card">
                        <div className="card-image">
                            <img src={ShalkarskiyCollege.src} alt="КГУ «Шалкарский аграрно-технический колледж»"/>
                        </div>
                        <div className="card-title">
                            КГУ «Шалкарский аграрно-технический колледж»
                        </div>
                        <Link href={"/shalkarskiy/shalkarcollege"}>
                            <a className="card-button">
                                Перейти
                            </a>
                        </Link>
                    </article>
                    <article className="card">
                        <div className="card-image">
                            <img src={uilskiyCollege.src} alt="ГККП «Уилский аграрный колледж»"/>
                        </div>
                        <div className="card-title">
                            ГККП «Уилский аграрный колледж»
                        </div>
                        <Link href={"/uilskiy/uilskiy"}>
                            <a className="card-button">
                                Перейти
                            </a>
                        </Link>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default All ;