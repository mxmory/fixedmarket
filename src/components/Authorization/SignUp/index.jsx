import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import {
    Form,
    Input,
    Button,
    Typography,
    Row,
    Col,
    Divider,
    Checkbox,
} from 'antd';
import {
    postSignUp,
    convertToken,
    resendVerificationMail,
} from '../../../actions';
import { GoogleIcon, MailIcon, KeyIcon } from '../../Icons';
import { isValidEmail } from '../../../utils/helpers';
import { Link } from '@reach/router';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState(null);
    const [registeredEmail, setRegisteredEmail] = useState(null);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const onFinish = (values) => {
        if (!isValidEmail(values.email)) {
            setFormError(t('notValidEmail'));
            return;
        }

        if (values.password !== values.repeat_password) {
            setFormError(t('passwordsAreNotEq'));
            return;
        }
        dispatch(
            postSignUp(values, setRegisteredEmail, setFormError, setLoading)
        );
    };

    const onGoogleAuthSuccess = ({ accessToken }) => {
        dispatch(convertToken({ accessToken, grantType: 'convert_token' }));
    };

    const onGoogleAuthFailure = () => {};
    const resendMail = () => {
        dispatch(resendVerificationMail(registeredEmail));
    };

    const mainFormContent = (
        <>
            <Title>{t('signUpTitle')}</Title>
            <GoogleLogin
                clientId="287763923599-fgip5fm1be6pde3jqpiv13thhka9lf5p.apps.googleusercontent.com"
                render={(renderProps) => (
                    <button
                        className="google_auth-btn mb-20"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                        <GoogleIcon />
                        {t('signUpWithGoogle')}
                    </button>
                )}
                buttonText={t('signInTitle')}
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
                initialValues={{
                    is_accepted_terms: true,
                    keep_updated: false,
                }}
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
                        suffix={
                            <>
                                <MailIcon />
                                {t('email')}
                            </>
                        }
                        type="email"
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
                <Form.Item
                    name="repeat_password"
                    rules={[
                        {
                            required: false,
                            message: t('pleaseRepeatPassword'),
                        },
                    ]}
                >
                    <Input
                        suffix={
                            <>
                                <KeyIcon />
                                {t('confirmPassword')}
                            </>
                        }
                        type="password"
                    />
                </Form.Item>
                <Form.Item
                    name="is_accepted_terms"
                    valuePropName="checked"
                    className="mb-10"
                >
                    <Checkbox className="theme__color-text">
                        {t('agreeForPersonalData')}
                    </Checkbox>
                </Form.Item>
                <Form.Item name="keep_updated" valuePropName="checked">
                    <Checkbox className="theme__color-text">
                        {t('keepMeUpdate')}
                    </Checkbox>
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
                        {t('signUp')}
                    </Button>
                    <div className="form-bottom">
                        <span className="theme__color-text">
                            {t('alreadyAMember')}
                        </span>
                        <Link to="/auth/sign-in">{t('signIn')}</Link>
                    </div>
                </Form.Item>
            </Form>
        </>
    );

    const successFormContent = (
        <>
            <div className="reset__password-picture mb-20">
                <MailIcon />
            </div>
            <Title>{t('checkYourInbox')}</Title>
            <p className="theme__color-text form-description-text mb-30">
                {t('weEmailedAlink')} + ' ' + {registeredEmail}.
                {t('clickTheLinkToComplete')}
            </p>
            <div className="form-bottom">
                <span className="theme__color-text">
                    {t('didntRecieveEmail')}
                </span>
                <button className="button__link" onClick={() => resendMail()}>
                    {t('resendMail')}
                </button>
            </div>
        </>
    );

    return (
        <Row align="middle" justify="center" className="row__content-wrapper">
            <Col className="form-wrapper">
                {!registeredEmail ? mainFormContent : successFormContent}
            </Col>
        </Row>
    );
};

export default SignUp;
