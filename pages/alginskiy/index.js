import React from 'react';
import Link from "next/link";
import algaCollege from "../../public/img/colleges/alga-college.png"

Alginskiy.title="Алгинский район"
function Alginskiy(props) {
    return (
        <div className="colleges">
            <h2 className="header-title">Алгинский район</h2>
            <div className="cards">
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
            </div>
        </div>
    );
}

export default Alginskiy;