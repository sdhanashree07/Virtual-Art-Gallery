// src/components/ProductList.js

import React from 'react';

const products = [
    { id: 1, name: 'Product One', category: 'Electronics', price: '$199.99', stock: 10 },
    { id: 2, name: 'Product Two', category: 'Clothing', price: '$29.99', stock: 50 },
    { id: 3, name: 'Product Three', category: 'Books', price: '$9.99', stock: 100 },
];

const ProductList = () => {
    // Handle edit action
    const handleEdit = (id) => {
        alert(`Edit product with ID: ${id}`);
        // Implement edit functionality here
    };

    // Handle delete action
    const handleDelete = (id) => {
        if (window.confirm(`Are you sure you want to delete product with ID: ${id}?`)) {
            alert(`Deleted product with ID: ${id}`);
            // Implement delete functionality here
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        {/* No "Actions" header */}
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => handleEdit(product.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
