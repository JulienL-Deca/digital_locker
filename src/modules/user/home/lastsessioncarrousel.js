import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';


class OneCarrouselItemActive extends Component {
  render(){
    return(
      <div className="carousel-item active">
        <img className="d-block w-100" src="/seeds/2.png" alt={this.props.title} />
        <Link to={this.props.activityUrl}>
        <div className="testpouet">
          <div className="carousel-caption d-none d-md-block">
            <h4>{this.props.title}</h4>
            <p>{this.props.caption}</p>
          </div>
        </div>
        </Link>
      </div>
    )
  }
}

class OneCarrouselItemInactive extends Component {
  render(){
    return(
      <div className="carousel-item">
        <img className="d-block w-100" src={this.props.image_path} alt={this.props.title} />
        <Link to={this.props.activityUrl}>
          <div className="testpouet">
            <div className="carousel-caption d-none d-md-block">
              <h4>{this.props.title}</h4>
              <p>{this.props.caption}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}


class LastSessionCarrousel extends Component {
  render() {
    return (
      <div className="row" id="container_carousel">

          <h2>last sessions</h2>

          <div id="carousel3LastSessions" className="carousel slide" data-ride="carousel" data-interval="3000">
            <ol className="carousel-indicators">
              <li data-target="#carousel3LastSessions" data-slide-to="0" className="active"></li>
              <li data-target="#carousel3LastSessions" data-slide-to="1"></li>
              <li data-target="#carousel3LastSessions" data-slide-to="2"></li>
              <li data-target="#carousel3LastSessions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">

              <OneCarrouselItemActive image_path="/seeds/2.png" title="COURSE#1" caption="2018-06-15 | 12 km | 43'" activityUrl="/myactivities/061c6b4c-0461-4cac-a53c-6bbf81a45999" />
              <OneCarrouselItemInactive image_path="/seeds/3.png" title="COURSE#2" caption="2018-06-17 | 15 km | 50'" activityUrl="/myactivities/061c6b4c-0461-4cac-a53c-6bbf81a45888" />
              <OneCarrouselItemInactive image_path="/seeds/4.png" title="COURSE#3" caption="2018-06-22 | 11 km | 40'"  activityUrl="/myactivities/061c6b4c-0461-4cac-a53c-6bbf81a45111" />
              <OneCarrouselItemInactive image_path="/seeds/7.png" title="COURSE#4" caption="2018-06-27 | 13 km | 48'"  activityUrl="/myactivities/061c6b4c-0461-4cac-a53c-6bbf81a45222" />

            </div>
            <a className="carousel-control-prev" href="#carousel3LastSessions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel3LastSessions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

      </div>
    )
  }
}

export default LastSessionCarrousel;
