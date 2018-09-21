import React, {Component} from 'react';
import UserNavbar from "./../navbar/usernavbar.js";
import LastGearUsed from './lastgearused';
import CustomizedAdvice from './customizedadvice';
import LastSessionCarrousel from './lastsessioncarrousel';

import {connect} from 'react-redux';
import {mapStateToProps} from './../../../store/selector.js';


class UserHome extends Component {
  dateNow(){
    const dateOfNow = new Date();
    let dateToReturn = "";
    let minutes = dateOfNow.getMinutes().toString().padStart(2,"0");
    let hours = dateOfNow.getHours().toString().padStart(2,"0");
    let day = dateOfNow.getDate().toString().padStart(2,"0");
    let month = (dateOfNow.getUTCMonth()+1).toString().padStart(2,"0");
    let year = dateOfNow.getUTCFullYear();
    dateToReturn =
      day+"."+month+"."+year
      +" | "+hours+":"+minutes;
    return dateToReturn;
  }
  render() {
    return (
      <div>
        <UserNavbar />
      <div className="container big-margin">
        <div className="row justify-content-center ">
          <h1>Welcome back {this.props.nameUser} ;-)</h1>
        </div>
        <div className="row justify-content-center">
          <p className="h5">{this.dateNow()}</p>
        </div>
        <div className="row mt-4">
          <div className="col-6">
            <LastGearUsed />
          </div>
          <div className="col-6 ">
            <CustomizedAdvice CustomizedAdvicePic="/seeds/advice_1.jpg"/>
            <LastSessionCarrousel />
          </div>
        </div>
      </div>
    </div>
    )
  }}

//export default UserHome;
export default connect(mapStateToProps, null)(UserHome);
