import { useState } from "react";

export default function AddProductCat() {
    const [productId, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const submitHandle = (e) => {
        e.preventDefault(); // Prevent default form submission

        const sendData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                pcat_id: productId,
                pcat_name: productName,
                description: description
            })
        };

        fetch('http://localhost:8080/products/addProductcat', sendData)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                setSuccess(true);
                setProductId('');
                setProductName('');
                setDescription('');
                setError(null);
                alert('Product Category added successfully!');
            })
            .catch(error => {
                setError(error.message);
                setSuccess(false);
                alert('Failed to add product category.');
            });
    };

    return (
        <div className="container">
            <h1>Add Product Category</h1>
            <form onSubmit={submitHandle}>
                <div className="mt-2">
                    <label htmlFor="productid" className="form-label">Product Id:</label>
                    <input
                        type="text"
                        id="productid"
                        name="productid"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mt-2">
                    <label htmlFor="productnm" className="form-label">Product Name:</label>
                    <input
                        type="text"
                        id="productnm"
                        name="productnm"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mt-2">
                    <label htmlFor="desc" className="form-label">Description:</label>
                    <input
                        type="text"
                        id="desc"
                        name="desc"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Product Category
                </button>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
                {success && <div className="alert alert-success mt-3">Product Category added successfully!</div>}
            </form>
        </div>
    );
}
