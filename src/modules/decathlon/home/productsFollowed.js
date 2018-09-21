import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import axios from 'axios';


class OneProductFollowed extends Component {
  render() {
    return (
      <div className="row container_one_gear mb-4">
        <div className="ml-3 pic_one_gear"><img src={this.props.OneProductFollowedImage} width="180px"/></div>
        <div className="infos_one_gear">
          <h3>{this.props.OneProductFollowedId}</h3>

          <p>{this.props.distTotal} km</p>
          <p>{this.props.nbSessions} sessions</p>
          <p>{this.props.nbUsers} users</p>
        </div>

        <hr></hr>
      </div>
    )
  }
}

class ProductsFollowed extends Component {
  constructor(props){
    super(props);
    this.state = {
      productsList: []
    }
  }
  componentDidMount() {
    axios.get("http://localhost:8080/api/dkt/topproducts")
    .then((response) => {
      this.setState({productsList: response.data})
      // console.log(this.state.activityDetail)
    });
  }

  render() {
    let productsList = "null"
    if (this.state.productsList.length > 0){
      productsList= this.state.productsList.map((product,index) =>
        (<OneProductFollowed OneProductFollowedId={product.title} OneProductFollowedImage={product.image_path} nbUsers={product.nb_users} distTotal={product.dist_total} nbSessions={product.nb_sessions}
         />
      )
      )
    }
    return (
      <div id="container_followed_gears">
        <h2>TOP PRODUCTS</h2>
        

        {productsList}

        <Link className="biglink" to="/decathlonadmin/myproducts">Go to my products ></Link>

      </div>
    )
  }}

export default ProductsFollowed;
