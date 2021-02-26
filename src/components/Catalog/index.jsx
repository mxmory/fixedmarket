import React from 'react';
import { Card } from '../Card';
import { Link } from '@reach/router';

export const Catalog = ({ children }) => {
    return (
        <div className="catalog">
            {children}
            {/* <Link to="zapchasti">Zapchasti</Link> <Link to="test">Test</Link> */}
        </div>
    );
};
