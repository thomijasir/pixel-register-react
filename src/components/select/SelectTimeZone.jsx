import React from 'react';

const SelectTimeZone = (props) => {
    return(
        <div className="form-group row">
            <label htmlFor="example-search-input" className="col-3 col-form-label">Time Zone</label>
            <div className="col-9">
            <select className="form-control" required onChange={(e) => props.handleDataInput(e,"TIMEZONE")}>
                    <option>Choose..</option>
                    <option value="1">Asia/Jakarta - Indonesia (ID)</option>
                    <option value="2">Asia/Makasar - Indonesia (ID)</option>
                    <option value="3">Asia/Pontianak - Indonesia (ID)</option>
                    <option value="4">Asia/Jayapura - Indonesia (ID)</option>
                    <option value="5">Erope/Dublin - Ireland (IE)</option>
                    <option value="6">Asia/Tokyo - Japan (JPN)</option>
                </select>
            </div>
        </div>
    );
}

export default SelectTimeZone;