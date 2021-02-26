import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { Card } from '../Card';
import { CatalogPanel } from '../Common/CatalogPanel/index';

export const Category = ({ items }) => {
    useEffect(() => {
        console.log('mount');
    }, []);

    return (
        <div className="wrapper">
            <CatalogPanel />
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
    );
};
