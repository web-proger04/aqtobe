import React from 'react';
import Link from "next/link";
import hgtk from '../../public/img/colleges/hromtau-hgtk.png'

function Hromtauskiy(props) {
    return (
        <div>
            <div className="colleges">
                <h2>Выберите колледж</h2>
                <div className="cards">
                    <Link href={'/hromtauskiy/hromtau-hgtk'}>
                        <a className="card">
                            <img src={hgtk.src} alt=""/>
                            <div className="name">ГККП «Хромтауский горно- технический высший колледж»</div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hromtauskiy;