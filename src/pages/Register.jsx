import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import InputFirstName from '../components/input/InpurtFirstName.jsx';
import InputLastName from '../components/input/InputLastName.jsx';
import InputUserName from '../components/input/InputUsername.jsx';
import InputEmail from '../components/input/InputEmail.jsx';
import InputPassword from '../components/input/InputPassword.jsx';
import InputConfrimPassword from '../components/input/InputConfrimPassword.jsx';
import SelectPeriod from '../components/select/SelectPeriod.jsx';
import SelectTimeZone from '../components/select/SelectTimeZone.jsx';
import SelectType from '../components/select/SelectType.jsx';
import ButtonRegister from '../components/button/ButtonRegister.jsx';

let passisError = false;
let isError = false;
let isSubmit;


class Alert extends Component{

    render(){
        return(
            <div className="alert alert-success" role="alert">
                <strong>Corngatulation</strong> new user has beed added..
            </div>
        )
    }
}

class Register extends Component{


    constructor(props){
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            userName:"",
            email:"",
            password:"",
            confPassword:"",
            period:"",
            timeZone:"",
            stype:"",
            buttonVisibility:"disable",
            errorS:false
        }
        this.handleDataInput    = this.handleDataInput.bind(this);
        this.handleButtonClick  = this.handleButtonClick.bind(this);

    }

    componentDidMount(){
        console.log('React Active!');
    }

    get passwordHas(){
        console.log(this.state.password);
        if(this.state.password == this.state.confPassword && this.state.password != ""){
            //console.log('OKE');
            passisError = false;
            return "has-success";
        }else if(this.state.password != this.state.confPassword && this.state.password != ""){
            //console.log('NO');
            passisError= true;
            return "has-danger";
        }else{
            return null;
        }
    }


    handleDataInput(events,type){
        //console.log(events.target.value.trim());
        this.hasValidate();
        switch(type){
            case "FIRSTNAME":
                this.setState({
                    firstName:events.target.value.trim()
                });
                break;
            case "LASTNAME":
                this.setState({
                    lastName:events.target.value.trim()
                });
                break;
            case "USERNAME":
                this.setState({
                    userName:events.target.value.trim()
                });
                break;
            case "EMAIL":
                this.setState({
                    email:events.target.value.trim()
                });
                break;
            case "PASSWORD":
                this.setState({
                    password:events.target.value.trim()
                });
                break;
            case "CONFPASSWORD":
                this.setState({
                    confPassword:events.target.value.trim()
                });
                break;
            case "PERIOD":
                this.setState({
                    period:events.target.value.trim()
                });
                break;
            case "TIMEZONE":
                this.setState({
                    timeZone:events.target.value.trim()
                });
                break;
            case "STYPE":
                this.setState({
                    stype:events.target.value.trim()
                });
                break;
        }

    }

    hasValidate(){
        if(this.state.firstName == ""){
            console.log('Button Off');
            isError = true;
        }else if(this.state.lastName == ""){
            console.log('Button Off');
            isError = true;
        }else if(this.state.userName == ""){
            console.log('Button Off');
            isError = true;
        }else if(this.state.email == ""){
            console.log('Button Off');
            isError = true;
        }else if(this.state.password == ""){
            console.log('Button Off');
            isError = true;
        }else if(this.state.confPassword == ""){
            console.log('Button Off');
            isError = true;
        }else if(this.state.period == ""){
            console.log('Button Off');
            isError = true;
        }else if(this.state.timeZone == ""){
            console.log('Button Off');
            isError = true;
        }else{
            console.log('Button Active');
            isError = false;
        }
        if(isError){
            this.setState({
                buttonVisibility:"disable"
            });
        }else{
            this.setState({
                buttonVisibility:""
            });
        }
    }

    handleButtonClick(events){
        events.preventDefault();

        if(isError == false){
            if(passisError == false){
                for(var key in this.state){
                    console.log(key, this.state[key]);
                }
                this.setState({
                    errorS:true
                })
            }else{
                alert('Password Harus Sama!');
                console.log('Password Harus Sama!');
            }
        }else{
            console.log('Semua Field Harus Diisi!');
        }
    }


    // Post Data
	async requestRegisterUser() {
        const url = "http://192.168.100.48:6002/user/registration";
        axios.post(url,
            {
            first_name  : this.state.firstName,
            last_name   : this.state.lastName,
            email       : this.state.email,
            username    : this.state.userName,
            password    : this.state.password,
          },{
            headers: {
                'x-api-key':'22fbf8e3-d7ad-478f-92e5-a3f769eece00',
                'Content-Type': 'application/json'
            }
          }
        ).then(function (response) {
            console.log('Successfully!',response);
          })
          .catch(function (error) {
            console.log('Error Data Sending!',error);
          });
	}

    // redirect
	get successRegister() {
        let info;
        if(this.state.errorS == true){
            this.requestRegisterUser();
            info = <Alert/>;
        }else{
            info ="Error!";
        }
        return info;
	}

    render(){
        return(
            <div className="row justify-content-md-center">
                    <div className="col-lg-6">
                    <div className="card">
                        <div className="card-block">
                            <h4 className="card-title">User Registration</h4>
                            {this.successRegister}
                            <form>
                                <InputFirstName
                                    handleDataInput={this.handleDataInput}/>

                                <InputLastName
                                    handleDataInput={this.handleDataInput}/>

                                <InputUserName
                                    handleDataInput={this.handleDataInput}/>

                                <InputEmail
                                    handleDataInput={this.handleDataInput}/>

                                <InputPassword
                                    handleDataInput={this.handleDataInput}/>

                                <InputConfrimPassword
                                    has={this.passwordHas}
                                    handleDataInput={this.handleDataInput}/>

                                <SelectPeriod
                                    handleDataInput={this.handleDataInput}/>

                                <SelectTimeZone
                                    handleDataInput={this.handleDataInput}/>

                                <SelectType
                                    handleDataInput={this.handleDataInput}/>

                                <p className="text-danger">*Note: Button will appear when all filed has beed fill</p>
                                <ButtonRegister
                                    visibility={this.state.buttonVisibility}
                                    handleButtonClick={this.handleButtonClick}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;