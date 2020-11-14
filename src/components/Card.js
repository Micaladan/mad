import React from "react"
import "./Card.css"

const Card = props => {
  console.log(props)
  return (
    <div className="container">
      <div className="card-content">
        <img src={props.imgSrc} alt={props.name}></img>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
