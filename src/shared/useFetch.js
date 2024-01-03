import {useState,useEffect} from 'react';
const useFetch = (id) => {
    const [state,setState] = useState(null);
   const APIkey = 'aaaa89d29126447985bd982356fe5384'
    useEffect(() => {
           fetch(`https://api.spoonacular.com/food/menuItems/${id}?apiKey=${APIkey}`).then(res => res.json()).then(data => setState(data));
           
    },[]
    )
    
    console.log('fetchid',state)
      return state;
}
export default useFetch;