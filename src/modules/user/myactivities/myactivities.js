import React, {Component} from 'react';
import UserNavbar from "./../navbar/usernavbar.js";
import {
  Link
} from 'react-router-dom';
import axios from 'axios';

const SearchBar = props => (
  <form>
    <input className="SearchBar" type="text" placeholder={props.PlaceHolder} >
      {/* on Change={(e)=> this.handleChange(e)} */}
    </input>
  </form>
)
const OneLineOfActivityInTable = props => (
  <tr>
    <td>
      <Link to={`/myactivities/${props.urlDetailActivity}`}>
        <img src={props.thumbnail} alt={props.title} height="100" width="100" />
      </Link>
    </td>
    <td>{props.title}</td>
    <td>{props.date}</td>
    <td>{props.distance} km</td>
    <td>{props.duration}</td>
    <td> {/* il faudra faire un map sur tous les gears */}
      <GearsFromOneActivity idToSearch={props.gears} gearsThumbnailUrl={props.gearsThumbnailUrl} />
    </td>
  </tr>

)

const GearsFromOneActivity = props => (
  <span>{props.idToSearch} <img className="gearsThumbnail ml-2" src={props.gearsThumbnailUrl} height="42" width="42" alt={props.idToSearch} /></span>
)

class MyActivities extends Component {
  constructor(props){
    super(props);
    this.state = {
      ActivityList: [],
      FilteredActivityList: []
    }
  }

  handleChange=(event)=>{

      switch(event.target.value){
        case("all"):
        this.setState(...this.state,{FilteredActivityList:this.state.ActivityList});
        break;

        case("udid_1"):
        this.setState(...this.state,{FilteredActivityList:this.state.ActivityList.filter(element => element.gear === "Running active shoes white" )});
        break;

        case("udid_2"):
        this.setState(...this.state,{FilteredActivityList:this.state.ActivityList.filter(element => element.gear === "Kiprun LD yellow black" )});
        break;

        case("udid_3"):
        this.setState(...this.state,{FilteredActivityList:this.state.ActivityList.filter(element => element.gear === "Running shoes Eliofeet" )});
        break;
      }
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/user/activities/")
    .then((response) => {
      this.setState({ActivityList: response.data,FilteredActivityList:response.data})
      console.log(this.state.ActivityList)
    });
  }


  render() {
    let activityList = "null"
    if (this.state.FilteredActivityList.length > 0){
      activityList= this.state.FilteredActivityList.map((activity,index) =>
        (<OneLineOfActivityInTable
          key={index}
          urlDetailActivity={activity.id}
          thumbnail={activity.thumbnail}
          title={activity.name}
          date={activity.start_date}
          distance={activity.distance}
          duration={activity.duration}
          gears={activity.gear}
          gearsThumbnailUrl={activity.gear_thumbnail}
        />)
      )
    }
    return (
      <div>
        <UserNavbar/>
      <div className="container big-margin">

        <div className="row justify-content-center">
          <h1>My activities</h1>
        </div>
        <div className="row mt-4">

          <div className="col-sm-12 ">
            <table className="table">
              <thead className="thead">
                <tr>
                  <th scope="col">Map</th>
                  <th scope="col">Title</th>
                  <th scope="col">Date</th>
                  <th scope="col">Distance</th>
                  <th scope="col">Duration</th>
                  <th scope="col">
                    <label for= "gears" className="mb-0" >Gears</label>
                    <select onChange={(event)=>this.handleChange(event)} name="gears" id="gears" className="ml-2">
                    <option value="all">All gears</option>
                    <option value="udid_1">Running active shoes white</option>
                    <option value="udid_2">Kiprun LD yellow black</option>
                    <option value="udid_3">Running shoes Eliofeet</option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody>
              {activityList}




                {/* il faudra faire un map sur toutes les activités de la personne */}
                {/* <OneLineOfActivityInTable urlDetailActivity="/myactivities/UUID1" thumbnail="/seeds/2.png" title="jog sunday" date="16-06-2018" distance="6" duration="00:35:12" gears="kip run sd2" gearsThumbnailUrl="https://www.decathlon.fr/media/848/8488654/tg_bb2e2925-bc88-4eef-8e4b-6ed57ae9eb6e.jpg"/>
                <OneLineOfActivityInTable urlDetailActivity="/myactivities/UUID2" thumbnail="/seeds/3.png" title="jog Friday" date="14-06-2018" distance="4" duration="00:25:20" gears="kip run sd" gearsThumbnailUrl="https://www.decathlon.fr/media/837/8379979/tg_e9c4845e-47cd-47d1-88c7-05ce22ae79b8.jpg"/> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default MyActivities;
