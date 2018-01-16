import React from 'react';

const InputPassword = (props) => {
    return(
        <div className="form-group row">
            <label htmlFor="example-search-input" className="col-3 col-form-label">Password</label>
            <div className="col-9">
                <input className="form-control" type="Password" placeholder="Password" required 
                onChange={(e) => props.handleDataInput(e,"PASSWORD")}/>
            </div>
        </div>
    );
}

export default InputPassword;