import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa'; // Import the logout icon
import AddArtCat from './AddArtCat'; // Import AddArtCat
import AddProductCat from './AddProductCat'; // Import AddProductCat
import Brand from './Brand'; // Import Brand

export default function AdminPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentView, setCurrentView] = useState('home');
    const navigate = useNavigate();

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle menu item click
    const handleMenuClick = (view) => {
        setCurrentView(view);
        setIsMenuOpen(false); // Optionally close the menu on item click
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('user'); // Clear user session
        navigate('/'); // Redirect to home page
    };

    // Render content based on the current view
    const renderContent = () => {
        switch (currentView) {
            case 'addCategory':
                return <div>Add Category Form</div>;
            case 'addBrand':
                return <Brand />;
            case 'addProductCat':
                return <AddProductCat />;
            case 'addArtCategory':
                return <AddArtCat />;
            case 'artistList':
                return <div>Artist List</div>;
            case 'buyerList':
                return <div>Buyer List</div>;
            case 'productList':
                return <div>Product List</div>;
            case 'getBrands':
                return <div>Get Brands List</div>;
            case 'getCategory':
                return <div>Get Categories List</div>;
            default:
                return <div>Welcome to the Admin Page</div>;
        }
    };

    return (
        <div className="d-flex">
            {/* Sidebar Menu */}
            <div
                className={`sidebar-menu bg-light p-3 shadow-sm ${isMenuOpen ? 'show' : 'hide'}`}
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '250px',
                    height: '100%',
                    overflowY: 'auto',
                    transition: 'transform 0.3s ease',
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
                }}
            >
                <button className="btn btn-outline-primary w-100 mb-2" onClick={() => handleMenuClick('addCategory')}>Add Category</button>
                <button className="btn btn-outline-primary w-100 mb-2" onClick={() => handleMenuClick('addBrand')}>Add Brand</button>
                <button className="btn btn-outline-primary w-100 mb-2" onClick={() => handleMenuClick('addProductCat')}>Add Product Category</button>
                <button className="btn btn-outline-primary w-100 mb-2" onClick={() => handleMenuClick('addArtCategory')}>Add Art Category</button>
                <button className="btn btn-outline-secondary w-100 mb-2" onClick={() => handleMenuClick('artistList')}>Artist List</button>
                <button className="btn btn-outline-secondary w-100 mb-2" onClick={() => handleMenuClick('buyerList')}>Buyer List</button>
                <button className="btn btn-outline-secondary w-100 mb-2" onClick={() => handleMenuClick('productList')}>Product List</button>
                <button className="btn btn-outline-secondary w-100 mb-2" onClick={() => handleMenuClick('getBrands')}>Get Brands</button>
                <button className="btn btn-outline-secondary w-100 mb-2" onClick={() => handleMenuClick('getCategory')}>Get Categories</button>
            </div>

            {/* Main Content */}
            <div className="flex-grow-1">
                <nav className="navbar navbar-light bg-light d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-primary me-3" onClick={toggleMenu}>
                            {isMenuOpen ? 'Close Menu' : 'Menu'}
                        </button>
                        <span className="navbar-brand mb-0 h1">My Website</span>
                    </div>
                    <button className="btn btn-danger" onClick={handleLogout}>
                        <FaSignOutAlt className="me-1" /> Logout
                    </button>
                </nav>

                {/* Render content based on the selected view */}
                <div className="container mt-4">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
