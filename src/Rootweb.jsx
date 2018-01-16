import React, {Component} from 'react';
import {BrowserRouter as Routes, Route} from 'react-router-dom';

import App from './App.jsx';
import Register from './pages/Register.jsx';

class Rootweb extends Component{
    render(){
        return(
            <Routes>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/register" component={Register}/>
                </div>
            </Routes>
        )
    }
}

export default Rootweb;