import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from '@reach/router';
import { verifyEmail } from '../../actions';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

const SignUpConfirm = ({ token }) => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (token) {
            dispatch(verifyEmail(token, setIsSuccess, setError));
        }
    }, [token]);

    return (
        <Row align="middle" justify="center" className="row__content-wrapper">
            <Col className="form-wrapper">
                {isSuccess ? (
                    <p className="theme__color-text form-description-text">
                        <span>{t('emailApproved')}</span>{' '}
                        <Link to="/auth/sign-in">{t('signIn')}</Link>
                    </p>
                ) : (
                    <p className="theme__color-text form-description-text">
                        {error ? error : t('process') + '...'}
                    </p>
                )}
            </Col>
        </Row>
    );
};

export default SignUpConfirm;
