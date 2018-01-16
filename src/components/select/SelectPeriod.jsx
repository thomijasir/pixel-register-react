import React from 'react';

const SelectPeriod = (props) => {
    return(
        <div className="form-group row">
            <label htmlFor="example-search-input" className="col-3 col-form-label">Period</label>
            <div className="col-9">
            <select className="form-control" required onChange={e => props.handleDataInput(e,"PERIOD")}>
                <option>Choose..</option>
                <option value={1}>1 Month</option>
                <option value={2}>2 Month</option>
                <option value={3}>3 Month</option>
                <option value={4}>4 Month</option>
                <option value={5}>5 Month</option>
                <option value={6}>6 Month</option>
            </select>
            </div>
        </div>
    );
}

export default SelectPeriod;