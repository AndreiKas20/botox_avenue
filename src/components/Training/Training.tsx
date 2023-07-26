import React from 'react';
import styles from './Training.module.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CertifyIcon from '@mui/icons-material/SchoolOutlined';
import NoBrendIcon from '@mui/icons-material/CancelPresentationOutlined';
import PracticIcon from '@mui/icons-material/BackHandOutlined';
import TeoryIcon from '@mui/icons-material/AccessTimeOutlined';
import MetodIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ModelIcon from '@mui/icons-material/Diversity1Outlined';
import imgTeach from '../../assets/img/teach.webp'
import ellipse from '../../assets/img/icons/elipse_teach.svg'
import iconLogo from '../../assets/img/icons/logo_white.png'
import backPrice from '../../assets/img/icons/back_price.svg'
import linePrice from '../../assets/img/icons/line_price.svg'

const Training = () => {
    return (
        <div id={'training'} className={styles.block}>
            <div className={styles.priceBlock}>
                <span>20000 &#8381;</span>
                <img className={styles.priceBlock__imgBack} alt={'icon'} src={backPrice}/>
                <img className={styles.priceBlock__imgLine} alt={'icon'} src={linePrice}/>
            </div>
            <div className={styles.leftSide}>
                <h2 className={styles.leftSide__title}>Обучение: <span className={styles.leftSide__subtitle}>Мастер шикарных волос с 0</span>
                </h2>

                <ul className={styles.list}>
                    <li className={styles.list__item}><NoBrendIcon color={"warning"}/> Без привязки к бренду</li>
                    <li className={styles.list__item}><TeoryIcon color={"warning"}/> Теория 5 часов</li>
                    <li className={styles.list__item}><PracticIcon color={"warning"}/> Практика 5-10 часов</li>
                    <li className={styles.list__item}><CertifyIcon color={"warning"}/> 3 сертификата</li>
                    <li className={styles.list__item}><MetodIcon color={"warning"}/> Методичка (рабочая тетрадь)</li>
                    <li className={styles.list__item}><ModelIcon color={"warning"}/> Модели для процедур</li>
                </ul>
                <div className={styles.blockAcc}>
                    <div className={styles.blockAcc__leftAcc}>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={styles.textBlockAcc}>Направления</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul className={styles.accList}>
                                    <li className={styles.accList__item}>
                                        <span>
                                            Холодное восстановление
                                        </span>
                                    </li>
                                    <li className={styles.accList__item}>
                                        <span>
                                           Разбор подложек
                                        </span>
                                    </li>
                                    <li className={styles.accList__item}>
                                        <span>Ботокс волос</span>
                                    </li>
                                    <li className={styles.accList__item}>
                                        <span>Кератиновое выпрямление</span>
                                    </li>
                                    <li className={styles.accList__item}>
                                        <span>Пилинг кожи головы + SPA уход</span>
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className={styles.blockAcc__leftAcc}>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={styles.textBlockAcc}>Теория и практика</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul className={styles.accList}>
                                    <li className={styles.accList__item}>
                                        <span> Все о волосе (структура, виды диагностики, степени повреждений)</span>
                                    </li>
                                    <li className={styles.accList__item}>
                                        <span>Химические процессы в волосе</span>
                                    </li>
                                    <li className={styles.accList__item}>
                                        <span>Работа с разными текстурами и технологиями</span>
                                    </li>
                                    <li className={styles.accList__item}>
                                        <span>Отработка полученных навыков на моделях</span>
                                    </li>
                                    <li className={styles.accList__item}>
                                        <span>Обучение общению с клиентами</span>
                                    </li>
                                    <li className={styles.accList__item}>
                                        <span>Методичка составов</span>
                                    </li>
                                    <li className={styles.accList__item}>
                                        <span>Онлайн консультация</span>
                                    </li>
                                    <li className={styles.accList__item}>
                                        <span>Ведение соц.сетей</span>
                                    </li>
                                    <li className={styles.accList__item}>
                                        <span>Инструменты и стартовый капитал</span>
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.imgBlock}>
                    <img className={styles.imgBlock__elps} alt={'icon'} src={ellipse}/>
                    <img className={styles.imgBlock__iconLogo} src={iconLogo} alt={'icon logo'}/>
                    <img alt={'обучение'} src={imgTeach}/>
                </div>
            </div>
        </div>
    );
};

export default Training;
