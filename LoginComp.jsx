import { useReducer } from "react";

export default function LoginComp(){
    const init = {
        uid : "",
        pwd :""
    }

    const reducer = (state, action)=>{
        switch(action.type)
        {
            case 'update':
                return {...state, [action.fld]:action.val}
            case 'reset':
                return init;
        }
    }

    const [info,dispatch]=useReducer(reducer,init);



    return(
        <div>
            <h1>Login Page</h1>
            <form>
            <div className="mb-3">
                     <label htmlFor="uid" className="form-label">Username: </label>
                    <input type="text" className="form-label" name="uid" value={info.uid}
                    onChange={(e)=>{dispatch({type:'update',fld:'uid',val:e.target.value})}}/> 
            </div>

            <div className="mb-3">
                     <label htmlFor="pwd" className="form-label">Password: </label>
                    <input type="password" className="form-label" name="pwd" value={info.pwd}
                    onChange={(e)=>{dispatch({type:'update',fld:'pwd',val:e.target.value})}}/> 
            </div>
                <button type="login" className="btn btn-primary">LOGIN</button>
            </form>
           
        </div>
    )
}