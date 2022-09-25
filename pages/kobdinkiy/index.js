import React from 'react';
import kobda from "../../public/img/colleges/kobda.png";
import Link from "next/link";


Kobdinkiy.title = "Кобдинский район"
function Kobdinkiy(props) {
    return (
        <div>
            <div className="colleges">
                <h2 className="header-title">Кобдинский район</h2>
                <div className="cards">
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
                </div>
            </div>
        </div>
    );
}

export default Kobdinkiy;