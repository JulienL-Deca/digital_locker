import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

class CustomizedAdvice extends Component {

  render() {
    return (
      <div className="row" id="container_advice">
        <h2>Advice for you!</h2>
        <div id="subcontainer_advice" >
          <div className="pic_advice"><img src={this.props.CustomizedAdvicePic} width="200px"/></div>
          <div className="infos_advice">
            <h3>Clean your shoes{this.props.CustomizedAdviceTitle}</h3>
            <p>Runners have a special relationship with their shoes. They accompany the runner throughout their training sessions and races. {this.props.CustomizedAdviceDescription}</p>

            <div className="mt-4"><Link to="/mylocker/26c52ad0-1ebc-44f6-87d5-71cd908fa7e8">Read advice ></Link></div>
          </div>

          <hr></hr>
        </div>


      </div>
    )
  }}

export default CustomizedAdvice;
