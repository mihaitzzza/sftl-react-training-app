import React from 'react';
import {useParams} from 'react-router-dom';

const Product = (props: any) => {
    const params = useParams();
    console.log('params', params);
    const {id} = params;
    // const id = params.id;
    // const x = params.x;

    return (
        <div>
            Product details page for Product ID = {id}
        </div>
    );
};

export default Product;
