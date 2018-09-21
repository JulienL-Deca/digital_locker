import React, {Component} from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom';
import {connect} from 'react-redux';
import {mapStateToProps} from './../../../store/selector.js';

//!!DO NOT DELETE!!///
/* global gapi */


import { GoogleLogout } from 'react-google-login';




function DecathlonNavbar(props){
return (
<div id="navbar" className="fixed-top">
  <div id="admin">CONCEPTOR</div>
  <Link to="/decathlonadmin/home"><div id="logo"></div></Link>
  <NavLink to="/decathlonadmin/home" className="tab" activeClassName="activeTab"><div id="tab">HOME</div></NavLink>
  <NavLink to="/decathlonadmin/myproducts" className="tab" activeClassName="activeTab"><div id="tab">MY PRODUCTS</div></NavLink>
  <NavLink to="/decathlonadmin/myproductsstats" className="tab" activeClassName="activeTab"><div id="tab">STATS</div></NavLink>
  <NavLink to="/decathlonadmin/myfeedbacks" className="tab" activeClassName="activeTab"><div id="tab">FEEDBACKS</div></NavLink>
  <div id="logged">Hello {props.name} | <a href="#" onClick={function(){
    window.signOut();
    window.location.href="/decathlonadmin";

  }}>Logout</a><img src={props.urlPic} id="pic_profile" alt="profile"/></div>


</div>
)
}

window.signOut=function(){
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
  window.location.reload();
  });
}

export default connect(mapStateToProps, null)(DecathlonNavbar);
