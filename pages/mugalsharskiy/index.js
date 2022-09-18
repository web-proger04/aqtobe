import React from 'react';
import Link from "next/link";
import Image from "next/image";
import kpek from '../../public/img/colleges/kpek.png'

function Mugalsharskiy(props) {
    return (
        <div className="colleges">
            <h2>Выберите колледж</h2>
            <div className="cards">
                <Link href={'/mugalsharskiy/kpek'}>
                    <a className="card">
                        <img src={kpek.src} alt=""/>
                        <div className="name">ГККП «Кандыагашский промышленно-экономический колледж»</div>
                    </a>
                </Link>
                <Link href={'/mugalsharskiy/kpek'}>
                    <a className="card">
                        <img src={"https://redbook28.ru/wp-content/uploads/2021/09/net-foto.jpg"} alt=""/>
                        <div className="name">КГУ «Эмбинский колледж сферы услуг»</div>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Mugalsharskiy;