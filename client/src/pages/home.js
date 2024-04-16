import React from "react";
import Chart from "../components/chart";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center pt-1 ">
        <h1 className="font-bold text-2xl py-1 pr-10 ">
          Machine Wise Temporal Insight Hub
        </h1>
        <a
          href="https://manthanweatherapp.netlify.app/"
          target="_blank"
          className="py-2 px-6 rounded-lg text-sm font-medium text-white bg-teal-600"
        >
          Check Weather
        </a>
      </div>
      <Chart />
    </div>
  );
};

export default Home;
