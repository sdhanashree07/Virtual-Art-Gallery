
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

export default function DummyAdminPage(){   
    return(
         <div>

           
           <nav className="navbar navbar-expand-lg navbar-light bg-light px-3" >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-primary fw-bold">
            Our Website
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
            <div className="navbar-nav">
            
              <Link to="/register_artist" className="btn btn-primary">
                <FaUserPlus className="me-1" />
                Add Brand
              </Link>
              <Link to="/register_buyer" className="btn btn-primary">
                <FaUserPlus className="me-1" />
                Add Category
              </Link>
              <Link to="/logout" className="btn btn-outline-secondary me-2">
                <FaSignInAlt className="me-1" />
                Logout
              </Link>

            </div>
          </div>
        </div>
      </nav>
          
         </div>
       
     )
 }














// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
// import { FaSignInAlt, FaChevronDown, FaChevronUp} from 'react-icons/fa';
// export default function AdminPage(){  
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Toggle menu visibility
//   const toggleMenu = () => {
//       setIsMenuOpen(!isMenuOpen);
//   };



  
//    return(
//     <div className="d-flex">
//     {/* Sidebar Menu */}
            

//     <div 
//         className={`sidebar-menu bg-light p-3 shadow-sm ${isMenuOpen ? 'd-block' : 'd-none'}`}
//         style={{
//             position: 'fixed',
//             top: '0',
//             left: '0',
//             width: '250px',
//             height: '100%',
//             overflowY: 'auto',
//             transition: 'transform 0.3s ease',
//             transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
//         }}



//     >
//         <Link to="/AddBrand" className="btn btn-outline-primary w-100 mb-2">
//             Add Category
//         </Link>
       
//         <a href="http://localhost:8080/AddBrand" className="btn btn-outline-primary w-100 mb-2">
//             Add Brand
//         </a>
//         {/* <Link to="/AddBrand" className="btn btn-outline-primary w-100 mb-2">
//             Add Brand
//         </Link> */}
//         <a href="/add-product" className="btn btn-outline-primary w-100 mb-2">
//             Add Product
//         </a>
//         <a href="/get-artist-list" className="btn btn-outline-secondary w-100 mb-2">
//             Get Artist List
//         </a>
//         <a href="/get-buyer-list" className="btn btn-outline-secondary w-100 mb-2">
//             Get Buyer List
//         </a>
//         <a href="/get-product-list" className="btn btn-outline-secondary w-100 mb-2">
//             Get Product List
//         </a>
//         <a href="/get-brand-list" className="btn btn-outline-secondary w-100 mb-2">
//             Get Brand List
//         </a>
//         <a href="/get-category-list" className="btn btn-outline-secondary w-100 mb-2">
//             Get Category List
//         </a>
//     </div>

//     {/* Main Content */}
//     <div className="flex-grow-1">
   
//         {/* Navbar with Toggler Button and Logout Button */}
//         <nav className="navbar navbar-light bg-light d-flex justify-content-between">
//         <button className="btn btn-primary" onClick={toggleMenu}>
//                 {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />} Menu
//             </button>

//             <div > 
//               <Link to="/logout" className="btn btn-outline-secondary me-2">
//                 <FaSignInAlt className="me-1" />
//                 Logout
//               </Link>
//             </div>
          
//         </nav>
        
        
//         {/* Your main content goes here */}
//         <div className="container mt-4">
//             <h1>Welcome to the Admin Page</h1>
//             <p>Here you can manage categories, brands, products, and more.</p>
//         </div>
//     </div>
// </div>
      
//     )
// }