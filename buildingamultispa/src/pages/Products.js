import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <Link to='/products/p1'><li>A Book</li></Link>
                <Link to='/products/p2'><li>A Carpet</li></Link>
                <Link to='/products/p3'><li>A Online Course</li></Link>
            </ul>

        </section>
    )
}

export default Products
