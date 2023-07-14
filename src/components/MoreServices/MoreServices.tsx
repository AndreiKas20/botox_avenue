import React, {useEffect, useState} from 'react';
import styles from './MoreServices.module.scss'
import botox from '../../assets/img/botox_img.jpg';
import img2 from '../../assets/img/serv_img2.jpg'
import img3 from '../../assets/img/serv_img3.jpg'
import img4 from '../../assets/img/serv_img4.jpg'
import iconBack1 from '../../assets/img/icons/line_serv1.svg'
import iconBack2 from '../../assets/img/icons/line_serv2.svg'
import iconBack3 from '../../assets/img/icons/els_serv.svg'
import iconBack4 from '../../assets/img/icons/vector_serv.svg'
import iconLogo from '../../assets/img/icons/logo_white.png'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {listArr} from "../Services/listArrays";
import SignUpBtn from "../../UI/SignUpBtn/SignUpBtn";

export type itemPrice = {longHair: number, price: number}
export type priceArr = itemPrice[]
type itemService = {value: string, title: string}

const MoreServices = () => {
    const [open, setOpen] = useState(false);
    const [valueLongHair, setValueLongHair] = useState('')
    const [nameService, setNameService] = useState<itemService>({value: '', title: ''})
    const [isIvanJoin, setIsIvanJoin] = useState(false)
    const [master, setMaster] = useState<'kristina' | 'ivan'>('kristina')
    const [isHairEnd, setIsHairEnd] = useState(false)
    const [isPolishingHair, setIsPolishingHair] = useState(false)
    const [isCloseHairEnd, setIsCloseHairEnd] = useState(false)
    const [isCoolHair, setIsCoolHair] = useState(false)
    const [isSecondCheck, setIsSecondCheck] = useState(false)
    const [isFirstCheck, setIsFirstCheck] = useState(false)
    const [finalPrice, setFinalPrice] = useState(0)
    const [isOpenPrice, setIsOpenPrice] = useState(false)

    const handleClickOpen = (nameService: itemService, isIvanJoin: boolean) => {
        setIsIvanJoin(isIvanJoin)
        setOpen(true);
        setNameService(nameService)
    };

    const handleClose = () => {
        setIsOpenPrice(false)
        setValueLongHair('')
        setOpen(false);
        setIsHairEnd(false)
    };

    const handleChangeHairSelect = (ev: SelectChangeEvent) => {
        setValueLongHair(ev.target.value)
    }

    const handleChangeMaster = (event: React.MouseEvent<HTMLElement>, newAlignment: 'kristina' | 'ivan' | null) => {
        newAlignment && setMaster(newAlignment)
    }

    const handleGetPrice = () => {
        if (nameService.value !== 'piling' && nameService.value !== 'hair_end') {
            const arrPrice = listArr.filter(value => value.item === nameService.value)[0].arr
            const itemPrice = arrPrice.filter(value => value.longHair === Number(valueLongHair))[0].price
            const masterGap = master === 'kristina' ? nameService.value !== 'sos' && nameService.value !== 'nanoplast' ? 1000 : 0 : 0
            const firstCheckGap = isFirstCheck ? 1000 : 0
            const secondCheckGap = isSecondCheck ? 1000 : 0
            const finalPrice = itemPrice + masterGap + firstCheckGap + secondCheckGap
            setFinalPrice(finalPrice)
        } else if (nameService.value === 'piling') {
            const masterGap = master === 'kristina' ? 500 : 0
            const finalPrice = 2000 + masterGap
            setFinalPrice(finalPrice)
        } else {
            const endCheck = isCloseHairEnd ? 1500 : 0
            const coolerCheck = isCoolHair ? 2000 : 0
            const finalPrice = 1500 + endCheck + coolerCheck
            setFinalPrice(finalPrice)
        }
        setIsOpenPrice(true)
    }
    useEffect(() => {
        console.log('final price', finalPrice, nameService)
    }, [finalPrice, nameService])
    return (
        <div className={styles.block}>
            <img alt={'icon'} className={styles.iconBackLine} src={iconBack1}/>
            <img alt={'icon'} className={styles.iconBackLine2} src={iconBack2}/>
            <img alt={'icon'} className={styles.iconBackEl} src={iconBack3}/>
            <img alt={'icon'} className={styles.iconBackVector} src={iconBack4}/>
            <div className={styles.serviceSection}>
                <div className={styles.leftSide}>
                    <div className={styles.blockImg}>
                        <img className={styles.imgBotox} src={botox} alt={'фото результата'}/>
                        <img className={styles.iconLogo} src={iconLogo} alt={'icon logo'}/>
                    </div>
                    <ul className={styles.listServices}>
                        <li className={styles.blockServ}>
                            <h3 className={styles.subtitle}>Кератин</h3>
                            <ul className={styles.listServ}>
                                <li className={styles.listServ__item}>Выпрямление любого завитка</li>
                                <li className={styles.listServ__item}>Устранение пушистости и пористости</li>
                                <li className={styles.listServ__item}>Невероятный блеск, гладкость, мягкость, легкое
                                    расчесывание
                                </li>
                            </ul>
                            <p className={styles.advText}>Срок эффекта <span>от 3 до 6 месяцев</span></p>
                            <button onClick={() => {
                                handleClickOpen({value: 'keratin', title: 'Кератин'}, true)
                            }} className={styles.btnAccordion}>Узнать цену
                            </button>
                        </li>
                        <li className={styles.blockServ}>
                            <h3 className={styles.subtitle}>SOS-уход</h3>
                            <ul className={styles.listServ}>
                                <li className={styles.listServ__item}>Подойдет осветленным и сухим волосам</li>
                                <li className={styles.listServ__item}>Восстанавливает водный и липидный слой волоса на
                                    молекулярном уровне
                                </li>
                                <li className={styles.listServ__item}>В зависимости от исходного состояния волос
                                    подбирается необходимый курс
                                </li>
                            </ul>
                            <p className={styles.advText}>Срок эффекта <span>до месяца</span></p>
                            <button onClick={() => {
                                handleClickOpen({value: 'sos', title: 'SOS-Уход'}, false)
                            }} className={styles.btnAccordion}>Узнать цену
                            </button>
                        </li>
                        <li className={styles.blockImg}>
                            <img className={styles.imgBotox} src={img3} alt={'фото результата'}/>
                            <img className={styles.iconLogo} src={iconLogo} alt={'icon logo'}/>
                        </li>
                        <li className={styles.blockServ}>
                            <h3 className={styles.subtitle}>Пилинг кожи головы</h3>
                            <ul className={styles.listServ}>
                                <li className={styles.listServ__item}>Подходит для тех кто часто моет голову</li>
                                <li className={styles.listServ__item}>Осмотр кожи головы трихоскопом</li>
                                <li className={styles.listServ__item}>Очистка кожи головы от хлора, перхоти и других
                                    примесей
                                </li>
                                <li className={styles.listServ__item}>Улучшенный рост волос</li>
                                <li className={styles.listServ__item}>Уменьшает жирность кожи головы</li>
                            </ul>
                            <p className={styles.advText}>Курс <span>3 - 7 процедур</span> в зависимости от состояния
                                кожи </p>
                            <button onClick={() => {
                                handleClickOpen({value: 'piling', title: 'Пилинг кожи головы'}, true)
                            }} className={styles.btnAccordion}>Узнать цену
                            </button>
                        </li>
                        <li className={styles.blockServ}>
                            <h3 className={styles.subtitle}>Уход за кончиками</h3>
                            <ul className={styles.listServ}>
                                <li className={styles.listServ__item}>Подойдет осветленным и сухим волосам</li>
                                <li className={styles.listServ__item}>Натуральным и поврежденным</li>
                                <li className={styles.listServ__item}>В зависимости от исходного состояния волос
                                    подбирается необходимый курс
                                </li>
                            </ul>
                            <p className={styles.advText}>Срок эффекта <span>до 4 месяцев</span></p>
                            <button onClick={() => {
                                handleClickOpen({value: 'hair_end', title: 'Уход за кончиками'}, false)
                                setIsHairEnd(true)
                            }} className={styles.btnAccordion}>Узнать цену
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={styles.rightSide}>
                    <ul className={styles.listServices}>
                        <li className={styles.blockServ}>
                            <h3 className={styles.subtitle}>Ботокс</h3>
                            <ul className={styles.listServ}>
                                <li className={styles.listServ__item}>Подойдет осветленным волосам</li>
                                <li className={styles.listServ__item}>Устранение пушистости</li>
                                <li className={styles.listServ__item}>Невероятный блеск, гладкость, мягкость, легкое
                                    расчесывание, объем у корней
                                </li>
                            </ul>
                            <p className={styles.advText}>Срок эффекта <span>от 3 до 4 месяцев</span></p>
                            <button onClick={() => {
                                handleClickOpen({value: 'botox', title: 'Ботокс'}, true)
                            }} className={styles.btnAccordion}>Узнать цену
                            </button>
                        </li>
                        <li className={styles.blockServ}>
                            <h3 className={styles.subtitle}>Пластика</h3>
                            <ul className={styles.listServ}>
                                <li className={styles.listServ__item}>Выпрямление легкой волны</li>
                                <li className={styles.listServ__item}>Устранение пушистости</li>
                                <li className={styles.listServ__item}>Невероятный блеск, гладкость, мягкость, легкое
                                    расчесывание, объем у корней
                                </li>
                            </ul>
                            <p className={styles.advText}>Срок эффекта <span>от 3 до 5 месяцев</span></p>
                            <button onClick={() => {
                                handleClickOpen({value: 'plastic', title: 'Пластика'}, true)
                            }} className={styles.btnAccordion}>Узнать цену
                            </button>
                        </li>
                        <div className={styles.blockImgRightSide}><img className={styles.imgBotox} src={img2}
                                                                       alt={'фото результата'}/>
                        </div>
                        <li className={styles.blockServ}>
                            <h3 className={styles.subtitle}>Масляный уход</h3>
                            <ul className={styles.listServ}>
                                <li className={styles.listServ__item}>Процедура обогащенная лечебными маслами и
                                    кератином дает удивительный эффект для восстановления самых испорченных волос, в том
                                    числе волос сильно поврежденных химическими процедурами
                                </li>
                                <li className={styles.listServ__item}>Шикарный блеск мягкость, разглаживает волну</li>
                                <li className={styles.listServ__item}>Глубоко восполняет питательные вещества.
                                    Аминокислоты и Кератин
                                </li>
                            </ul>
                            <p className={styles.advText}>Срок эффекта <span>от 5 до 7 месяцев</span></p>
                            <button onClick={() => {
                                handleClickOpen({value: 'oil', title: 'Масляный уход'}, true)
                            }} className={styles.btnAccordion}>Узнать цену
                            </button>
                        </li>
                        <li className={styles.blockServ}>
                            <h3 className={styles.subtitle}>Нанопластика</h3>
                            <ul className={styles.listServ}>
                                <li className={styles.listServ__item}>Выпрямление тугого завитка. Кудри в све прежнее
                                    состояние не возвращаются
                                </li>
                                <li className={styles.listServ__item}>Повторное выполнение осуществляется только на
                                    отросшую часть. На остальную длину выполняется любая горячая процедура
                                </li>
                                <li className={styles.listServ__item}>Невероятный блеск, гладкость, мягкость, легкое
                                    расчесывание, объем у корней
                                </li>
                            </ul>
                            <p className={styles.advText}>Срок эффекта <span>от 6 до 12 месяцев</span></p>
                            <button onClick={() => {
                                handleClickOpen({value: 'nanoplast', title: 'Нанопластика'}, false)
                            }} className={styles.btnAccordion}>Узнать цену
                            </button>
                        </li>
                        <div className={styles.blockImgRightSide}><img className={styles.imgBotox} src={img4}
                                                                       alt={'фото результата'}/>
                        </div>
                    </ul>
                </div>
            </div>
            <Dialog className={styles.modal} open={open} onClose={handleClose}>
                <DialogTitle className={styles.modal__modalTitle}>Калькулятор цены для
                    процедуры <span>{nameService.title}</span> </DialogTitle>
                <DialogContent>
                    <DialogContentText className={styles.modal__modalSubtitle}>
                        Выберете параметры для того что бы узнать цену
                    </DialogContentText>
                    {
                        !isHairEnd && nameService.value !== 'piling' &&
                        <>
                            <FormControl className={styles.modal__input} sx={{outlineColor: 'salmon'}} fullWidth>
                                <InputLabel id="demo-simple-select-label" className={styles.modal__selectTitle}>Длина ваших
                                    волос</InputLabel>
                                <Select

                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={valueLongHair}
                                    label="Длина ваших волос"
                                    onChange={handleChangeHairSelect}
                                >
                                    <MenuItem value={30}>менее 35 см</MenuItem>
                                    <MenuItem value={35}>35 - 40 см</MenuItem>
                                    <MenuItem value={40}>40 - 45 см</MenuItem>
                                    <MenuItem value={45}>45 - 50 см</MenuItem>
                                    <MenuItem value={50}>50 - 55 см</MenuItem>
                                    <MenuItem value={55}>55 - 60 см</MenuItem>
                                    <MenuItem value={60}>60 см</MenuItem>
                                </Select>
                            </FormControl>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox onChange={(event, checked) => {setIsFirstCheck(checked)}} sx={{
                                    color: '#eaa4a4',
                                    '&.Mui-checked': {
                                        color: '#eaa4a4',
                                    },
                                }}/>} label="У вас нарощенные волосы?"/>
                                <FormControlLabel control={<Checkbox onChange={(event, checked) => {setIsSecondCheck(checked)}} sx={{
                                    color: '#eaa4a4',
                                    '&.Mui-checked': {
                                        color: '#eaa4a4',
                                    },
                                }}/>} label="У вас густые волосы?"/>
                            </FormGroup>
                        </>
                    }
                    {
                        isHairEnd &&
                        <div>
                            <FormControlLabel control={<Checkbox onChange={(event, checked) => {setIsPolishingHair(checked)}} sx={{
                                color: '#eaa4a4',
                                '&.Mui-checked': {
                                    color: '#eaa4a4',
                                },
                            }}/>} label="Полировка волос"/>
                            <FormControlLabel control={<Checkbox disabled={!isPolishingHair} onChange={(event, checked) =>{setIsCloseHairEnd(checked)}} sx={{
                                color: '#eaa4a4',
                                '&.Mui-checked': {
                                    color: '#eaa4a4',
                                },
                            }}/>} label="+ Запечатывание кончиков"/>
                            <FormControlLabel control={<Checkbox disabled={!isCloseHairEnd} onChange={(event, checked) => {setIsCoolHair(checked)}} sx={{
                                color: '#eaa4a4',
                                '&.Mui-checked': {
                                    color: '#eaa4a4',
                                },
                            }}/>} label="+ Глубокое кондиционирование"/>
                        </div>
                    }
                    {
                        isIvanJoin &&
                        <ToggleButtonGroup
                            color="primary"
                            value={master}
                            exclusive
                            onChange={handleChangeMaster}
                            aria-label="Platform"
                            fullWidth
                        >
                            <ToggleButton value="kristina">Топ-мастер Кристина</ToggleButton>
                            <ToggleButton value="ivan">Мастер Иван</ToggleButton>
                        </ToggleButtonGroup>
                    }
                    {
                        !isIvanJoin &&
                        <span>*Данную процедуру выполняет только топ-мастер Кристина</span>
                    }
                    {
                        isOpenPrice &&
                        <div className={styles.modal__blockPrice}>
                            <span className={styles.modal__price}>{finalPrice}</span>
                            <span className={styles.modal__advText}>*окончательная цена может отличаться как в большую так и в меньшую сторону</span>
                        </div>
                    }
                </DialogContent>
                <DialogActions>
                    {
                        isOpenPrice && <Button className={styles.modal__btn} onClick={handleClose}>Записаться</Button>
                    }
                    <Button className={styles.modal__btn} onClick={handleClose}>Закрыть</Button>
                    <Button className={styles.modal__btn} disabled={valueLongHair === '' && !isPolishingHair} onClick={handleGetPrice}>Узнать цену</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default MoreServices;
