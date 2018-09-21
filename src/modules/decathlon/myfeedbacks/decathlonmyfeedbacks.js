import React, {Component} from 'react'
import DecathlonNavbar from "./../navbar/decathlonnavbar.js"
import {
  Link
} from 'react-router-dom';

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
    <img src={props.thumbnail} alt={props.title} className="mr-3" height="100" width="100" />
      {props.feedbackId}
    </td>
    <td>{props.userName}</td>
    <td>{props.date}</td>
    <td className="td_feedback">{props.feedback} km</td>
    <td>

      {props.answered ? <span><i className="far fa-check-circle mr-2"></i>Answered</span>
        :
        <a href="#" onClick={function(){document.getElementById('modal').style.display='block'}}>Answer</a>
      }
    </td>
  </tr>

)

class DecathlonMyFeedbacks extends Component {
  render() {
    return (

      <div>

          <DecathlonNavbar />
      <div className="container big-margin">

        <div className="row justify-content-center">
          <h1>My feedbacks</h1>
        </div>
        <div className="row mt-4">

          <div className="col-sm-12 ">
            <table className="table">
              <thead className="thead">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Username</th>
                  <th scope="col">Date</th>
                  <th scope="col">Feedback</th>
                  <th scope="col">Status</th>

                </tr>
              </thead>
              <tbody>
                {/* il faudra faire un map sur toutes les activités de la personne */}
                <OneLineOfActivityInTable feedbackId="1232" userName="Nico" thumbnail="/seeds/url_image_dkt1.jpg" feedback="Great product, light and robust." date="16-06-2018" gears="kip run sd2" gearsThumbnailUrl="https://www.decathlon.fr/media/848/8488654/tg_bb2e2925-bc88-4eef-8e4b-6ed57ae9eb6e.jpg" answered={1}/>
                <OneLineOfActivityInTable feedbackId="34786" userName="Fred" thumbnail="/seeds/url_image_dkt2.jpg" feedback="Nice product though I quite sweayt in it by very hot weather" date="14-06-2018" gears="kip run sd" gearsThumbnailUrl="https://www.decathlon.fr/media/837/8379979/tg_e9c4845e-47cd-47d1-88c7-05ce22ae79b8.jpg" answered={0}/>
              </tbody>
            </table>
          </div>
        </div>
      </div>

        <div id="modal">
          <div className="col-6 offset-3 lightbox p-0">
            <div className="header_lightbox">
              <div className="ml-auto" onClick={()=>{document.getElementById('modal').style.display='none'}}><i className="fas fa-times clickable"></i></div>
            </div>
            <h2>Answer feedback</h2>
            <div id="lb_content_feedback">
              <div id="feedback_user">
              <h4>Added by Fred on 14.06.2018</h4>
              <hr></hr>
              <p>Hi! I was very surprised by the quality of the product. Very good value for money. But I wish there were other colors...</p>
            </div>
              <form>
                <textarea className="tarea_lightbox mt-20" autofocus placeholder="Type your answer here"></textarea>
                <button className="btn btn-primary m-0 btn_submit_tarea" onClick={()=>{document.getElementById('modal').style.display='none'}}>Send my answer</button>
              </form>

            </div>
          </div>
        </div>

      </div>


    )
  }
}

export default DecathlonMyFeedbacks;
