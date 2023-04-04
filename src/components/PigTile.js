import React, {useState} from "react";

function PigTile({hog}) {

    const [isSelected, setIsSelected] = useState(false)

    const {name, image, weight, greased, specialty} = hog
    
    function handleClick() {
        setIsSelected(isSelected => !isSelected)
    }

    return (
        <div className = "ui eight wide column">
            <div onClick = {handleClick}> 
                <h2>{name}</h2>
                <img src= {image} alt = {name} width="500" height="500"/>
                <div className = {isSelected ? null : 'hidden'}>
                    <h4>{greased}</h4>
                    <h4>{weight}</h4>
                    <h4>{specialty}</h4>
                    <h4>{hog['highest medal achieved']}</h4>
                </div>
            </div>
        </div>
    )
}

export default PigTile