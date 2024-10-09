import React from 'react';
import InfoBlock from "./components/InfoBlock/InfoBlock";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import styles from './Header.module.scss'
import ReactPlayer from "react-player";

const Header = () => {
    return (
        <header className={styles.block}>
            <InfoBlock/>
            <ContentBlock/>
        </header>
    );
};

export default Header;
