import React from "react";
import axios from "axios";
import Image from "next/image";

const Weather = ({ data }) => {
  return (
    <div className="flex justify-center my-5">
      <div className="flex flex-col justify-center gap-5 p-5 border rounded-md">
        <div className="flex justify-center gap-1">
          <Image src="/images/location.png" alt="city" width="40" height="40" />
          <div className="flex flex-col justify-center">
            <h2 className="text-xl">Tehran</h2>
          </div>
        </div>
        <div className="flex justify-center gap-1">
          <Image src="/images/temp.png" alt="wind" width="40" height="40" />
          <div className="flex flex-col justify-center text-xl">{`${data.main.temp}°F`}</div>
        </div>
        <div className="flex justify-center gap-1">
          <Image
            src="/images/condition.png"
            alt="wind"
            width="40"
            height="40"
          />
          <div className="flex flex-col justify-center text-xl">
            {data.weather[0].main}
          </div>
        </div>
        <div className="flex justify-center gap-1">
          <Image src="/images/wind.svg" alt="wind" width="40" height="40" />
          <div className="flex flex-col justify-center text-xl">
            {data.wind.speed} km/h
          </div>
        </div>
        <div className="flex justify-center gap-1">
          <Image
            src="/images/humidity.svg"
            alt="humidity"
            width="40"
            height="40"
          />
          <div className="flex flex-col justify-center text-xl">
            {data.main.humidity}%
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const respons = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?id=112931&units=imperial&lang=fa&mode=json&appid=3d5735bd7e4a808416b10327378d0d49"
  );
  return {
    props: { data: respons.data },
  };
}
export default Weather;
