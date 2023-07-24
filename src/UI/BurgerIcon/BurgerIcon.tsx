import React from 'react';
import styles from './BurgerIcon.module.scss'

interface IBurger {
    onClick: (e: React.MouseEvent<HTMLInputElement>) => void
    isOpen: boolean
}

const BurgerIcon = ({onClick, isOpen}: IBurger) => {
    return (
        <button className={styles.block}>
            <label htmlFor="check">
                <input checked={isOpen}  onClick={(e) => {
                    onClick(e)
                }} type="checkbox" id="check"/>
                <span></span>
                <span></span>
                <span></span>
            </label>
        </button>
    );
};

export default BurgerIcon;
