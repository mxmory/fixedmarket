import React from 'react';
import { Layout } from 'antd';
import { Header } from '../Header';
import { FooterAdditionalButtons } from '../FooterAdditionalButtons';
import './Authorization.scss';

const Authorization = (props) => {
    return (
        <Layout className="authorization">
            <Header />
            <div className="fl-gr-2">{props.children}</div>
            <FooterAdditionalButtons />
        </Layout>
    );
};

export default Authorization;
