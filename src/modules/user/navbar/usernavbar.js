import React, {Component} from 'react';
import {
  Link,
  NavLink,
} from 'react-router-dom';
import {connect} from 'react-redux';
import {mapStateToProps} from './../../../store/selector.js';

function UserNavbar(props){
  console.log(props.nameUser);
return (
<div id="navbar" className="fixed-top">
  <Link to="/home"><div id="logo"></div></Link>
  <NavLink to="/home" className="tab" activeClassName="activeTab"><div id="tab">HOME</div></NavLink>
  <NavLink to="/myactivities" activeClassName="activeTab"><div id="tab">MY ACTIVITIES</div></NavLink>
  <NavLink to="/mylocker" activeClassName="activeTab"><div id="tab">MY LOCKER</div></NavLink>
  <div id="logged">Hello {props.nameUser} | <a href="#" onClick={function(){
    window.location.href="https://account.geonaute.com/logout?callback=http://localhost:3000";
  }}>Logout</a></div>
</div>
)
}





export default connect(mapStateToProps, null)(UserNavbar);
