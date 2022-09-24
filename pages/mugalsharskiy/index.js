import React from 'react';
import Link from "next/link";
import Image from "next/image";
import kpek from '../../public/img/colleges/kpek.png'
import ahpc from "../../public/img/colleges/ahpc.png";
import embin from "../../public/img/colleges/embin.png"

Mugalsharskiy.title="Мугалжарский район"
function Mugalsharskiy(props) {
    return (
        <div className="colleges">
            <h2 className="header-title">Мугалжарский район</h2>
            <div className="cards">
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
            </div>
        </div>
    );
}

export default Mugalsharskiy;