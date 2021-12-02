import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([{
        id: 1,
        name: 'Product #1'
    }, {
        id: 2,
        name: 'Product #2'
    }, {
        id: 3,
        name: 'Product #3'
    }, {
        id: 4,
        name: 'Product #4'
    }]);

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
