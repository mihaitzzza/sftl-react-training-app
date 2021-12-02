import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {RootState} from '../state/store';
// import {load} from '../state/slices/products';
import {fetchProducts} from '../state/slices/products';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate();
    const products = useSelector((state: RootState) => {
        return state.products.products;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const navigateTo = (id: number) => {
        const path = `/products/${id}`;
        navigate(path);
    }

    return (
        <>
            <Link to="/products/add">
                Add new product
            </Link>
            <ul>
                {products.map(({id, name}) => (
                    <li key={id} style={{marginTop: '20px'}}>
                        <div>Product Name: <Link to={`/products/${id}`}>{name}</Link></div>
                        <button onClick={() => navigateTo(id)}>View details</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Products;
