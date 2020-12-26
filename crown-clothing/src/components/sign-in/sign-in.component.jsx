import React,{ Component } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name } = event.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="sign-in">
          
             <h2>I already have a account</h2>
            <span> Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>

                
                <FormInput type="email" name="email" 
                handleChange={this.handleChange} 
                value={this.state.email} required 
                label='email'
                placeholder='email'                    
                />
                
                <FormInput type="password" 
                name="password" 
                value={this.state.password} 
                handleChange={this.handleChange}    
                label='password'
                placeholder='password'
                required />
                
                <CustomButton type="submit" > Sign in</CustomButton> {'  '}
                <CustomButton onClick={SignInWithGoogle} > Sign in with Google</CustomButton>

            </form>
            </div>
        )
    }
}

export default SignIn;