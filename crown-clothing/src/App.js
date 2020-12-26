import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component'
import { auth } from './firebase/firebase.utils'
;

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      currentUser:null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{ 
      this.setState({ currentUser:user});
    })
  }
  componentDidUnMount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
    <Switch > 
      <Route exact path="/" component={HomePage} />
      <Route  path="/shop" component={ShopPage} />
      <Route  path="/SignIn" component={SignInAndSignUp} />
    </Switch>
      </div>
    );
  }
}

export default App;
