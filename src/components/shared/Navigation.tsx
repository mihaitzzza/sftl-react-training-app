import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            {/*<a href="/">Homepage</a>*/}
            <Link to="/">Homepage</Link>
            {/*<a href="/products">Products</a>*/}
            <Link to="/products">Products</Link>
        </div>
    );
};

export default Navigation;
