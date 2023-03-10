import React from "react";
import axios from "axios";
import Card from "@/components/Card";
import Link from "next/link";

const Shop = ({ data }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center my-5">
        <Link href="/cart">
          <span className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Cart
          </span>
        </Link>
      </div>
      <div className="flex justify-evenly flex-wrap my-10">
        {data?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const respons = await axios.get("https://fakestoreapi.com/products");
  return {
    props: { data: respons.data },
  };
}

export default Shop;
