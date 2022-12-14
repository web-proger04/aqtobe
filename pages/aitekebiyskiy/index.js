import React from 'react';
import Link from "next/link";
import aitekebiyskiyCollege from "../../public/img/colleges/AitekeMk1974.png";


Aitekebiyskiy.title = "ГККП «Айтекебииский многпрофильный колледж»"
function Aitekebiyskiy(props) {
    return (
        <div>
            <div className="colleges">
                <h2 className="header-title">Айтекебииский район</h2>
                <div className="cards">
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
                </div>
            </div>
        </div>
    );
}

export default Aitekebiyskiy;