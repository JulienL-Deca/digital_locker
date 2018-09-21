import React, {Component} from 'react'
import DecathlonNavbar from "./../navbar/decathlonnavbar.js"
import DisplayProduct from "./../cards/productCard.js"
import DisplayGear from "./../cards/gearCard.js"
import axios from 'axios';

class MyProductsFollowed extends Component {
  constructor(props){
    super(props);
    this.state = {
      productList:[]
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/dkt/myproducts/")
    .then((response) => {
      this.setState({productList: response.data})
      console.log(this.state.lockerList)
    });
  }


  render() {
    let productList = "null"
    if(this.state.productList.length > 0){
      productList=this.state.productList.map((product,index) =>
        (<DisplayGear
          key={index}
          titleCard={product.title.slice(0,17)}
          url_src={product.image_path}
        />)
    )
    }
    return (
      <div>
        <DecathlonNavbar/>
        <div className='container big-margin'>
          <h1>My products</h1>
          <div className="col-12 container_gears">
            {productList}
          </div>
            <div id="container_add_products">
              <h1>+ Add a product</h1>

            <form>
              <input type="search" className="input" placeholder="Search a product..."/>
            </form>


            <div className="col-12 container_products">
              <DisplayProduct titleCard="VELO ENFANT 20 POUCES MISTIGIRL 300 SINGLE BLANC" description="Conçu pour les enfants de 6 à 8 ans (1m20 à 1m35)." url_src="/pictures/veloKid.jpg"/>
              <DisplayProduct titleCard="RAQUETTE DE PADEL PR830 POWER ROUGE" description="Conçu pour le joueur de Padel confirmé qui cherche précision et légèreté" url_src="/pictures/padel.jpg"/>
              <DisplayProduct titleCard="CHAUSSURES FITNESS CARDIO 500" description="Conçu pour Le sportif qui fait du fitness cardio-training à intensité moyenne 2 à 3 fois par semaine." url_src="/pictures/fitness.jpg"/>
            </div>
          </div>
        </div>





  {/* ////////////FORMULAIRE/////////// */}


        <div id="modal_form_dkt_add">
          <div className="col-6 offset-3 lightbox p-0">
              <div className="header_lightbox">
                <div className="ml-auto" onClick={()=>{document.getElementById('modal_form_dkt_add').style.display='none'}}>
                  <i className="fas fa-times clickable">
                  </i>
                </div>
              </div>

              <h2>  <img src="/pictures/veloKid.jpg" className="mr-3" width="50px;"/>Add product information</h2>


              <div id="lb_content_info">

                <form>

                  <p className="line_form">
                    <label className="lab"  htmlFor="product_title">Product title</label><br></br>
                    <input className="big_input" type="text" name="product_title" id="product_title" value="VELO ENFANT 20 POUCES MISTIGIRL 300 SINGLE BLANC" autofocus />
                  </p>

                  <p className="line_form">
                    <label className="lab" htmlFor="decathlon_id">Decathlon ID</label><br></br>
                    <input className="big_input" type="text" name="decathlon_id" id="decathlon_id" value="8339936" />
                  </p>

                  <p className="line_form">
                    <label className="lab"  htmlFor="gender">Product made for</label><br></br>
                     <input type="radio" name="gender" value="man" id="man" /> <label htmlFor="medium25-40">Man</label>
                     <input className="ml-3" type="radio" name="gender" value="woman" id="woman" /> <label htmlFor="medium25-40">Woman</label>
                  </p>

                  <p className="line_form">
                    <label className="lab" htmlFor="max_dist">Max distance for this product:</label> <br></br>
                    <input className="big_input" type="number" name="max_dist"/>
                  </p>

                  <p className="line_form">
                    <label className="lab">Temperature of use in °C</label> <br></br>
                    <input className="small_input" type="number" placeholder="min"/><input className="small_input" type="number" placeholder="max"/>
                  </p>

                  <p className="line_form">
                    <label className="lab">Max sessions number</label> <br></br>
                    <input className="small_input" type="number"/>
                  </p>

                  <p className="line_form">
                    <label className="lab">Weight in kg</label> <br></br>
                    <input className="small_input" type="number" placeholder="min"/><input type="number" placeholder="max"/>
                  </p>

                  <p className="line_form">
                    <label className="lab">Advice</label> <br></br>
                    <input className="big_input" type="text" placeholder="Advice ID"/>
                  </p>

                  <a href="#" className="btn btn-primary mt-4 mb-4 big_input" onClick={()=>{document.getElementById('modal_form_dkt_add').style.display='none'}}>Submit my product</a>


                </form>
              </div>


          </div>
      </div>




      </div>
    )
  }}

export default MyProductsFollowed;
