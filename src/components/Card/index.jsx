import React from 'react';
import { images } from '../../utils/images';
import { Link } from '@reach/router';
import './Card.scss';

export const Card = ({ item }) => {
    return (
        <div className="card">
            <Link to="/catalog/zapchasti/zvezdochka" className="card__img">
                <img src="http://placekitten.com/g/1000/1000" alt="item" />
            </Link>
            <div className="card__meta">
                <div className="card__title bold">Трековый фреймсет Fort</div>
                <div className="card__price">
                    <span className="bold">1488р</span>{' '}
                    <span className="condition gray">б/у</span>
                </div>
                <div className="card__location gray">
                    Пермь, доставка по России
                </div>
                <div className="card__date gray">Сегодня 13:02</div>
            </div>
        </div>
    );
};
