import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import withRouter from 'react-router';


// const AddFollowUpProduct = props => (
//
//     )

    class AddFollowUpProduct extends Component{
      constructor(props){
        super(props);
      }



      render(){
        return(
          <div className="row" id="container_advice">
            <h2>Add a product to follow up</h2>
            <Link to="/decathlonadmin/myproducts" className="big"><button type="button" className="btn btn-primary big ">+ Add product</button></Link>
          </div>
        )
      }
    }


export default (AddFollowUpProduct);
