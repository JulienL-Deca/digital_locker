import React, {Component} from 'react';
import axios from 'axios';
import DecathlonNavbar from './../navbar/decathlonnavbar.js';
import {
  Link,
  NavLink
} from 'react-router-dom';

const ProductsStatsRow1 = props => (
    <div id="stats_data_1">
      <span><i className="fas fa-user-tag"/>
      <div className="info1">Users</div>
      <div className="info2">{props.nb_users}</div>

      </span>
      <span><i className="fas fa-transgender"/>
        <div className="info1">Gender</div>
        <div className="info2">{props.percent_male}% men</div>
        <div className="info2">{props.percent_female}% women</div>
      </span>
      <span><i className="far fa-clock"/>
        <div className="info1">Duration</div>
        <div className="info2">  max: {props.dur_max}</div>
        <div className="info2">  avr: {props.dur_avr}</div>
        <div className="info2">  min: {props.dur_min}</div>
      </span>
    </div>
)
const ProductsStatsRow2 = props => (
    <div id="stats_data_2">
      <span><i className="fas fa-chart-pie"/>
        <div className="info1">Age</div>
        <div className="info2">  18 &lt; <b>{props.age_18_25}%</b> &lt; 25</div>
        <div className="info2">  26 &lt; <b>{props.age_26_45}%</b> &lt; 45</div>
        <div className="info2">  46 &lt; <b>{props.age_46_55}%</b> &lt; 46</div>
        <div className="info2">  56 &lt; <b>{props.age_56}%</b></div>
      </span>
      <span><i className="fas fa-road"/>
        <div className="info1">Distance</div>
        <div className="info2"> max: {props.dist_max}km</div>
        <div className="info2"> avr: {props.dist_avr}km</div>
        <div className="info2"> min: {props.dist_min}km</div>
      </span>
      <span><i className="fas fa-weight"/>
        <div className="info1">Weight (kg)</div>
        <div className="info2">  <b>{props.weight_50}%</b> &lt; 50</div>
        <div className="info2">  51 &lt; <b>{props.weight_51_70}%</b> &lt; 70</div>
        <div className="info2">  71 &lt; <b>{props.weight_71_90}%</b> &lt; 90</div>
        <div className="info2">  91 &lt; <b>{props.weight_91}%</b></div>
      </span>
    </div>
)

class DecathlonMyProductsStats extends Component {
  constructor(props){
    super(props);
    this.state = {
      ProductsStats: [],
      MyProductsList: [],
      selectedProductId: null
    }
  }

  getStatsForAProduct(props){
    console.log(props);
    const idProduct = props || "5bbda893-efa4-48bc-a625-42c54a42f74d";
    axios.get(`http://localhost:8080/api/dkt/myproducts/${idProduct}/stats`)
    .then((response) => {
      this.setState({ProductsStats: response.data})
    });
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/dkt/myproducts")
    .then((response) =>
      this.setState({MyProductsList: response.data})
    );
    // .then(this.getStatsForAProduct(this.state.MyProductsList[0].id));
  }

  convertArrayOfObjectsToCSV(args) {
    let result, keys, columnDelimiter, lineDelimiter, data, oneLine;
    data = args.data || null;
      if (data === null || !data.id) {
          return null;
      }
// console.log("dans convertArrayOfObjectsToCSV");
// console.log(data);
    columnDelimiter = ',';
    lineDelimiter = '\n';

    keys = Object.keys(data);
    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    oneLine = '';
    keys.forEach(oneKey => {
      oneLine += data[oneKey];
      oneLine += columnDelimiter;
    })
    result += oneLine + lineDelimiter;
// console.log(result);
    return result;
  }

  downloadCSV = (args) => {
    // https://halistechnology.com/2015/05/28/use-javascript-to-export-your-data-as-csv/
    let data, filename, link;
// console.log("dans downloadCSV");
    let csv = this.convertArrayOfObjectsToCSV({
        data: this.state.ProductsStats
    });
// console.log("apres appel convertArrayOfObjectsToCSV");
    if (csv == null) return;
// console.log(args);
    filename = args || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
      csv = 'data:text/csv;charset=utf-8,' + csv;
    }

    data = encodeURI(csv);

    link = document.getElementById('downloadAllData');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
  }

  listOfProducts = () => {
    let listOfProds = "null";
    if (this.state.MyProductsList.length > 0){
      listOfProds = this.state.MyProductsList.map((product,index) => {
        let className = "container_one_gear mb-4";
        if (this.state.selectedProductId === product.id) {
          className = "container_one_gear mb-4 gearselected";
        }
        return (
          <div className={className} id="one_gear_cont" onClick={
              (file) => {
                // document.getElementById("one_gear_cont").style.backgroundColor="red";
              //  document.getElementById("one_gear_cont").style.outlineOffset="- 1px";
                this.setState({selectedProductId: product.id})
                this.getStatsForAProduct(product.id);
              }
            } >

            <div className="ml-3 pic_one_gear">

                <img src={product.image_path} width="90px" alt="product pic"/>

            </div>
            <div className="infos_one_gear">

                <h5>{product.title.slice(0,13)}</h5>
                <p>{product.decathlon_id}</p>

            </div>

            <hr></hr>
          </div>
        )
      })
    }
    return listOfProds;
  }




  render() {
    return (
      <div>
        <DecathlonNavbar />
        <div className="container big-margin">

          <div className="row justify-content-center">
            <h1>Stats of my products</h1>
          </div>
          <div className="row mt-4">
            <div className="col-4">

              {/* <ProductCardSmall productList={this.state.MyProductsList}/> */}
              <div id="container_dkt_myproducts">
                <h2>Products list</h2>
                <h5 className="pb-3">Your top products</h5>

                {/* afficher la barre de recherche */}
                <input type="text" className="form-control mb-3" placeholder="Filter by product..." aria-label="product name to filter" aria-describedby="filter the list of products" />

                {this.listOfProducts()}

              </div>

            </div>


            <div className="col-sm-8 container_stats_gears">

              <ProductsStatsRow1
                nb_users={this.state.ProductsStats.nb_users}
                percent_male={this.state.ProductsStats.percent_male} percent_female={this.state.ProductsStats.percent_female}
                dur_max={this.state.ProductsStats.dur_max} dur_avr={this.state.ProductsStats.dur_avr} dur_min={this.state.ProductsStats.dur_min} />
              <ProductsStatsRow2
                age_18_25={this.state.ProductsStats.age_18_25} age_26_45={this.state.ProductsStats.age_26_45} age_46_55={this.state.ProductsStats.age_46_55} age_56={this.state.ProductsStats.age_56}
                dist_max={this.state.ProductsStats.dist_max} dist_avr={this.state.ProductsStats.dist_avr} dist_min={this.state.ProductsStats.dist_min}
                weight_50={this.state.ProductsStats.weight_50} weight_51_70={this.state.ProductsStats.weight_51_70} weight_71_90={this.state.ProductsStats.weight_71_90} weight_91={this.state.ProductsStats.weight_91}
              />

              <div id="stats_data_3">
                <span>
                  <a href="#" id="downloadAllData"
                    onClick={
                      (file) =>
                      // this.downloadCSV( "productID.csv" )
                      this.downloadCSV(`ProductId_${this.state.ProductsStats.decathlon_id}.csv`)
                    }>
                    <i className="fas fa-download fa-2x mr-3"/>Download all data
                  </a>
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DecathlonMyProductsStats;
