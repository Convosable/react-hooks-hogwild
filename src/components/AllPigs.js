import React from "react";
import PigTile from "./PigTile"

function AllPigs({hogsList, handleClick, filtered, isGreased, handleSortByWeight}) {
    
        return (
        <div>
            <button onClick = {handleClick} >Greased</button>
            <button onClick = {handleSortByWeight}>SortByWeight</button>
            <div className = "ui grid container">
            { isGreased ?
                filtered.map((hog)=> <PigTile key =  {hog.name} hog = {hog}/>) : hogsList.map((hog)=> <PigTile key =  {hog.name} hog = {hog}/>) 
            }
            </div>
        </div>
    )
}

export default AllPigs