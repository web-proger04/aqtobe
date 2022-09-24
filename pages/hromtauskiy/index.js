import React from 'react';
import Link from "next/link";
import hgtk from '../../public/img/colleges/hromtau-hgtk.png'

Hromtauskiy.title="Хромтауский район"
function Hromtauskiy(props) {
    return (
        <div>
            <div className="colleges">
                <h2 className="header-title">Хромтауский район</h2>
                <div className="cards">
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
                </div>
            </div>
        </div>
    );
}

export default Hromtauskiy;