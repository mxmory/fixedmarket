import React from 'react';
import './Header.scss';
import { LogoIcon, PinIcon, SearchIcon, TelegramIcon } from '../../Icons/index';
import { Input, Button, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../actions';

const { Search } = Input;

export const Header = () => {
    const dispatch = useDispatch();
    return (
        <div className="header">
            <div className="header__section">
                <div className="header__logo">
                    <LogoIcon />
                </div>
                <div className="header__location">
                    <PinIcon />
                    Казань
                </div>
            </div>
            <div className="header__section">
                <div className="category">
                    <div className="category__name">Велосипед</div>
                    <div className="category__menu wrapper">
                        <Row gutter={[15, 15]}>
                            <Col span={6}>Влосипед</Col>
                            <Col span={6}>Влосипед</Col>
                            <Col span={6}>Влосипед</Col>
                            <Col span={6}>Влосипед</Col>
                        </Row>
                    </div>
                </div>
                <div className="category">
                    <div className="category__name">Разное</div>
                    <div className="category__menu wrapper">
                        <Row gutter={[15, 15]}>
                            <Col span={6}>Разное</Col>
                            <Col span={6}>Разное</Col>
                            <Col span={6}>Разное</Col>
                            <Col span={6}>Разное</Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="header__section">
                <div className="header__search">
                    <Search />
                </div>
                <div className="header__btns">
                    <Button className="btn">Продать</Button>
                    <Button className="btn">Войти</Button>
                </div>
            </div>
        </div>
    );
};
