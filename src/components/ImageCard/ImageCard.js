import React from "react";
import "./ImageCard.css"

const ImageCard = (props) => {
    return (
        <div className="panel">
            <img onClick={() => props.click(props.id)} src={props.image} alt={props.alt}/>
        </div>
    )
}

export default ImageCard;