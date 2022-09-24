import React from 'react';
import baiganinСollege from "../../public/img/colleges/baiganin-college.png";
import Link from "next/link";


Baiganinskiy.title = "Байганинский район"
function Baiganinskiy(props) {
    return (
        <div>
            <div className="colleges">
                <h2 className="header-title">Байганинский район</h2>
                <div className="cards">
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
                </div>
            </div>
        </div>
    );
}

export default Baiganinskiy;