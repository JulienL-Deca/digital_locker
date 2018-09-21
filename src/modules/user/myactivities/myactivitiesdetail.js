import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import UserNavbar from "./../navbar/usernavbar.js";
import DisplayProduct from "./../cards/productCard.js";
import DisplayGear from "./../cards/gearCard.js";
import GearCardAddActivity from "./../cards/gearCardAddActivity.js";
import axios from 'axios';

// class DashboardOneActivity extends Component {
//   render() {
//     let lockerListA = "null";
//
//     if (this.props.lockerlist.length > 0) {
//       lockerListA = this.props.lockerlist.map((gear, index) => {
//         let toto = (gear.lifetime_progress/gear.lifetime_max)*100;
//         return <GearCardAddActivity url_src={gear.image_path} titleCard={gear.title} gearPercentage={toto}/>
//       })
//     }
//
//     return (
//       <div className="row justify-content-around">
//         <div className="row mt-4">
//           <div className="col-4" id="test-flex">
//             <img src={this.props.thumbnail} width="100%;" height="auto;" alt="thumbnail session" />
//           </div>
//
//           <div className="col-8 container_data_activity">
//             <div id="row_data_1">
//               <span><i className="far fa-clock"></i> {this.props.duration} mn</span><span><i className="fas fa-road"></i> {this.props.distance} km</span><span><i className="far fa-calendar-alt"></i>{this.props.date}</span>
//             </div>
//
//             <div id="row_data_2">
//               <span><i className="fas fa-tachometer-alt"></i> ~{(this.state.activityDetail.distance/(this.state.activityDetail.duration/60)).toFixed(2)} km/h</span><span><i className="fas fa-burn"></i> {this.props.lostcalories} Kcal</span><span><i className="fas fa-chart-line"></i> {this.props.elevation} m</span>
//             </div>
//
//           </div>
//           {(this.props.gear !== "")?
//             (
//               <div id="container_add_products">
//                 <h1>Gears for this session</h1>
//                 <div className="col-12 container_products">
//                   <DisplayGear url_src={this.props.gear_thumbnail} titleCard={this.props.gear} gearPercentage={this.props.gear_lifetime_progress}/>
//                 </div>
//               </div>
//             )
//           :<p></p>
//           }
//
//           <div id="container_add_products">
//             <h1>+ Add a gear to this session</h1>
//             <input type="search" className="input" placeholder="Search a product..."/>
//             <div className="col-12 container_products">
//
//               {lockerListA}
//
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

class DetailOneActivity extends Component {
  constructor(props){
    super(props);
    this.state = {
      activityDetail: [],
      lockerList: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/user/activities/${this.props.match.params.UUID}`)
    .then((response) => {
      this.setState({activityDetail: response.data})
      // console.log(this.state.activityDetail)
    });

    axios.get("http://localhost:8080/api/user/gears/")
    .then((response) => {
      this.setState({lockerList: response.data})
      // console.log(this.state.lockerList)
    });
  }


  gearLifetimePercent () {
    const toto = (this.state.activityDetail.gear_lifetime_progress/this.state.activityDetail.gear_lifetime_max)*100;
    // console.log(this.state.activityDetail.gear_lifetime_progress);
    // console.log(this.state.activityDetail.gear_lifetime_max);
    // console.log(toto);
    return (toto);
  }
  addOneGearToActivity (props) {
    this.setState(
      { activityDetail: {
        ...this.state.activityDetail,
        gear: props.title,
        gear_lifetime_progress: props.lifetime_progress+this.state.activityDetail.distance,
        gear_thumbnail: props.image_path,
        gear_lifetime_max: props.lifetime_max,
        gear_id: props.gear_id
        }
      }
    );
  }
  render() {
    let lockerListA = "null";
    if (this.state.lockerList.length > 0) {
      lockerListA = this.state.lockerList.map((gear, index) => {
        let toto = (gear.lifetime_progress/gear.lifetime_max)*100;
        // return <GearCardAddActivity key={index} url_src={gear.image_path} titleCard={gear.title} gearPercentage={toto.toFixed(2)}/>
        return (
          <div className="card">
            <img className="card-head" src={gear.image_path} alt="Card image cap"></img>
            <hr></hr>
            <div className="card-body">

              <h3>{gear.title}</h3>
              <div className="progress mt-0">
                {
                  toto.toFixed(0) > 76
                    ? <div className="prog bg-red" role="progressbar" style={{width:toto.toFixed(0)+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{toto.toFixed(0)}%</div>
                    : toto.toFixed(0) > 51
                      ? <div className="prog bg-orange" role="progressbar" style={{width:toto.toFixed(0)+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{toto.toFixed(0)}%</div>
                      : <div className="prog bg-green" role="progressbar" style={{width:toto.toFixed(0)+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{toto.toFixed(0)}%</div>
                }
                {/* <div className="prog" role="progressbar" style={{width:toto.toFixed(2)+"%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{toto.toFixed(2)}%</div> */}
              </div>

              <p> &nbsp; </p>

              <div className="card-foot">
                <Link to="#" className="btn btn-primary ml-3"
                  onClick={
                    (oneGear) =>
                    this.addOneGearToActivity({
                      gear_id: gear.id,
                      title: gear.title,
                      lifetime_progress: gear.lifetime_progress,
                      image_path: gear.image_path,
                      lifetime_max: gear.lifetime_max
                    })
                  }
                >Add to the session</Link>
              </div>
            </div>
          </div>
        )
      })
    }

    return (
      <div>
        <UserNavbar/>
        <div className="container big-margin">
          <div className="row justify-content-center">
            <h1>{this.state.activityDetail.name}</h1>
          </div>


          <div className="row justify-content-around">
            <div className="row mt-4">
              <div className="col-4" id="test-flex">
                <img src={this.state.activityDetail.thumbnail} width="100%;" height="auto;" alt="thumbnail session" />
              </div>

              <div className="col-8 container_data_activity">
                <div id="row_data_1">
                  <span><i className="far fa-clock"></i> {this.state.activityDetail.duration} mn</span><span><i className="fas fa-road"></i> {this.state.activityDetail.distance} km</span><span><i className="far fa-calendar-alt"></i> {this.state.activityDetail.start_date}</span>
                </div>

                <div id="row_data_2">
                  <span><i className="fas fa-tachometer-alt"></i> ~{(this.state.activityDetail.distance/(this.state.activityDetail.duration/60)).toFixed(0)} km/h</span><span><i className="fas fa-burn"></i> {this.state.activityDetail.lost_calories} Kcal</span><span><i className="fas fa-chart-line"></i> {this.state.activityDetail.elevation} m</span>
                  </div>

                  </div>
                  {(this.state.activityDetail.gear !== "")?
                    (
                      <div id="container_add_products">
                        <h1>Gears for this session</h1>
                        <div className="col-12 container_products">
                          <DisplayGear
                            id={this.state.activityDetail.gear_id}
                            url_src={this.state.activityDetail.gear_thumbnail} titleCard={this.state.activityDetail.gear} gearPercentage={this.gearLifetimePercent().toFixed(0)}/>
                        </div>
                      </div>
                    )
                  :<p></p>
                  }

                  <div id="container_add_products">
                    <h1>+ Add a gear to this session</h1>
                    <input type="search" className="input" placeholder="Search a product..."/>
                    <div className="col-12 container_products">

                      {lockerListA}

                    </div>
                  </div>
                </div>
              </div>

              {/* <DashboardOneActivity
                thumbnail={this.state.activityDetail.thumbnail}
                duration={this.state.activityDetail.duration}
                distance={this.state.activityDetail.distance}
                date={this.state.activityDetail.start_date}
                averageSpeed={(this.state.activityDetail.distance/(this.state.activityDetail.duration/60)).toFixed(2)}
                calories={this.state.activityDetail.lost_calories}
                elevation={this.state.activityDetail.elevation}
                gear={this.state.activityDetail.gear}
                gear_thumbnail={this.state.activityDetail.gear_thumbnail}
                gear_lifetime_progress={this.gearLifetimePercent()}

                lockerlist={this.state.lockerList}
              /> */}

        </div>
      </div>
    )
  }
}

export default DetailOneActivity;
