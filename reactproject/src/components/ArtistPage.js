// components/ArtistPage.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ArtistPage() {
  const navigate = useNavigate();

  const [artworks, setArtworks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch artworks, categories, and subcategories from the API
        const artworksResponse = await axios.get('http://localhost:5000/api/Artworks');
        const categoriesResponse = await axios.get('http://localhost:5000/api/Categories');
        const subcategoriesResponse = await axios.get('http://localhost:5000/api/Subcategories');

        setArtworks(artworksResponse.data);
        setCategories(categoriesResponse.data);
        setSubcategories(subcategoriesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    // Navigate to the home page
    navigate('/');
  };

  const filteredArtworks = artworks.filter((artwork) => {
    return (
      (selectedCategory === '' || artwork.categoryId === selectedCategory) &&
      (selectedSubcategory === '' || artwork.subcategoryId === selectedSubcategory) &&
      (searchTerm === '' || artwork.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="artist-info">
          <h3>Welcome, Artist Name</h3>
        </div>
        <div className="search-logout d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search Art"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="btn btn-outline-primary ms-2" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="d-flex justify-content-start mb-3">
        <select
          className="form-select me-2"
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
          className="form-select me-2"
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

        <button className="btn btn-secondary">Filter</button>
      </div>

      <div className="row">
        {filteredArtworks.map((artwork) => (
          <div className="col-md-4 col-sm-6 mb-4" key={artwork.art_id}>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
