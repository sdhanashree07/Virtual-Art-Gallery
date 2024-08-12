import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaShoppingCart } from 'react-icons/fa';

export default function BuyerPage() {
  const [artworks, setArtworks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const buyerName = "Buyer Name"; // Replace with dynamic buyer name if needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artworksResponse = await fetch('http://localhost:5000/api/Artworks');
        const artworksData = await artworksResponse.json();
        setArtworks(artworksData);

        const categoriesResponse = await fetch('http://localhost:5000/api/Categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        const subcategoriesResponse = await fetch('http://localhost:5000/api/Subcategories');
        const subcategoriesData = await subcategoriesResponse.json();
        setSubcategories(subcategoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = () => {
    setSelectedCategory('');
    setSelectedSubcategory('');
    setSearchTerm('');
  };

  const filteredArtworks = artworks.filter((artwork) => {
    return (
      (selectedCategory === '' || artwork.categoryId === selectedCategory) &&
      (selectedSubcategory === '' || artwork.subcategoryId === selectedSubcategory) &&
      (searchTerm === '' || artwork.art_name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="website-name">
          <h3>Our Website</h3>
        </div>
        <div className="buyer-info">
          <h3>{buyerName}</h3> {/* Display the buyer name */}
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="search-bar d-flex align-items-center w-100">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search Art"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <Link to="/logout" className="btn btn-outline-secondary ms-2">
          <FaSignOutAlt className="me-1" />
          Logout
        </Link>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <select
          className="form-select me-2 flex-grow-1"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <select
          className="form-select me-2 flex-grow-1"
          value={selectedSubcategory}
          onChange={(e) => setSelectedSubcategory(e.target.value)}
        >
          <option value="">All Subcategories</option>
          {subcategories.map((subcategory) => (
            <option key={subcategory.id} value={subcategory.id}>
              {subcategory.name}
            </option>
          ))}
        </select>

        <button className="btn btn-secondary">
          Clear Filters
        </button>
      </div>

      <div className="row">
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((artwork) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={artwork.art_id}>
              <div className="card h-100">
                <img
                  src={artwork.art_photo}
                  className="card-img-top"
                  alt={artwork.art_name}
                />
                <div className="card-body">
                  <h5 className="card-title">{artwork.art_name}</h5>
                  <p className="card-text">{artwork.description}</p>
                  <p className="card-text">
                    <small className="text-muted">Category: {artwork.categoryName}</small>
                  </p>
                  <button className="btn btn-primary w-100">
                    <FaShoppingCart className="me-1" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">No artworks found.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .container {
          background-color: #f8f9fa; /* Light background color */
          padding: 1rem;
          max-width: 100%; /* Utilize full width */
        }

        .website-name h3,
        .buyer-info h3 {
          margin: 0;
          font-size: 1.5rem;
        }

        .search-bar input {
          width: 100%; /* Make input take full available space */
        }

        .form-select {
          flex-grow: 1; /* Allow select boxes to grow */
          max-width: 300px; /* Limit maximum width for select boxes */
        }

        .card-img-top {
          object-fit: cover;
          height: 200px;
        }

        .card-body {
          padding: 1rem;
        }

        .btn-outline-secondary {
          border-color: #6c757d;
          color: #6c757d;
        }

        .btn-outline-secondary:hover {
          background-color: #6c757d;
          color: #fff;
        }

        .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
        }

        .btn-primary:hover {
          background-color: #0056b3;
          border-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
