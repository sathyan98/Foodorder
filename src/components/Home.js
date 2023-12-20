import React , {useState,useEffect} from 'react';
import axios from 'axios';
import {Card, CardImg, CardBody, CardTitle, Row, Col, Container} from 'reactstrap';

const Home = () => {
    const[images,setImages] = useState(null)
    const[moviesImage,setMoviesImage] = useState([]);
    console.log('images',images);
    
    console.log('moviesImage',moviesImage)

    // useeffect must always return function,null or undefined
    //get list of movies
    const fetchdata = async() => {
        await axios.get(`https://www.omdbapi.com/?s=man&apikey=4a3b711b`)
        .then(res => { 
            console.log(res.data);
            setImages(res.data.Search)      
        })
    }
    useEffect( () => {
       
       fetchdata()
    },[])
    
    //get images of movies
    useEffect(() => {
        let extractedImage = []  
      if(images != null ) {  
        images.map(image => {
            extractedImage.push(image.Poster)
      })
     }
      console.log('e',extractedImage)
      setMoviesImage(extractedImage);
      console.log('imagelist',moviesImage)
    },[images])
     console.log('im',moviesImage)
    return(
        <div style ={{borderTop : '80px'}}>
            <h1 style ={{borderTop : '80px'}}>Marvel movies</h1>
            <Container>
                <Row>
            { moviesImage && moviesImage.length > 0 && moviesImage.map((image,index) => {
                  return  <Col key = {index} lg = {3} sm = {12} md = {6}>
                             <Card   style={{
                               width: '18rem'
                                }} key = {index}>
                                 <img
                                    alt= {index}
                                    src= {image}
                                 />
                             </Card>
                         </Col>
                     
            })
        }
          </Row> 
        </Container>
        </div>
    )
}

export default Home;