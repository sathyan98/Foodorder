import React,{useState ,useId} from 'react';

const Form = () => {
    const [states, setStates] = useState({
        name : '',
        email : '',
        movieName : ''
    });
    const movieCheck = useId();

    const handleSubmit = () => {

    }
    
    return(
        <>
            <form onSubmit = {handleSubmit}  >
                <li className = 'form-child'>
                <label> MovieName : </label>
                <input type = 'text' />
                </li>
                <li className = 'form-child'>
                <label> Select Movies : </label>
                {/* <input type = 'radio' name = 'movies' value = 'Spider-Man' />
                <input type = 'radio' name = 'movies' value = 'Iron-Man' /> */}
                <input type = 'text' />
                </li>
                
                
            </form>
        </>
    )
}

export default Form;