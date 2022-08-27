import React from 'react'
import { useParams } from 'react-router-dom';

// What is useParams ?
//The useParams hook returns an object of key / value pairs of
//the dynamic params from the current URL that were matched
// by the < Route path >
//.Child routes inherit all params from their parent routes.
// {productId: 'omarsaade'}

function ProductDetail() {
    const params = useParams();

    console.log(params.productId);


    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
        </section>
    );
};

export default ProductDetail;
