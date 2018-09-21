import React, {Component} from 'react'
import UserNavbar from "./../navbar/usernavbar.js"
import DisplayProduct from "./../cards/productCard.js"
import DisplayGear from "./../cards/gearCard.js"
import axios from 'axios';


class MyLocker extends Component {
  constructor(props){
    super(props);
    this.state = {
      lockerList:[]
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/user/gears/")
    .then((response) => {
      this.setState({lockerList:response.data})
      console.log(this.state.lockerList)
    });
  }


  render() {
    let lockerList = "null"
    if (this.state.lockerList.length > 0){
      lockerList=this.state.lockerList.map((gear,index) =>
        (<DisplayGear
          key={index}
          id={gear.id}
          titleCard={gear.title}
          gearPercentage={((gear.lifetime_progress/gear.lifetime_max)*100).toFixed(0)}
          url_src={gear.image_path}
        />)
      )
    }

    return (
      <div>
        <UserNavbar/>
        <div className='container big-margin'>
          <h1>My locker</h1>
          <div className="col-12 container_gears">

            {lockerList}


          </div>
          <div id="container_add_products">
            <h1>+ Add a product</h1>

            <form>
              <input type="search" className="input" placeholder="Search a product..."/>
            </form>


            <div className="col-12 container_products">
              <DisplayProduct
                titleCard="B'TWIN MISTIGIRL 300 KIDS"
                url_src="/pictures/veloKid.jpg"/>
              <DisplayProduct
                titleCard="ARTENGO PR830 POWER PADEL RACKET"
                url_src="/pictures/padel.jpg"/>
              <DisplayProduct
                titleCard="DOMYOS 500 WOMEN'S CARDIO TRAINING"
                url_src="/pictures/fitness.jpg"/>
            </div>
          </div>
        </div>
      </div>
    )
  }}

export default MyLocker;
