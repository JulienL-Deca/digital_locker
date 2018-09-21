import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

const DisplayGear = props => (
  <div className="card">
 <img className="card-head" src={props.url_src} alt="Card image cap"></img>
    <hr></hr>
    <div className="card-body">

        <h3>{props.titleCard}</h3>


      <p id="card-text" className="pb-3 pt-2">{props.description}</p>

      <div className="card-foot">
      <a href="#"><i className="far fa-trash-alt"/></a>
      <Link to="/decathlonadmin/myproductsstats" className="btn btn-primary ml-3" >See stats</Link>

      </div>
    </div>
  </div>
)


export default DisplayGear;
