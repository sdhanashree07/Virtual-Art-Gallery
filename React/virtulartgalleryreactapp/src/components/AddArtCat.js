
import { useState } from "react";

export default function AddArtCat(){
    return(
        <div  className="container">
            <h1 >Add Art Category</h1>
            <form>

            <div className="mt-2">
                     <label for="artid" className="form-label"> Art Id: </label>
                    <input type="text" name="artid"/>
                    </div>

                    <div className="mt-2">
                     <label for="artnm" className="form-label">Art Name: </label>
                    <input type="text" name="artnm"/>
                    </div>

                    <div className="mt-2">
                     <label for="desc" className="form-label">Description:</label>
                    <input type="text" name="desc"/>
                    </div>

                    

            </form>

        </div>
    )
}