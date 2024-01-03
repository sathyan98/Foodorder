 import {useParams} from 'react-router-dom';
 import useFetch from '../shared/useFetch';
 import Card from 'react-bootstrap/Card';
 import {Col,Container,Row} from 'reactstrap';

 const Foodmenu = () => {
    const {id} = useParams();
    const states = useFetch(id);

    

     return(
          <div style = {{margonTop : '50px'}}>
            <Container>
                <Row>
                {states && states != null &&    
                    <Card>
                    <Card.Img variant="top" src= {states.image} />
                    <Card.Body>
                   <Card.Title>{states.restaurantChain}</Card.Title>
                   {/* <Card.Text>
                        {props.restaurants.cuisines.map((cuisine) => {
                             return <span> {cuisine} </span>
                        })}
                   </Card.Text> */}
                   
                 </Card.Body>
                    </Card>
                   }
                </Row>
            </Container>

          </div>

     )

}

export default Foodmenu;