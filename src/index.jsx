import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

import App from './components/App/App';
import './i18next';
import 'antd/dist/antd.css';
import './index.scss';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
