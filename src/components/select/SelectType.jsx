import React from 'react';

const SelectType = (props) => {
    return(
        <div className="form-group row">
            <label htmlFor="example-search-input" className="col-3 col-form-label">Type</label>
            <div className="col-9">
            <select className="form-control" required onChange={(e) => props.handleDataInput(e,"STYPE")}>
                    <option>Choose..</option>
                    <option value="1">Tester</option>
                    <option value="2">Admin</option>
                    <option value="3">Client</option>
                </select>
            </div>
        </div>
    );
}

export default SelectType;