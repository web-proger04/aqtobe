import React from 'react';
import badamshaCollege from '../../public/img/colleges/badamsha-college.png'
import Link from "next/link";


Kargalinskiy.title = "Каргалинский район"
function Kargalinskiy(props) {
    return (
        <div>
            <div className="colleges">
                <h2 className="header-title">Каргалинский район</h2>
                <div className="cards">
                    <article className="card">
                        <div className="card-image">
                            <img src={badamshaCollege.src} alt="КГУ «Бадамшинский агротехнический колледж»"/>
                        </div>
                        <div className="card-title">
                            КГУ «Бадамшинский агротехнический колледж»
                        </div>
                        <Link href={"/kargalinskiy/badamsha-college"}>
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

export default Kargalinskiy;