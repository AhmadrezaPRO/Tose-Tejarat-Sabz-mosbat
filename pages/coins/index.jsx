import React from "react";
import axios from "axios";
import Coin from "@/components/Coin";

const Coins = ({ data }) => {
  return (
    <div className="flex justify-center flex-wrap">
      {data.map((item) => (
        <Coin
          image={item.image}
          name={item.name}
          price={item.current_price}
          priceChange={item.market_cap_change_percentage_24h}
        />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const respons = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  );
  return {
    props: { data: respons.data },
  };
}

export default Coins;
