import React from 'react';
import Link from "next/link";
import uilskiyCollege from '../../public/img/colleges/agrarka-uil.png'

uilskiy.title = "Уилский район"
function uilskiy(props) {
    return (
        <div>
            <div className="colleges">
                <h2 className="header-title">Уилский район</h2>
                <div className="cards">
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

export default uilskiy;