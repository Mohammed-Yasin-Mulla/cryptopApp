import React from "react";
import { Link } from "react-router-dom";
import "./view.css";

export default function View(props) {

  const list = props.data.map((data) => {
    return (
      <div className="view-cointainer">
        <div className="view-row">
          <div className="view">
            <h1>{data.name}</h1>
            <p className="view-symbol">{data.symbol.toUpperCase()}</p>
          </div>
          <div className="view-data">
            <p className="view-price">${data.price}</p>
            <button  onClick={() => props.deleteCoin(data.name)} className="view-button Button ">Delete</button>
          </div>
        </div>
      </div>
    );
  });


  
  return (
    <div>
      <div className="cointainer">
        <div className="view-heading-cointainer">
          <div className="view-cointainer  ">
            <div className="view-row">
              <div className="view">
                <h1>Name</h1>
                <p className="view-symbol">Symbol</p>
              </div>
              <div className="view-data">
                <p className="view-price">Price</p>
              </div>
            </div>
          </div>
        </div>
        {list}
      </div>
      <Link to="/">
        <button className='Button' >Back To View Page</button>
      </Link>
    </div>
  );
}
