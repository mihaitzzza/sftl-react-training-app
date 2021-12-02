import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';

const ROUTES = [
    <Route key={1} path="/" element={<Homepage />} />,
    <Route key={2} path="/products" element={<Products />} />,
    <Route key={3} path="/products/:id" element={<Product />} />,
    <Route key={4} path="/products/add" element={<AddProduct />} />,
];

export default ROUTES;
