import React from 'react';
import Link from "next/link";

function Alginskiy(props) {
    return (
        <div>
            <div className="colleges">
                <h2>Выберите колледж</h2>
                <div className="cards">
                    <Link href={'/alginskiy/alga-college'}>
                        <a className="card">
                            <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
                            <div className="name">ГККП «Алгинский индустриально- технический колледж»</div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Alginskiy;