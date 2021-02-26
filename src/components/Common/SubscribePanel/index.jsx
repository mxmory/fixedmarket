import React from 'react';
import { Button } from 'antd';
import './SubscribePanel.scss';
import { CrossIcon } from '../../Icons';

export const SubscribePanel = () => {
    return (
        <div className="subscribe-panel">
            <div className="subscribe-panel__content">
                <div>
                    <div>
                        Подпишись на категории и получай уведомления о новых
                        объявлениях в Telegram-боте
                    </div>
                    <Button>Подписаться</Button>
                </div>

                <div className="close">
                    <CrossIcon />
                </div>
            </div>
        </div>
    );
};
