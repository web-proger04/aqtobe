import React from 'react';
import Link from "next/link";
import ShalkarskiyCollege from '../../public/img/colleges/shalkar.png'

Shalkarskiy.title = "КГУ «Шалкарский аграрно-технический колледж»"
function Shalkarskiy(props) {
    return (
        <div>
            <div className="colleges">
                <h2 className="header-title">Шалкарский район</h2>
                <div className="cards">
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
                </div>
            </div>
        </div>
    );
}

export default Shalkarskiy;