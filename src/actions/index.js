import { createAction } from 'redux-actions';
import axios from 'axios';
import { navigate } from '@reach/router';
import moment from 'moment';
// import i18n from '../i18next';

// Axios config
axios.defaults.baseURL = 'https://fixedmarket.ru/';
axios.defaults.withCredentials = true;

// const designedErrorsPage = [403, 404, 502, 503, 504, 505];

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const errStatus = error.response.status;

        // if (errResponse && designedErrorsPage.indexOf(errStatus) >= 0)
        //     navigate(`/${errStatus}`);
        if (errStatus === 401) {
            localStorage.removeItem('token');
            navigate('/auth/sign_in');
        }
        return Promise.reject(error);
    }
);

// init
export const getInitDataSuccess = createAction('GET_INIT_DATA_SUCCESS');

export const logIn = () => {
    return (dispatch) => {
        axios
            .get('widget/')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {});
    };
};

export const getCategories = () => {
    return (dispatch) => {
        axios.get('/api/categories').then((res) => console.log(res));
    };
};
