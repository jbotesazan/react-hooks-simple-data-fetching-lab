import React, {useEffect, useState} from 'react';

function App () {
const [image, setImage] = useState([]);
const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => {
            setImage(data);
            setIsLoading(true);
        })
    },[])

    if(!isLoading) return <p>...Loading</p>

    return (
        <img src={image.message} alt={'A Random Dog'}/>
    )
}

export default App;