import React, {useEffect, useState} from 'react';
import styles from './Container.module.scss'

const Container = ({children} : {children: React.ReactNode}) => {

    return (
        <div className={styles.containerBlock}>
            {children}
        </div>
    );
};

export default Container;
