import React from 'react';
import styles from '../styles/navbar.module.scss'
import Link from "next/link";


function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}><Link href={"/"}>ТиПо Актюбинской области</Link></div>

                <div className={styles.navigation}>
                    <Link href={"/"}>Главная</Link>
                    <Link href={"/all"}>Все колледжи</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;