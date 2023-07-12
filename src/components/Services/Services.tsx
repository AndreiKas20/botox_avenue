import React from 'react';
import styles from './Services.module.scss'
import botox from '../../assets/img/icons/cream-svgrepo-com.svg'
import plastic from '../../assets/img/icons/hair-pin-svgrepo-com.svg'
import ceratin from '../../assets/img/icons/hair-cream-cream-svgrepo-com.svg'
import sos from '../../assets/img/icons/girl-svgrepo-com.svg'
import oilCream from '../../assets/img/icons/soap-svgrepo-com.svg'
import nano from '../../assets/img/icons/hair-salon-spray-bottle-svgrepo-com.svg'
import piling from '../../assets/img/icons/hair-wig-long-and-black-shape-svgrepo-com.svg'
import scissors from '../../assets/img/icons/scissors-svgrepo-com.svg'
import line from '../../assets/img/icons/Line.svg'
import photoServ from '../../assets/img/photo_services.jpg'
import SignUpBtn from "../../UI/SignUpBtn/SignUpBtn";


const Services = () => {
    return (
        <div className={styles.container}>
            <div className={styles.photoBlock}> <img className={styles.photo} src={photoServ} alt={'Фото'}/> </div>
            <div className={styles.block}>
                <h2 className={styles.title}>НАШИ <span>УСЛУГИ</span> </h2>
                <ul className={styles.listServices}>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={botox}/> <span>Ботокс</span> </li>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={plastic}/> <span>Пластика</span></li>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={ceratin}/> <span>Кератин</span></li>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={sos}/> <span>SOS-Уход</span></li>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={oilCream}/> <span>Масляный уход</span></li>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={nano}/> <span>Нанопластика</span></li>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={piling}/> <span>Пилинг для кожи головы</span></li>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={scissors}/> <span>Уход за кончиками</span></li>
                </ul>
                <SignUpBtn color={'pink'}/>
            </div>
            <img className={styles.iconLine} alt={'icon'} src={line}/>
        </div>
    );
};

export default Services;
