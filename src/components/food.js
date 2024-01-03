import React, {useEffect, useState} from 'react';
import Foodcard from './foodcard'
import {Card,Container,Row,Col,Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const APIkey = 'aaaa89d29126447985bd982356fe5384'
const Food = () => {
  const [restaurants, setRes] = useState([]);

//  GET https://api.spoonacular.com/food/menuItems/search?query=burger&aoiKey=aaaa89d29126447985bd982356fe5384
  const fetchData = async() => {
    // const getFood = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=aaaa89d29126447985bd982356fe5384`);
    const getFood = await fetch(`https://api.spoonacular.com/food/menuItems/search?query=burger&apiKey=aaaa89d29126447985bd982356fe5384`);

    const food = await(getFood.json())

    console.log('food',food);
    setRes(food.menuItems)
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
  console.log('restaurants',restaurants)
  return(
       <div style = {{marginTop : '50px'}}>
           <Container>        
            <Row>
              
            {restaurants && restaurants.length > 0 && restaurants.map((restaurant,index) => {
               
                   console.log('res',restaurant);
                    return (
                    <Col lg = {3}>
                      <Link key = {restaurant.id} to = {"/" + restaurant.id} >
                      <Foodcard key = {restaurant.id} restaurants = {restaurant}/>
                      </Link>
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
