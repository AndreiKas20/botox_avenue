import React from 'react';
import styles from './BurgerIcon.module.scss'

const BurgerIcon = () => {
    return (
        <div className={styles.block}>
            <label htmlFor="check">
                <input type="checkbox" id="check"/>
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    );
};

export default BurgerIcon;
