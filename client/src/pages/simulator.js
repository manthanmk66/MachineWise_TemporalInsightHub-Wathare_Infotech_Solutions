import React, { useState } from "react";
import moment from "moment"; // Library for date and time manipulation

const SampleGenerator = () => {
  const [samples, setSamples] = useState([]);

  const generateSamples = () => {
    const newSamples = [];

    // Generate 10 sample data points
    for (let i = 0; i < 10; i++) {
      // Generate random timestamp within the last 24 hours
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
    <div>
      <h2>Sample Generation Simulator</h2>
      <button onClick={generateSamples}>Generate Samples</button>
      <div>
        <h3>Generated Samples</h3>
        <ul>
          {samples.map((sample, index) => (
            <li key={index}>
              Timestamp: {sample.timestamp.format("YYYY-MM-DD HH:mm:ss")},
              Value: {sample.value.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SampleGenerator;
