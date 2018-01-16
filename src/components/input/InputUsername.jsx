import React from 'react';

const InputUsername = (props) => {
    return(
        <div className="form-group row">
            <label htmlFor="example-search-input" className="col-3 col-form-label">Username</label>
            <div className="col-9">
                <input className="form-control" type="text" placeholder="Enter Username" required onChange={(e) => props.handleDataInput(e,"USERNAME")}/>
            </div>
        </div>
    );
}

export default InputUsername;