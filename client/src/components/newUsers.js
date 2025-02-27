import React, {useState, useEffect} from 'react'
import axios from 'axios'

const NewUser = () => {
    const [user, setUser] = useState([])
    const [button, setButton] =useState('Tried it')

    useEffect(() => {
        axios.get('http://localhost:5000/api/restricted/data')
        .then(response => {
            //console.log('get response', response.data)
            setUser(response.data)
        })
        .catch(err => console.log('catch error', err))
    }, [])

    const handleClick = () => {
        setButton("Awesome")
    }

    return(
          <div>  
            <h2>Recipes</h2>
        <div className='cardContainer'>
            {user.map(user => 
                <div className='cards' key={user.name}>
                    <h3>{user.name}</h3>
                    <p>{user.course}</p>
                    <p>{user.technique}</p>
                </div>
            )}
        </div>
        <button data-testid='awesomeBtn' onClick={handleClick}>{button}</button>
        </div>
    )
}

export default NewUser