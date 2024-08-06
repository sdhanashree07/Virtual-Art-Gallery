import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

export default function ArtistPage(){   
    return(
         <div>
           <h1> Artist Page!!!!!!!!!!!!!!!!!!!</h1>
           <Link to="/logout" className="btn btn-outline-secondary me-2">
                <FaSignInAlt className="me-1" />
                Logout
              </Link>
         </div>
       
     )
 }