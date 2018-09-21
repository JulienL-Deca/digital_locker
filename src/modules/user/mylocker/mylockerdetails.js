import React, {Component} from 'react'
import UserNavbar from "./../navbar/usernavbar.js"
import axios from 'axios';

import {
  Link,
} from 'react-router-dom';


class MyLockerDetails extends Component {

  constructor(props){
    super(props);

    this.state = {
      gearDetails:[],
    }
  }

  componentDidMount() {
  console.log("Récup dans URL: "+this.props.match.params.UUID);
    axios.get(`http://localhost:8080/api/user/gears/${this.props.match.params.UUID}`)
    .then((response) => {
      console.log(response.data)
      this.setState({gearDetails:response.data});
      console.log(this.state.gearDetails);
    });
  }


  render() {
    return (
      <div>
        <UserNavbar/>
        <div className='container big-margin'>

          <div id="header_gear_details">
            <h1>{this.state.gearDetails.title}</h1>

            <div id="actions_gear_details">
              <a href="#"><i className="far fa-trash-alt"></i> Remove from my locker</a> | <a href="#"><i className="far fa-comments"></i> Give feedback</a>
            </div>
          </div>

          <div className="row mr-0 ml-0">
            <div className="col-4 m-0 p-0 container_pic_gear">
              <img src={this.state.gearDetails.image_path} width="100%" height="auto" alt=""/>
            </div>

            <div className="col-8 container_info_gear">
              <h2>{this.state.gearDetails.lifetime_progress} KM | {this.state.gearDetails.session_nb} sessions | {this.state.gearDetails.duration}</h2>
              <div className="progress mt-0 mb-3">
                {
                  (this.state.gearDetails.lifetime_progress*100/this.state.gearDetails.lifetime_max) > 76
                    ? <div className="prog bg-red" role="progressbar" style={{width:(this.state.gearDetails.lifetime_progress*100/this.state.gearDetails.lifetime_max)+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{(this.state.gearDetails.lifetime_progress*100/this.state.gearDetails.lifetime_max).toFixed(0)}%</div>
                    : (this.state.gearDetails.lifetime_progress*100/this.state.gearDetails.lifetime_max) > 51
                      ? <div className="prog bg-orange" role="progressbar" style={{width:(this.state.gearDetails.lifetime_progress*100/this.state.gearDetails.lifetime_max)+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{(this.state.gearDetails.lifetime_progress*100/this.state.gearDetails.lifetime_max).toFixed(0)}%</div>
                      : <div className="prog bg-green" role="progressbar" style={{width:(this.state.gearDetails.lifetime_progress*100/this.state.gearDetails.lifetime_max)+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{(this.state.gearDetails.lifetime_progress*100/this.state.gearDetails.lifetime_max).toFixed(0)}%</div>
                }
                {/* <div className="prog" role="progressbar" style={{width:(this.state.gearDetails.lifetime_progress*100/this.state.gearDetails.lifetime_max)+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> */}
              </div>
          <Link to="/myactivities" className="mt-3">See all activities done with this gear ></Link>
          <hr></hr>
          <h3>Designed for: {this.state.gearDetails.lifetime_max} km | {this.state.gearDetails.useconditions}</h3>
          <p style={{fontStyle:'italic',marginBottom:'20px'}}>{this.state.gearDetails.word}</p>
          <span><img src={this.state.gearDetails.pic_PM} width="80px" style={{borderRadius:'100px',marginRight:'10px'}} alt=""/>{this.state.gearDetails.product_manager}</span>
          </div>
        </div>

          <div id="container_feedback" className="col-12 margTop">
            <h1>Give a feedback</h1>
            <div><textarea maxLength='250' placeholder="Type your feedback here..." className="col-12 text-area p-3"></textarea></div>
            <button className="btn btn-primary col-12">Envoyer</button>
          </div>

          <h1 style={{textAlign:'left',marginTop:'50px'}}>Advice for you: {this.state.gearDetails.advice_title}</h1>
          <div id="container_gear_advice" className="col-12">
            <img src={this.state.gearDetails.advice_pic} alt="" style={{float:'left',padding:'0px 20px 0px 0px'}}/>
            <p style={{padding:'20px'}}>
             {this.state.gearDetails.advice_content}
            </p>
          </div>
        </div>
      </div>
    )
  }}

export default MyLockerDetails;
