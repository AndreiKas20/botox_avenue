import React, {useState} from 'react';
import styles from './MoreServices.module.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import botox from '../../assets/img/botox_img.jpg';

const MoreServices = () => {
    const [isOpenAccordionBotox, setIsOpenAccordionBotox] = useState(false)
    const handleAccordionChange = (event:  React.SyntheticEvent, exp: boolean) => {
        console.log(event,exp)
        setIsOpenAccordionBotox(exp)
    }
    return (
        <div className={styles.block}>
            <div className={styles.serviceSection}>
                <div className={styles.blockImg}><img className={styles.imgBotox} src={botox} alt={'фото результата'}/></div>
                <div className={styles.blockServ}>
                    <h3 className={styles.subtitle}>Ботокс</h3>
                    <ul className={styles.listServ}>
                        <li className={styles.listServ__item}>Подойдет осветленным волосам</li>
                        <li className={styles.listServ__item}>Устранение пушистости</li>
                        <li className={styles.listServ__item}>Невероятный блеск, гладкость, мягкость, легкое расчесывание, объем у корней</li>
                    </ul>
                    <p className={styles.advText}>Срок эффекта от 3 до 4 месяцев</p>
                    <Accordion
                        onChange={(e, exp) => handleAccordionChange(e, exp)}
                        className={styles.accordion}>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={styles.blockAcc}
                        >
                            <Typography className={styles.btnAccordion}>{!isOpenAccordionBotox? 'Узнать цену и подробности' : 'Скрыть подробности'}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>

                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default MoreServices;
