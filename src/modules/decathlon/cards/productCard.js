import React, {Component} from 'react';

const DisplayProduct = props => (
  <div className="card">
    <img className="card-productCard" src={props.url_src} alt="Card image cap"></img>
    <hr></hr>
    <div className="card-body">
      <h3>{props.titleCard}</h3>
      <p id="card-text" className="pb-3">{props.description}</p>
      <button className="btn btn-primary ml-3" onClick={function(){
        window.document.getElementById("modal_form_dkt_add").style.display="block";
      }}>+ Add product</button>
    </div>
  </div>
)


export default DisplayProduct;



{/* https://www.decathlon.fr/media/848/8487954/big_51c9cfba-da1f-4172-afe9-d9ccba0bbe22.jpg */}
