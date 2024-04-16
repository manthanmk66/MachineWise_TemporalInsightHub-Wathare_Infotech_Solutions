import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const [chartData, setChartData] = useState({});
  const [summaryData, setSummaryData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the data from your API
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/data`
        );
        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        const data = response.data;
        console.log("Fetched data:", data);

        // Extracting labels and data for the chart
        const labels = data.map((item) => {
          // Extracting hours, minutes, and seconds from the timestamp
          const date = new Date(item.ts);
          return date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });
        });
        const machineStatusData = data.map((item) => item.machine_status);

        // Generate summary data
        const onesCount = machineStatusData.filter(
          (value) => value === 1
        ).length;
        const zerosCount = machineStatusData.filter(
          (value) => value === 0
        ).length;

        let continuousZeros = 0;
        let continuousOnes = 0;
        let maxContinuousZeros = 0;
        let maxContinuousOnes = 0;

        for (const value of machineStatusData) {
          if (value === 0) {
            continuousZeros++;
            continuousOnes = 0;
            if (continuousZeros > maxContinuousZeros) {
              maxContinuousZeros = continuousZeros;
            }
          } else if (value === 1) {
            continuousOnes++;
            continuousZeros = 0;
            if (continuousOnes > maxContinuousOnes) {
              maxContinuousOnes = continuousOnes;
            }
          }
        }

        setSummaryData({
          onesCount: onesCount,
          zerosCount: zerosCount,
          maxContinuousZeros: maxContinuousZeros,
          maxContinuousOnes: maxContinuousOnes,
        });

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Machine Status",
              data: machineStatusData,
              backgroundColor: machineStatusData.map((value) => {
                if (value === 0)
                  return "rgba(255, 255, 0, 0.2)"; // Yellow for 0
                else if (value === 1)
                  return "rgba(0, 255, 0, 0.2)"; // Green for 1
                else return "rgba(255, 0, 0, 0.2)"; // Red for missing
              }),
              borderColor: machineStatusData.map((value) => {
                if (value === 0)
                  return "rgba(255, 255, 0, 1)"; // Dark yellow for 0
                else if (value === 1)
                  return "rgba(0, 255, 0, 1)"; // Green for 1
                else return "rgba(255, 0, 0, 1)"; // Red for missing
              }),
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center  text-2xl">
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <div>
          <h2 className="py-4 font-bold">Machine Status Chart</h2>

          {/* Here you can make height 80-100px for the desired ui as per given in the Assignment  ---> */}

          <div className="" style={{ height: "400px", width: "600px" }}>
            <Line
              data={chartData}
              options={{
                maintainAspectRatio: false,
                scales: {
                  x: {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                    },
                  },
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
          <h2 className="pt-12">Summary</h2>
          <table className="mt-4">
            <thead className="">
              <tr>
                <th className="px-4 py-2">Number of 1s</th>
                <th className="px-4 py-2">Number of 0s</th>
                <th className="px-4 py-2">Max Continuous 0s</th>
                <th className="px-4 py-2">Max Continuous 1s</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">{summaryData.onesCount}</td>
                <td className="px-4 py-2">{summaryData.zerosCount}</td>
                <td className="px-4 py-2">{summaryData.maxContinuousZeros}</td>
                <td className="px-4 py-2">{summaryData.maxContinuousOnes}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ChartComponent;
