import React from 'react';

const InputFisrtName = (props) => {
    return(
        <div className="form-group row">
            <label htmlFor="example-search-input" className="col-3 col-form-label">First Name</label>
            <div className="col-9">
                <input className="form-control" type="text" placeholder="Enter first name" onChange={e => props.handleDataInput(e,"FIRSTNAME")} required/>
            </div>
        </div>
    );
}

export default InputFisrtName;