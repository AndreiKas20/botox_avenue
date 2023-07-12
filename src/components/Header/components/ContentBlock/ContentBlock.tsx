import React from 'react';
import styles from './ContentBlock.module.scss'
import SignUpBtn from "../../../../UI/SignUpBtn/SignUpBtn";

const ContentBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blockLeft}>
                <h1 className={styles.title}>Кератиновое выпрямление<br/> ботокс<br/> нанопластика<br/> холодное восстановление</h1>
                <span className={styles.slogan}>От нас вы получите гарантию идеального результата от процедуры и погрузитесь в атмосферу заботы и расслабления.</span>
                <div className={styles.btnBlock}>
                    <SignUpBtn color={'white'} />
                </div>
            </div>
            <div className={styles.blockRight}>
                <span className={styles.backImg}/>
            </div>
        </div>
    );
};

export default ContentBlock;
