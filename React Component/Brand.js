import { useState } from "react";

export default function Brand(){
    return(
        <div  className="container">
            <h1 >Add Brand</h1>
            <form>

            <div className="mt-2">
                     <label for="brandid" className="form-label"> Brand Id: </label>
                    <input type="text" name="brandid"/>
                    </div>

                    <div className="mt-2">
                     <label for="brandnm" className="form-label"> Brand Name: </label>
                    <input type="text" name="prandnm"/>
                    </div>

                    <div className="mt-2">
                     <label for="desc" className="form-label">Description:</label>
                    <input type="text" name="desc"/>
                    </div>


            </form>

        </div>
    )
}