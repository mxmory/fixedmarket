import React from 'react';
import { Row, Col, Breadcrumb, Button } from 'antd';
import './Detail.scss';

export const Detail = ({ itemId }) => {
    return (
        <div className="detail">
            <Row gutter={[15, 15]}>
                <Col span={12} className="detail__img">
                    <img src="http://placekitten.com/g/1000/2000" alt="" />
                    <img src="http://placekitten.com/g/3000/3000" alt="" />
                    <img src="http://placekitten.com/g/640/480" alt="" />
                </Col>
                <Col span={12}>
                    <div className="wrapper detail__info">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <a href="/">Home</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="/">Catalog</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>Velosiped</Breadcrumb.Item>
                        </Breadcrumb>
                        <h2 className="detail__title">
                            Карбоновые колеса Mavic Comete Pro Carbon Exalit
                        </h2>
                        <div className="detail__price">
                            <h2>22800P</h2>
                            <span>новое</span>
                        </div>
                        <span className="gray">
                            Санкт-Петербург, доставка по России
                        </span>
                        <div className="detail__btns">
                            <Button className="ant-btn-primary">
                                Написать
                            </Button>
                            <Button>Поделиться</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
