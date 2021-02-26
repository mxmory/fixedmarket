import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { Form, Input, Button, Typography, Row, Col, Divider } from 'antd';
import { postSignIn, convertToken } from '../../../actions';
import { Link } from '@reach/router';
import { isValidEmail } from '../../../utils/helpers';
import { GoogleIcon, MailIcon, KeyIcon } from '../../Icons';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

const SignIn = () => {
    const [formError, setFormError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const onFinish = (values) => {
        if (!isValidEmail(values.email)) {
            setFormError(t('notValidEmail'));
            return;
        }

        dispatch(postSignIn(values, setFormError, setLoading));
    };

    const onGoogleAuthSuccess = ({ accessToken }) => {
        dispatch(convertToken({ accessToken, grantType: 'convert_token' }));
    };

    const onGoogleAuthFailure = () => {};

    return (
        <Row align="middle" justify="center" className="row__content-wrapper">
            <Col className="form-wrapper">
                <Title className="theme__color-text">{t('signInTitle')}</Title>
                <GoogleLogin
                    clientId="287763923599-fgip5fm1be6pde3jqpiv13thhka9lf5p.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <button
                            className="google_auth-btn mb-20"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            <GoogleIcon />
                            {t('signWithGoogle')}
                        </button>
                    )}
                    buttonText={t('signWithGoogle')}
                    onSuccess={onGoogleAuthSuccess}
                    onFailure={onGoogleAuthFailure}
                    cookiePolicy={'single_host_origin'}
                />
                <Divider plain className="mb-20">
                    {t('or')}
                </Divider>
                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: false,
                                message: t('pleaseInputEmail'),
                            },
                        ]}
                    >
                        <Input
                            type="email"
                            suffix={
                                <>
                                    <MailIcon />
                                    {t('email')}
                                </>
                            }
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: false,
                                message: t('pleaseInputPassword'),
                            },
                        ]}
                    >
                        <Input
                            suffix={
                                <>
                                    <KeyIcon />
                                    {t('password')}
                                </>
                            }
                            type="password"
                        />
                    </Form.Item>

                    {formError && (
                        <p className="mb-20 error">
                            <Text type="danger">{formError}</Text>
                        </p>
                    )}
                    <Form.Item>
                        <Button
                            loading={loading}
                            type="primary"
                            htmlType="submit"
                            className="login-form-button btn mb-20"
                        >
                            {t('signIn')}
                        </Button>
                        <Row justify={'space-between'}>
                            <div className="form-bottom">
                                <Link
                                    className="login-form-forgot"
                                    to="/reset-password"
                                >
                                    {t('forgotPassword')}
                                </Link>
                            </div>
                            <div className="form-bottom">
                                <span className="theme__color-text">
                                    {t('dontHaveAccount')}
                                </span>
                                <Link to="/auth/sign-up">{t('signUp')}</Link>
                            </div>
                        </Row>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default SignIn;
