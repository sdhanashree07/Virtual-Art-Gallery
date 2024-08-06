import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';


export default function BuyerPage(){   
    return(
        <div>
         <div>
            Buyer Page!!!!!!!!!!!!!!!!!!!
          </div>

          <div>
            <Link to="/logout" className="btn btn-outline-secondary me-2">
                <FaSignInAlt className="me-1" />
                Logout
              </Link>
         </div>

         </div>
     )
 }