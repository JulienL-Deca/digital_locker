import React, {Component} from 'react';
import { LineChart, Line, Pie, PieChart } from 'recharts';
import {
  Link,
  NavLink,
} from 'react-router-dom';
function FeedbacksAwaitingAnswer (props) {


const data01 = [{name: '% feedbacks answer < 2 days', value: 55, fill:'#86C609'}, {name: '% feedbacks answer < 3 days', value: 23, fill:'#EF8800'},
{name: '% feedbacks > 3 days', value: 22,fill:'#E8461A'}]


return(
  <div className="row" id="container_feedbacks_awaiting">
  <h2>Awaiting feedbacks</h2>



  <PieChart width={500} height={400} scale={3}>
    <Pie data={data01} dataKey="value" nameKey="name" cx="200px" cy="200px" innerRadius={100} outerRadius={150} fill="#8884d8" />



  </PieChart>

  <div id="legend" className="mb-4 pb-4">
    <p><span style={{backgroundColor:'#86C609',padding:'5px',color:'white',borderRadius:'5px'}}>55%</span> feedbacks answer less 2 days</p>
    <p><span style={{backgroundColor:'#EF8800',padding:'5px',color:'white',borderRadius:'5px'}}>23%</span> feedbacks answer less 3 days</p>
    <p><span style={{backgroundColor:'#E8461A',padding:'5px',color:'white',borderRadius:'5px'}}>22%</span> feedbacks answer more than 3 days</p>
    <div className="pt-4"><Link to="/decathlonadmin/myfeedbacks" className="biglink">See all my feedbacks ></Link></div>
  </div>

</div>
)

}
//to finish


export default FeedbacksAwaitingAnswer;
