import React, { useState } from "react";
import moment from "moment"; 

const SampleGenerator = () => {
  const [samples, setSamples] = useState([]);

  const generateSamples = () => {
    const newSamples = [];

    // Generate 20 sample data 
    for (let i = 0; i < 20; i++) {
      // Generate random timestamp within the last 24 hours for the Samples
      const timestamp = moment().subtract(
        Math.floor(Math.random() * 24),
        "hours"
      );

      // Generate random value for the sample
      const value = Math.random() * 100;

      // Create a sample data point
      const sample = { timestamp, value };
      newSamples.push(sample);
    }

    setSamples(newSamples);
  };

  return (
    <div className="flex justify-center">
      <div className="p-4 mt-20 ter  bg-white rounded-lg shadow-md">
        <h2 className="text-2xl   font-semibold mb-4">
          Sample Generation Simulator
        </h2>
        <button
          className="py-2 ml-20 px-6 pl-4 rounded-lg justify-center items-center text-sm font-medium text-white bg-teal-600"
          onClick={generateSamples}
        >
          Generate Samples
        </button>
        <div>
          <h3 className="text-lg font-semibold pl-4 mt-5 mb-2">
            Here are the Generated Samples
          </h3>
          <ul>
            {samples.map((sample, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">Timestamp:</span>{" "}
                {sample.timestamp.format("YYYY-MM-DD HH:mm:ss")},{" "}
                <span className="font-semibold">Value:</span>{" "}
                {sample.value.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SampleGenerator;
