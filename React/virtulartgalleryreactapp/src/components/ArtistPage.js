







import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

export default function ArtistPage(){   
    return(
         <div>

           
           <nav className="navbar navbar-expand-lg navbar-light bg-light px-3" >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-primary fw-bold">
            Our Website
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
            <div className="navbar-nav">
            <Link to="/logout" className="btn btn-outline-secondary me-2">
                <FaSignInAlt className="me-1" />
                Logout
              </Link>
              <Link to="/register_artist" className="btn btn-primary">
                <FaUserPlus className="me-1" />
                Register Artist
              </Link>
              <Link to="/register_buyer" className="btn btn-primary">
                <FaUserPlus className="me-1" />
                Register Buyer
              </Link>
            </div>
          </div>
        </div>
      </nav>
          
         </div>
       
     )
 }