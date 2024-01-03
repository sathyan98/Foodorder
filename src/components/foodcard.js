//food cards called from food component

import React from 'react';
import Card from 'react-bootstrap/Card';
import {Col} from 'reactstrap';
const Foodcard = (props) => {
    const Image_api = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    console.log('foodCard component',props)

     return(
       <div>  
           <Col lg = {6} sm = {12} md = {6}>
              <Card style = {{width : '300px', height: '400px', marginTop : '20px'}}>
              <Card.Img variant="top" src= {props.restaurants.image} />
                 <Card.Body>
                   <Card.Title>{props.restaurants.restaurantChain}</Card.Title>
                   {/* <Card.Text>
                        {props.restaurants.cuisines.map((cuisine) => {
                             return <span> {cuisine} </span>
                        })}
                   </Card.Text> */}
                   
                 </Card.Body>
               </Card>   
           </Col>
      </div>    
      
     )


}

export default Foodcard;