import React from 'react';
import Link from "next/link";
import Image from "next/image";
import kpek from '../../public/img/colleges/kpek.png'
import ahpc from "../../public/img/colleges/ahpc.png";

function Mugalsharskiy(props) {
    return (
        <div className="colleges">
            <h2 className="header-title">Выберите колледж</h2>
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
            </div>
        </div>
    );
}

export default Mugalsharskiy;