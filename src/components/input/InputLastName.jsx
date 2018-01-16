import React from 'react';

const InputLastName = (props) => {
    return(
        <div className="form-group row">
            <label htmlFor="example-search-input" className="col-3 col-form-label">Last Name</label>
            <div className="col-9">
                <input className="form-control" type="text" placeholder="Enter last name" required onChange={(e) => props.handleDataInput(e,"LASTNAME")}/>
            </div>
        </div>
    );
}

export default InputLastName;