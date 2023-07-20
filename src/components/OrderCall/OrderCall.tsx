import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {MuiTelInput} from 'mui-tel-input'
import styles from './OrderCall.module.scss'
import {createTheme, TextField, ThemeProvider} from "@mui/material";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import imgContact from '../../assets/img/img_contact _section.jpg'
import iconLogo from "../../assets/img/icons/logo_white.png";
import iconBack4 from "../../assets/img/icons/vector_serv.svg";
import axios from "axios";
import {useResize} from "../../hooks/useResize";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFF',
        },
        secondary: {
            main: '#eaa4a4',
        },
    },
});



const OrderCall = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [isCompliedPostOpen, setIsCompliedPostOpen] = useState(false)
    const [isWarningPostOpen, setIsWarningPostOpen] = useState(false)
    const [isImg, setIsImg] = useState(true)

    const handlePhoneChange = (value:string) => {
        if (value.replace(/ /g,'').length > 12) return
        setPhoneNumber(`${value}`)
    }

    const size = useResize()


    const postMessage = (phoneValue: string, nameValue: string) => {
        const  chatId  = '-1001940568576'
        const  token  = '6276538479:AAEPErYobMSKbLhDbCeZWsSReIkYcRXlUKw'
        const link = `https://api.telegram.org/bot${token}/sendMessage`
        const message = `Телефон:<b>${phoneValue}</b>. Имя: <b>${nameValue}</b>.`
        if (!chatId || !token) {
            return
        }
        axios
            .post(link, {
                chat_id: chatId,
                parse_mode: 'html',
                text: message,
            })
            .then(() => {setIsCompliedPostOpen(true)})
            .catch((error) => {setIsWarningPostOpen(true)})
    }

    useEffect(() => {
        if (size < 1250) {
            setIsImg(false)
        } else {
            setIsImg(true)
        }
    }, [size])

    return (
        <div id={'call'} className={styles.block}>
            <img alt={'icon'} className={styles.iconBackVector} src={iconBack4}/>
            <div className={styles.block__leftBlock}>
                <h2 className={styles.title}>Оставьте <span>ваш</span> номер телефона</h2>
                <span className={styles.subtitle}>Наш специалист перезвонит вам и ответит на все ваши вопросы</span>
                <ThemeProvider theme={theme}>
                    <Box
                        className={styles.block__leftBlock__form}
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <MuiTelInput label={'Ваш номер телефона'} color={'secondary'} className={styles.inputForm} defaultCountry={'RU'} value={phoneNumber} onChange={handlePhoneChange} />
                        <TextField onChange={(name) => setNameValue(name.target.value)} color={'secondary'} className={styles.inputForm} id="outlined-basic" label="Ваше имя" variant="outlined" />
                        <Button onClick={() => postMessage(phoneNumber, nameValue)} className={styles.btn} variant="contained">Записаться</Button>
                        <Collapse className={styles.message} in={isCompliedPostOpen}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setIsCompliedPostOpen(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                Вы успешно оставили номер! В ближайшее время вам перезвонит наш специалист.
                            </Alert>
                        </Collapse>
                        <Collapse className={styles.message} in={isWarningPostOpen}>
                            <Alert
                                variant="outlined" severity="warning"
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setIsWarningPostOpen(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                Произошла ошибка! Заявка не была доставлена по техническим причинам.
                            </Alert>
                        </Collapse>
                    </Box>
                </ThemeProvider>
            </div>
            {
                isImg &&
                <div className={styles.block__rightBlock}>
                    <img className={styles.iconLogo} src={iconLogo} alt={'icon logo'}/>
                    <img className={styles.block__rightBlock__fon} src={imgContact} alt={'фото'}/>
                </div>
            }
        </div>
    );
};

export default OrderCall;
