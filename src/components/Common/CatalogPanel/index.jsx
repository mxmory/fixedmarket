import React from 'react';
import { Switch, Checkbox } from 'antd';
import './CatalogPanel.scss';

export const CatalogPanel = () => {
    return (
        <div className="catalog-panel">
            <div className="title">Новое</div>
            <div className="sort">
                <div className="sort__field">По дате</div>
                <div className="sort__field">Дешевле</div>
                <div className="sort__field">Дороже</div>
            </div>
            <div className="filters">
                <div className="filters__field">
                    <Switch />
                    <span className="label">Только в Казани</span>
                </div>
                <div className="filters__field">
                    <Checkbox />
                    <span className="label">Доставка</span>
                </div>
            </div>
        </div>
    );
};
