import React from 'react';
import Link from "next/link";
import Image from "next/image";
import kpek from '../../public/kpek.png'
import styles from "../../styles/card.module.scss";

function Mugalsharskiy(props) {
    console.log(styles)
    return (
        <div>
            <Link href={'/mugalsharskiy/kpek'}>
                <a className={styles.card}>
                    <img src={kpek.src} alt=""/>
                    <div className={styles.name}>ГККП «Кандыагашский промышленно-экономический колледж»</div>
                </a>
            </Link>
            <div>КГУ «Эмбинский колледж сферы услуг»</div>
        </div>
    );
}

export default Mugalsharskiy;