import React from 'react';

const InputEmail = (props) => {
    return(
        <div className="form-group row">
            <label htmlFor="example-search-input" className="col-3 col-form-label">E-mail</label>
            <div className="col-9">
                <input className="form-control" type="email" placeholder="Enter email" required onChange={(e) => props.handleDataInput(e,"EMAIL")}/>
            </div>
        </div>
    );
}

export default InputEmail;