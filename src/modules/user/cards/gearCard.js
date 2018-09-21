import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

const _DisplayGear = props => (
  <div className="card">
    <img className="card-head" src={props.url_src} alt="Card image cap"></img>
    <hr></hr>
    <div className="card-body">

      <h3>{props.titleCard}</h3>
      <div className="progress mt-0">
        {
          props.gearPercentage > 76
            ? <div className="prog bg-red" role="progressbar" style={{width:props.gearPercentage+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{props.gearPercentage}%</div>
            : props.gearPercentage > 51
              ? <div className="prog bg-orange" role="progressbar" style={{width:props.gearPercentage+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{props.gearPercentage}%</div>
              : <div className="prog bg-green" role="progressbar" style={{width:props.gearPercentage+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{props.gearPercentage}%</div>
        }
        {/* <div className="prog" role="progressbar" style={{width:props.gearPercentage+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{props.gearPercentage}%</div> */}
      </div>

      <p id="card-text" className="pb-3 pt-2">{props.description}</p>

      <div className="card-foot">
        <a href="#"><i className="far fa-trash-alt"/></a>
        <Link to={`/mylocker/${props.id}`} className="btn btn-primary ml-3" >See details</Link>
      </div>
    </div>
  </div>
)


export default _DisplayGear;
