import React, {Component} from 'react';
import { GoogleLogin } from 'react-google-login';
import store from './../../../store/store.js';




class UserLogin extends Component {
  constructor(props){
    super(props);
  }




  render() {
    return (
      <div id="global_container_login">
        <div id="white_box">
        <img src="/pictures/logo.png" width="120px" className="mt-3 pb-4"/>
        <p style={{borderTop:'solid #CCC 1px'}} className="pt-4">As a sport user, get great use stats about your product!</p>
        <a className="btn btn-primary mt-3" href="https://account.geonaute.com/oauth/authorize?response_type=code&client_id=app_digitallocker&redirect_uri=http://localhost:3000/test" role="button">Connect with Decathlon Coach</a>
      </div>
    </div>
    )
  }}

export default UserLogin;
