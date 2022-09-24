import React from 'react';
import college from "../../public/img/colleges/kobda.png";
import director from "../../public/img/directors/kobda.png";
import ZhmkCollege from "../../public/img/colleges/zhmk.png";
import Link from "next/link";


Martukskiy.title = "Мартукский район"
function Martukskiy(props) {
    return (
        <div>
            <div className="colleges">
                <h2 className="header-title">Мартукский район</h2>
                <div className="cards">
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
                </div>
            </div>
        </div>
    );
}

export default Martukskiy;