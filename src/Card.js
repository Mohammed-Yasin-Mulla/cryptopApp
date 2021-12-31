import React from 'react'
import './card.css'

export default function Card(props) {
    return (
        <div className='card' >
            <div className="card-top">
                <h4>{props.symbol.toUpperCase()}</h4>
                <img src={props.image} alt="comapany Logo"  />
            </div>
            <div className="card-bottom"><h2>{props.price} $</h2></div>
        </div>
    )
}
