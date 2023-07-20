import React from 'react';
import styles from "./SignUpBtn.module.scss";

const SignUpBtn = ({color} : {color: 'pink' | 'white'}) => {
    return (
        <a href={'#call'} className={`${styles.btn} ${color === 'white' ? styles.btn__white : styles.btn__pink }`}>
            <svg width="147" height="145" viewBox="0 0 147 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M140.753 19.7846C116.677 -14.8252 24.8861 3.23236 6.82867 43.861C-11.2287 84.4896 15.857 118.568 60.9999 119.099C106.143 119.63 164.829 54.3944 140.753 19.7846Z"
                    stroke="white"/>
                <path opacity="0.2"
                      d="M17.698 117.52C51.9742 147.744 133.068 122.724 137.449 73.9285C141.831 25.1331 109.056 -8.70113 57.0518 4.20041C5.04805 17.102 -16.5782 87.2963 17.698 117.52Z"
                      stroke="white"/>
            </svg>
            <span className={`${styles.btn__textBlock} ${color === 'white' ? styles.btn__textBlock__white : styles.btn__textBlock__pink }`}>
                <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M21.3536 3.64645C21.5488 3.84171 21.5488 4.15829 21.3536 4.35355L18.1716 7.53553C17.9763 7.7308 17.6597 7.7308 17.4645 7.53553C17.2692 7.34027 17.2692 7.02369 17.4645 6.82843L20.2929 4L17.4645 1.17157C17.2692 0.976311 17.2692 0.659728 17.4645 0.464466C17.6597 0.269204 17.9763 0.269204 18.1716 0.464466L21.3536 3.64645ZM0 3.5L21 3.5V4.5L0 4.5L0 3.5Z"
                    fill="white"/>
                </svg>
            ЗАПИСАТЬСЯ
            </span>
        </a>
    );
};

export default SignUpBtn;
