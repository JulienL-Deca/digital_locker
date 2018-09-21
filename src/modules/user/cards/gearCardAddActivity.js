import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

const GearCardAddActivity = props => (
  <div className="card">
    <img className="card-head" src={props.url_src} alt="Card image cap"></img>
    <hr></hr>
    <div className="card-body">

      <h3>{props.titleCard}</h3>
      <div className="progress mt-0">
        {
          props.gearPercentage > 76
            ? <div className="prog bg-danger" role="progressbar" style={{width:props.gearPercentage+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{props.gearPercentage}%</div>
            : props.gearPercentage > 51
              ? <div className="prog bg-warning" role="progressbar" style={{width:props.gearPercentage+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{props.gearPercentage}%</div>
              : <div className="prog bg-success" role="progressbar" style={{width:props.gearPercentage+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{props.gearPercentage}%</div>
        }
        {/* <div className="prog" role="progressbar" style={{width:props.gearPercentage+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{props.gearPercentage}%</div> */}
      </div>

      <p> &nbsp; </p>

      <div className="card-foot">
        <Link to="#" className="btn btn-primary ml-3">Add to session</Link>
      </div>
    </div>
  </div>
)


export default GearCardAddActivity;
