import React from "react";
import "./Coin.css";
import {Link} from 'react-router-dom'

export default function Coin(props) {
  const [button, setButton] = React.useState(props.clicked);

  return (
    <div className="coin-cointainer">
      <div className="coin-row">
        <div className="coin">
          <img src={props.image} alt={`${props.name}`} />
          <h1>{props.name}</h1>
          <p className="coin-symbol">{props.symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${props.price}</p>
          <p className="coin-volume">${props.volume.toLocaleString()}</p>
          {typeof props.priceChange === "string" ? (
            "Button"
          ) : button ? (
            <Link to='/view'>
                <button
                >
                  View
                </button>
            </Link>
          ) : (
            <button
              onClick={() => {
                setButton(true);
                props.savePress(
                  props.name,
                  props.symbol,
                  props.price,
                  props.image
                );
              }}
            >
              Save Data
            </button>
          )}
          {typeof props.priceChange === "string" ? (
            <p className="coin-priceChange">{props.priceChange}</p>
          ) : props.priceChange < 0 ? (
            <p className="coin-priceChange red ">{props.priceChange}%</p>
          ) : (
            <p className="coin-price green ">{props.priceChange}%</p>
          )}
        </div>
        <p className="coin-marketcap">
          MKT Cap: ${props.marketcap.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
