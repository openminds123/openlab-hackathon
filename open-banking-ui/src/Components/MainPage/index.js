import React, { Children } from  'react';
import styles from './mainpage.module.css';

export const MainPage =({
    children,
    headerSlot,
    footerSlot,
})=>(
    <div className={styles.page}>
        <div className={styles.wrapper}>
            {headerSlot}
            <main className={styles.main}>
                {children}
            </main>
            {footerSlot}
        </div>
    </div>
);

export default MainPage;