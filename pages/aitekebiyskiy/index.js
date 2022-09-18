import React from 'react';
import Link from "next/link";

function Aitekebiyskiy(props) {
    return (
        <div className="colleges">
            <h2>Выберите колледж</h2>
            <div className="cards">
                <Link href={'/aitekebiyskiy/aiteke-mk1974'}>
                    <a className="card">
                        <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
                        <div className="name">ГККП «Айтекебийский многопрофильный колледж»</div>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Aitekebiyskiy;