import React, { Component } from 'react';
import NavbarHome from '../navbar/NavbarHome';
import axios from 'axios';
import { FormErrors } from '../FormErrors';

class CreateProfile extends Component {

    constructor(props){
        super(props);

        this.state ={
            fName:"",
            lName:"",
            mobileNo:"",
            email:"",
            password:"",

            formErrors: {email: '', password:''},
            emailValid: false,
            passwordValid: false,
            formvalid: false

        }
    }

    // Handle Input
    handleInputChange = (e)=>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        },() => { this.validateField(name, value) }
    );
    }

    // Method to be called when form is submitted
    onSubmit =(e)=>{

        e.preventDefault();

        const {fName,lName,uName,email,password} = this.state;

        const data={
            fName:fName,
            lName:lName,
            uName:uName,
            email:email,
            password:password
        }
        console.log(data);

        axios.post("http://localhost:8015/profile/create",data).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                        fName:"",
                        lName:"",
                        uName:"",
                        email:"",
                        password:""
                    }
                )
            }
        })  
        this.props.history.push('/login'); 
    }

    // Method to valiadte the Form
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }


    render() {
        return (
            // Container to hold the Signup component
            <>
            <NavbarHome/>
            <div className="signup__container container col-lg-5" >
                {/* Left Stripe */}
                
                <div className="container__child signup__thumbnail">
                    <div className="thumbnail__logo">
                    </div>
                    <div className="thumbnail__content text-center">
                    <h3 className=""> Customer Sign Up</h3>
                    </div>
                    <div className="thumbnail__links">
                    <ul className="list-inline m-b-0 text-center">
                        <li><a href="/#" target="_blank"><i className="fa fa-globe"></i></a></li>                        
                    </ul>
                    </div>
                    <div className="signup__overlay"></div>
                </div>
                <div className="container__child signup__form">
                {/* To display Form Errors */}
                <FormErrors formErrors={this.state.formErrors} className="FormError"/>
                {/* Form Begin */}
                    <form action="#">
                    {/* Form Group for First Name */}
                    <div className="form-group">
                        <label for="fName">First Name</label>
                        <input type="text"
                            className="form-control"
                            name="fName"
                            placeholder="Enter First Name"
                            value={this.state.fName}
                            onChange={this.handleInputChange} required="required"/>
                    </div>
                    {/* Form Group for Last Name */}
                    <div className="form-group">
                        <label for="lName">Last Name</label>
                        <input type="text"
                            className="form-control"
                            name="lName"
                            placeholder="Enter Last Name"
                            value={this.state.lName}
                            onChange={this.handleInputChange} required="required"/>
                    </div>
                    {/* Form Group for username */}
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text"
                            className="form-control"
                            name="uName"
                            placeholder="Enter User Name"
                            value={this.state.uName}
                            onChange={this.handleInputChange} required="required"/> 
                    </div>
                    {/* Form Group for Email*/}
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleInputChange} required="required"/> 
                    </div>
                    {/* Form Group for Password */}
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password"
                            className="form-control"
                            name="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleInputChange} required="required"/>
                    </div>                    
                    <br/>
                    {/* Submit button named Create */}
                    <button className="btn btn-success" type="submit" onClick={this.onSubmit}>   
                                <i className="far fa-check-square"> </i>
                                &nbsp; Create
                                
                    </button>  
                    <br/>
                    <br/>
                    {/* Link to signup page */}
                    <div>
                    <p className="paragraphcolor">Already a member<a className="signup__link" href="/customerlogin">&nbsp;Login</a></p>
                    </div>
                    </form>  
                </div>
            </div>
            </>
        )
    }
}
export default CreateProfile;