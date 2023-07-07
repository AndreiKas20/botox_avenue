import React from 'react';
import styles from './ContentBlock.module.scss'
import SignUpBtn from "../../../../UI/SignUpBtn/SignUpBtn";

const ContentBlock = () => {
    return (
        <div className={styles.block}>
            <h1 className={styles.title}>Что-то с волосами длинной шесть слов</h1>
            <span className={styles.slogan}>Мини слоган</span>
            <div className={styles.btnBlock}>
                <SignUpBtn color={'white'} />
            </div>
        </div>
    );
};

export default ContentBlock;
