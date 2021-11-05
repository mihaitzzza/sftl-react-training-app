import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import React from 'react';

const ROUTES = [
    <Route path="/" element={<Homepage />} />,
    <Route path="/products" element={<Products />} />
]

export default ROUTES
