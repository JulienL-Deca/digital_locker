import React, {Component} from 'react';
import { GoogleLogin } from 'react-google-login';
import store from './../../../store/store.js';



const failure = () => {
  console.log("ça n'a pas marché");
}




const responseGoogle = (response) => {
  const body = { token: response.Zi.id_token };
  fetch('/googleConnectBack', {
      method: 'POST',
      body:    JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
  })
  .then((res) => {
    if(res.status===201){
      return  res.json()
    }else{
        return "bad access";
      }
  }).then(finalresult=>{
    console.log(finalresult);
    if(finalresult !== "bad access"){
      store.dispatch({type:"LOGIN",loggedIn:true,name:finalresult.userInfo.given_name,urlPic:finalresult.userInfo.picture,});
    }
  })

}




class DecathlonLogin extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="global_container_login">

        <div id="white_box">
        <div id="login_admin">CONCEPTOR</div>
        <img src="/pictures/logo.png" width="120px" className="mt-3 pb-4"/>
        <p style={{borderTop:'solid #CCC 1px'}} className="pt-4">As a product conceptor, get great use stats about your product!</p>

 <GoogleLogin
    clientId="464385487433-dilss92cm4s8msm84a24bujpv3v1tb9e.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={failure}
    className="btn btn-danger mt-3"
    // isSignedIn={true}
  >
<i className="fab fa-google"></i>
  <span> Login with Google</span>
</GoogleLogin>

        </div>
      </div>
    )
  }}

export default DecathlonLogin;
