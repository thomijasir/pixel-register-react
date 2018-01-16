import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class App extends Component{

    constructor(props){
        super();
    }

    render(){
        return(
           <div className="text-center padds p-white">
               <h2>Welcome To Mnagix</h2>
               <p>For Register new User Click <Link to="/register">Here</Link></p>
           </div>
        );
    }
}

export default App;