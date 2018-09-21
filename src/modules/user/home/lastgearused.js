import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom';
import axios from 'axios';

class OneLastGearUsed extends Component {
  render() {
    return (
      <div className="row container_one_gear mb-4">
        <div className="ml-3 pic_one_gear"><img src={this.props.LastGearUsedImage} width="180px"/></div>
        <div className="infos_one_gear">
          <h3>{this.props.lastGearUsedTitle.slice(0,17)}</h3>

          <p>{this.props.distanceTotal} km     |     {this.props.session_nb} sessions    |     {this.props.duration}  </p>
          <div className="progress mt-0">
            {
              this.props.gearPercentage > 76
                ? <div className="prog bg-red" role="progressbar" style={{width:this.props.gearPercentage+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{this.props.gearPercentage}%</div>
                : this.props.gearPercentage > 51
                  ? <div className="prog bg-orange" role="progressbar" style={{width:this.props.gearPercentage+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{this.props.gearPercentage}%</div>
                  : <div className="prog bg-green" role="progressbar" style={{width:this.props.gearPercentage+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{this.props.gearPercentage}%</div>
            }
            {/* <div className="prog" role="progressbar" style={{width:this.props.gearPercentage+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{this.props.gearPercentage}%</div> */}
          </div>

          <div className="mt-4"><Link to={`/mylocker/${this.props.id}`}>See gear ></Link></div>
        </div>

        <hr></hr>
      </div>
    )
  }
}



class LastGearUsed extends Component {
  constructor(props){
    super(props);
    this.state = {
      lastgearsusedList:[]
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/user/lastgearsused/")
    .then((response) => {
      this.setState({lastgearsusedList: response.data})
    });
  }


  render() {
    let lastgearsusedList = "null"
    if (this.state.lastgearsusedList.length > 0){
      lastgearsusedList=this.state.lastgearsusedList.map((gearUse,index) =>
        (<OneLastGearUsed
          key={index}
          LastGearUsedImage={gearUse.image_path}
          gearPercentage={((gearUse.lifetime_progress/gearUse.lifetime_max)*100).toFixed(0)}
          lastGearUsedTitle={gearUse.title}
          distanceTotal={gearUse.lifetime_progress}
          session_nb={gearUse.session_nb}
          duration={gearUse.duration}
          id={gearUse.id}

        />)
      )
    }

    return (
      <div id="container_last_gears">
        <h2>Last gears used</h2>
        <h5 className="pb-3">Last 3 gears you used</h5>
        {/* map sur les 3 plus utilisés */}
        {lastgearsusedList}
        <Link className="biglink" to="/mylocker">Go to my locker ></Link>
      </div>
    )
  }}

export default LastGearUsed;
