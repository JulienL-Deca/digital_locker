import React, {Component} from 'react';
import DecathlonNavbar from "./../navbar/decathlonnavbar.js";
import ProductsFollowed from './productsFollowed';
import AddFollowUpProduct from './addFollowUpProduct'


import {connect} from 'react-redux';
import {mapStateToProps} from './../../../store/selector.js';

import FeedbacksAwaitingAnswer from './feedbacksawaitinganswer.js'


class DecathlonHome extends Component {
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
        <DecathlonNavbar />
        <div className="container big-margin">
          <div className="row justify-content-center ">
            <h1>Welcome back {this.props.name}</h1>
          </div>
          <div className="row justify-content-center">
            <p className="h5">{this.dateNow()}</p>
          </div>
          <div className="row mt-4">
            <div className="col-6">
              <ProductsFollowed />
            </div>
            <div className="col-6 ">
              <FeedbacksAwaitingAnswer />
              <AddFollowUpProduct />
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(DecathlonHome);
