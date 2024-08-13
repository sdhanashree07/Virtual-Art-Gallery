import { useReducer ,useState } from "react";

const init ={
    bid :0,
    bname:"",
    description:"",
};


const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.val };
      case 'setError':
        return { ...state, [`${action.fld}Error`]: action.val };
      case 'reset':
        return initialState;
      default:
        return state;
    }
  };




export default function Brand(){

    const [user, dispatch] = useReducer(reducer, init);
    const [msg ,setmsg] =useState();

  
    const submitHandle = (e) => {
        e.preventDefault();
        const sendData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                b_id :user.bid,
                b_name:user.bname,
                description:user.description,
             
            })
          };
    
          fetch("https://localhost:8080/brand/addbrand", sendData)
            .then(resp => resp.json())
            .then(obj => setmsg("Brand Added succesfully"))
            .catch(error => setmsg(error.message));
        
      };

    return(
        <div  className="container">
            <h1 >Add Brand</h1>
            <form>

            <div className="mt-2">
                     <label for="brandid" className="form-label"> Brand Id: </label>
                    <input type="text" name="brandid" value={user.bid} onChange={(e) => dispatch({ type: 'update', fld: 'bid', val: e.target.value })}/>
                    </div>

                    <div className="mt-2">
                     <label for="brandnm" className="form-label"> Brand Name: </label>
                    <input type="text" name="prandnm" value={user.bname} onChange={(e) => dispatch({ type: 'update', fld: 'bname', val: e.target.value })}/>
                    </div>

                    <div className="mt-2">
                     <label for="desc" className="form-label">Description:</label>
                    <input type="text" name="desc" value={user.description} onChange={(e) => dispatch({ type: 'update', fld: 'description', val: e.target.value })}/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" onclick={submitHandle}>Add</button>
                    <div>
                    <span>{JSON.stringify(user)}</span>
                    </div>
                    <div>
                    <span>{msg}</span>
                    </div>
            </form>

        </div>
    )
}