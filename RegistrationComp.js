import { useState } from "react";

export default function RegistrationComp(){
    return(
        <div style={{backgroundColor:"darkkhaki"}}  className="container" >
            <h1 style={{color:"blueviolet"}}>Registration Form</h1>
        
            <form>
                     <div className="mt-2">
                     <label for="fname" className="form-label"> First Name: </label>
                    <input type="text" name="fname"/>

                     </div>
                     <div className="mt-2">
                     <label for="lname" className="form-label">Last Name:</label>
                    <input type="text" name="lname"/>

                     </div >
                     <div className="mt-2">
                     <label for="emailid" className="form-label">Email Id:</label>
                    <input type="text" name="emailid"/>

                    </div >
                     <div className="mt-2">
                     <label for="contact" className="form-label">Contact Number:</label>
                    <input type="text" name="contact"/>


                     </div>

                     <div className="mt-2">
                     <label for="city" className="form-label">Select City:</label>
                    <select name="city">
                    <option value="#">Pune</option>
                    </select>
                    </div>

                    <div className="mt-2">
                     <label for="area" className="form-label">Select Area:</label>
                    <select name="area">
                    <option value="#">Deccan</option>
                    <option value="#">Hadapsar</option>
                    <option value="#">Hinjewadi</option>
                    </select>
                    </div>


                     
                     <div className="mt-2">
                     <label for="username" className="form-label">User Name:</label>
                    <input type="text" name="username"/>

                     </div >
                     <div className="mt-2">
                     <label for="pwd" className="form-label">PassWord:</label>
                    <input type="password" name="pwd"/>


                     </div>

                     <div className="mt-2">
                     <label for="role" className="form-label">Role:</label>
                    <select name="role">
                    <option value="#">Admin</option>
                    <option value="#">Artist</option>
                    <option value="#">Buyer</option>
                    </select>
                    </div>

                    <div className="mt-2">
                     <label for="area" className="form-label">Area:</label>
                    <textarea row="3" colum="4"></textarea>

                     </div >



                     <div className="mt-2">
                    <input type="submit" value="Register" />
                    </div>

            </form>
        </div>
    )
}

