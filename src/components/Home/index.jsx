import React from 'react';
import { Row, Col } from 'antd';
import { Card } from '../Card';

export const Home = () => {
    return (
        <div className="home">
            <div className="wrapper">
                <Row gutter={[20, 20]}>
                    <Col span={6}>
                        <Card />
                    </Col>
                    <Col span={6}>
                        <Card />
                    </Col>
                    <Col span={6}>
                        <Card />
                    </Col>
                    <Col span={6}>
                        <Card />
                    </Col>
                    <Col span={6}>
                        <Card />
                    </Col>
                </Row>
            </div>
        </div>
    );
};
