import React from 'react';

const ButtonRegister = (props) => {
    return(
            <button type="submit" className="btn btn-primary" 
            onClick={e => props.handleButtonClick(e)} disabled={props.visibility}>Register</button> 
    );
}

export default ButtonRegister;