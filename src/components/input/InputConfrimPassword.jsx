import React from 'react';

const InputConfrimPassword = (props) => {
    return(
        <div className={"form-group row "+props.has}>
            
            <label htmlFor="example-search-input" className="col-3 col-form-label">Confrim Password</label>
            <div className="col-9">
                <input className="form-control" type="password" placeholder="Password" required 
                onChange={(e) => props.handleDataInput(e,"CONFPASSWORD")}/>
            </div>
        </div>
    );
}

export default InputConfrimPassword;