import React from "react";
import Image from "next/image";

const Coin = (props) => {
  return (
    <div className="d-flex justify-content-center coinContainer col-6 col-lg-2 shadow">
      <div className="d-flex flex-column">
        <p className="pCoin">
          <img className="imageCoin" src={props.image} alt="coin" />
        </p>
        <p className="pCoin">
          <Image
            className="iconCoin"
            src="/images/coinname.png"
            alt="icon"
            width="40"
            height="40"
          />
          <span>{props.name}</span>
        </p>
        <p className="pCoin">
          <Image
            className="iconCoin"
            src="/images/pricechange.png"
            alt="icon"
            width="40"
            height="40"
          />
          <span>{`$${props.price.toLocaleString()}`}</span>
        </p>
        <p
          className={
            props.priceChange > 0
              ? "pCoin text-success my-0"
              : "pCoin text-danger my-0"
          }
        >
          <Image
            className="iconCoin"
            src="/images/price.png"
            alt="icon"
            width="40"
            height="40"
          />
          <span>
            {props.priceChange > 0
              ? `+${props.priceChange.toFixed(3)}%`
              : `${props.priceChange.toFixed(3)}%`}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Coin;
