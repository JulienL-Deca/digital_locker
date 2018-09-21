import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

// FOR CONNCETING STORE
import {connect} from 'react-redux';
import {mapStateToProps} from './../../store/selector.js';

//USEFUL FOR GEONAUTE ACCOUNT CONNECT
import GeonauteAccount from './../geonauteaccount/geonauteaccount.js'

// HOME ROUTES
import UserLogin from './../user/login/userlogin.js';
import UserHome from './../user/home/userhome.js';
import MyActivities from './../user/myactivities/myactivities.js';
import DetailOneActivity from './../user/myactivities/myactivitiesdetail'
import MyLocker from './../user/mylocker/mylocker.js';
import MyLockerDetails from './../user/mylocker/mylockerdetails.js';

// DECATHLON ROUTES
import DecathlonLogin from './../decathlon/login/decathlonlogin.js';
import DecathlonHome from './../decathlon/home/decathlonhome.js';
import DecathlonMyProducts from './../decathlon/myproducts/decathlonmyproducts.js';
import DecathlonMyProductsStats from './../decathlon/myproductsstats/decathlonmyproductsstats.js';
import DecathlonMyFeedbacks from './../decathlon/myfeedbacks/decathlonmyfeedbacks.js';

class LocalRouter extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          {/* ROUTE FOR SPORTS USER */}
          <Switch>

            {/* POUR CHAQUE ROUTE SI LE GARS EST LOGGED ON VA VERS LA ROUTE SINON VERS LOGIN */}
            <Route exact path="/" render={() => (
              this.props.loggedInUser ? (
                <Redirect to="/home"/>
              ) : (
                <UserLogin/>
              )
            )}/>

            {/* !! NE PAS SUPPRIMER !! */}
            <Route exact path="/test" render={() => (
              <GeonauteAccount/>
            )}/>

            <Route exact path="/home" render={() => (
              this.props.loggedInUser ? (
              <UserHome/>
              ) : (
                <UserLogin/>
              )
            )}/>

            <Route exact path="/myactivities" render={() => (
              this.props.loggedInUser ? (
              <MyActivities/>
              ) : (
                <UserLogin/>
              )
            )}/>

            <Route exact path="/myactivities/:UUID" render={(routerProps) => (
              this.props.loggedInUser ? (
                <DetailOneActivity {...routerProps} />
              ) : (
                <UserLogin/>
              )
            )}/>

            <Route exact path="/mylocker/:UUID" render={(routerProps) => (
              this.props.loggedInUser ? (
                <MyLockerDetails {...routerProps}/>
              ) : (
                <UserLogin/>
              )
            )}/>

            <Route exact path="/mylocker" render={() => (
              this.props.loggedInUser ? (
                <MyLocker/>
              ) : (
                <UserLogin/>
              )
            )}/>





            {/* ROUTE FOR DECATHLON MEMBERS */}

            <Route exact path="/decathlonadmin" render={() => (
              this.props.loggedIn ? (
                <Redirect to="/decathlonadmin/home"/>
              ) : (
                <DecathlonLogin/>
              )
            )}/>

            <Route exact path="/decathlonadmin/home" render={() => (
              this.props.loggedIn ? (
              <DecathlonHome/>
              ) : (
                <DecathlonLogin/>
              )
            )}/>

            <Route exact path="/decathlonadmin/myproducts" render={() => (
              this.props.loggedIn ? (
              <DecathlonMyProducts/>
              ) : (
                <DecathlonLogin/>
              )
            )}/>

            <Route exact path="/decathlonadmin/myproductsstats" render={() => (
              this.props.loggedIn ? (
              <DecathlonMyProductsStats/>
              ) : (
                <DecathlonLogin/>
              )
            )}/>

            <Route exact path="/decathlonadmin/myfeedbacks" render={() => (
              this.props.loggedIn ? (
              <DecathlonMyFeedbacks/>
              ) : (
                <DecathlonLogin/>
              )
            )}/>

            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      404 not found:
    </h3>
    <h5>No match for <code>{location.pathname}</code></h5>
    <h6><Link to="/">go back to / (home)</Link></h6>
  </div>
);


export default connect(mapStateToProps, null)(LocalRouter);
