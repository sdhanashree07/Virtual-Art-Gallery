import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
export default function AdminPage(){   
   return(
        <div>
           Admin Page!!!!!!!!!!!!!!!!!!!
           <Link to="/logout" className="btn btn-outline-secondary me-2">
                <FaSignInAlt className="me-1" />
                Logout
              </Link>
        </div>
      
    )
}