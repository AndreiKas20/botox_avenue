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
import photoServ from '../../assets/img/photo_services.webp'
import SignUpBtn from "../../UI/SignUpBtn/SignUpBtn";


const Services = () => {
    return (
        <div className={styles.container}>
            <div className={styles.photoBlock}> <img className={styles.photo} src={photoServ} alt={'Фото'}/> </div>
            <div className={styles.block}>
                <h2 id={'serv'} className={styles.title}>НАШИ <span>УСЛУГИ</span></h2>
                <ul className={styles.listServices}>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={botox}/> <a href={'#botox'}>Ботокс</a> </li>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={plastic}/> <a href={'#plastic'}>Пластика</a></li>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={ceratin}/> <a href={'#ceratin'}>Кератин</a></li>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={sos}/> <a href={'#sos'}>SOS-Уход</a></li>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={oilCream}/> <a href={'#oil'}>Масляный уход</a></li>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={nano}/> <a href={'#nanoplast'}>Нанопластика</a></li>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={piling}/> <a href={'#piling'}>Пилинг для кожи головы</a></li>
                    <li className={styles.listServices__item}><img className={styles.icon} alt={'icon'} src={scissors}/> <a href={'#hair'}>Уход за кончиками</a></li>
                </ul>
                <SignUpBtn color={'pink'}/>
            </div>
            <img className={styles.iconLine} alt={'icon'} src={line}/>
        </div>
    );
};

export default Services;
