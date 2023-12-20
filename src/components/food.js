import React, {useEffect, useState} from 'react';
import Foodcard from './foodcard'
import {Card,Container,Row,Col,Button} from 'reactstrap';

const Food = () => {
  const [restaurants, setRes] = useState([]);
  const fetchData = async() => {
     const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
     const json = await data.json();
     console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     let resData = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
     setRes(resData);
    
  }  
     
  useEffect(() => {
    let cleanup = true;
     if (cleanup == true) {
       fetchData();
     } 
     return () => {
         cleanup = false;
     }
  },[])  
  
  return(
       <div style = {{marginTop : '50px'}}>
           <Container>


            <Row>
              
            {restaurants && restaurants.length > 0 && restaurants.map((restaurant,index) => {
               
                   console.log('res',restaurant);
                    return (
                    <Col lg = {3}>
                      <Foodcard key = {restaurant.info.id} restaurants = {restaurant.info}/>
                    </Col>
                    )           
               })
                }
              
              </Row>     
            
            </Container>
       </div>

  )

}

export default Food;
