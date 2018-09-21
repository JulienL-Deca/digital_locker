import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import store from './../../store/store.js';




class GeonauteAccount extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    let code = window.location.search.split("&")[0].substring(6) ;
    fetch(`http://localhost:8080/api/user/validate_code/${code}`)
    .then (res=>res.json())
    .then (resjson=>
      store.dispatch({type:"LOGINUSER", loggedInUser:true,nameUser:resjson.firstName,ldidUser:resjson.ldid,requestKey:resjson.requestKey})
    )
    .then(this.props.history.push("/home"))
  }

  render() {
    return (
      <p>YOUPI ;)</p>
    )
  }
}

export default withRouter(GeonauteAccount);
