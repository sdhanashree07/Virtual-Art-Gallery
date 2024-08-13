import { useState } from "react";

export default function AddProductCat(){
    return(
        <div  className="container">
            <h1 >Add Product Category</h1>
            <form>

            <div className="mt-2">
                     <label for="productid" className="form-label">  Product Id: </label>
                    <input type="text" name="productid"/>
                    </div>

                    <div className="mt-2">
                     <label for="productnm" className="form-label"> Product Name: </label>
                    <input type="text" name="productnm"/>
                    </div>

                    <div className="mt-2">
                     <label for="desc" className="form-label">Description:</label>
                    <input type="text" name="desc"/>
                    </div>


            </form>

        </div>
    )
}