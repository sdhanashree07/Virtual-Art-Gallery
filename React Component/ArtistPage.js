import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa'; // Importing an icon for logout

export default function ArtistPage() {
  const navigate = useNavigate();

  // State variables to manage artworks, categories, subcategories, and filters
  const [artworks, setArtworks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from APIs using the fetch method
    const fetchData = async () => {
      try {
        // Fetch artworks data
        const artworksResponse = await fetch('http://localhost:5000/api/Artworks');
        const artworksData = await artworksResponse.json();
        setArtworks(artworksData);

        // Fetch categories data
        const categoriesResponse = await fetch('http://localhost:5000/api/Categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        // Fetch subcategories data
        const subcategoriesResponse = await fetch('http://localhost:5000/api/Subcategories');
        const subcategoriesData = await subcategoriesResponse.json();
        setSubcategories(subcategoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle logout action
  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user data from localStorage
    navigate('/'); // Redirect to the homepage
  };

  // Handle filter reset
  const handleFilter = () => {
    setSelectedCategory('');
    setSelectedSubcategory('');
    setSearchTerm('');
  };

  // Filter artworks based on selected category, subcategory, and search term
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
        <div className="artist-info">
          <h3>Welcome, Artist Name</h3> {/* Update "Artist Name" dynamically if needed */}
        </div>
        <div className="search-logout d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search Art"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="btn btn-outline-primary ms-2" onClick={handleLogout}>
            <FaSignOutAlt className="me-1" /> {/* Logout icon */}
            Logout
          </button>
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

        <button className="btn btn-secondary" onClick={handleFilter}>
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

        .artist-info h3 {
          margin: 0;
          font-size: 1.5rem;
        }

        .search-logout input {
          flex: 1;
          max-width: 300px; /* Limit width for search input */
        }

        .card-img-top {
          object-fit: cover;
          height: 200px;
        }

        .card-body {
          padding: 1rem;
        }

        .btn-outline-primary {
          border-color: #007bff;
          color: #007bff;
        }

        .btn-outline-primary:hover {
          background-color: #007bff;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
