// create your App component here
import React from "react";

export default function App(){
    const [dog, setDog] = React.useState(null)

    React.useEffect( () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then( data => {
            setDog(data.message)
        })
    }, [])

    if (!dog) return <p>Loading...</p>

    return(
        <img alt="A Random Dog" src={dog}/>
    )
}