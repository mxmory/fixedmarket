import React, { useEffect, useState } from 'react';
import { CrossIcon, FGKIcon, LogoIcon, TelegramIcon } from '../../Icons';
import './Footer.scss';
import { CircleTelegramIcon } from '../../Icons/index';

export const Footer = () => {
    const [str, setStr] = useState('@#?*#');

    useEffect(() => {
        const interval = setInterval(() => {
            setStr(
                str
                    .split('')
                    .sort(() => Math.random() - 0.5)
                    .join('')
            );
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="footer">
            <div className="footer__section">
                <div className="footer__logo">
                    <a href="/#">
                        <LogoIcon />
                    </a>
                    <CrossIcon />
                    <a href="/#">
                        <FGKIcon />
                    </a>
                </div>
            </div>
            <div className="footer__section center">
                <div className="gray">
                    Для {str}го фикседгира с Урала и из Казани с любовью{' '}
                    <span role="img" aria-label="heart">
                        ❤️
                    </span>
                </div>
                <div>
                    <a href="/#">Спонсоры</a> / <a href="/#">Поддержать</a>
                </div>
            </div>
            <div className="footer__section">
                <CircleTelegramIcon /> @fixedmarketbot
            </div>
        </div>
    );
};
