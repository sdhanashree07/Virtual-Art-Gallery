// src/components/BuyerList.js

import React from 'react';

const buyers = [
    { id: 1, name: 'Buyer One', email: 'buyer1@example.com', purchases: 15 },
    { id: 2, name: 'Buyer Two', email: 'buyer2@example.com', purchases: 7 },
    { id: 3, name: 'Buyer Three', email: 'buyer3@example.com', purchases: 20 },
];

const BuyerList = () => {
    // Handle edit action
    const handleEdit = (id) => {
        alert(`Edit buyer with ID: ${id}`);
        // Implement edit functionality here
    };

    // Handle delete action
    const handleDelete = (id) => {
        if (window.confirm(`Are you sure you want to delete buyer with ID: ${id}?`)) {
            alert(`Deleted buyer with ID: ${id}`);
            // Implement delete functionality here
        }
    };

    return (
        <div>
            <h2>Buyer List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Purchases</th>
                        {/* No "Actions" header */}
                    </tr>
                </thead>
                <tbody>
                    {buyers.map((buyer) => (
                        <tr key={buyer.id}>
                            <td>{buyer.id}</td>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td>{buyer.purchases}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => handleEdit(buyer.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(buyer.id)}
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

export default BuyerList;
