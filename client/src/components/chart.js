import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const ChartComponent = () => {
  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/data`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = response.data;
        console.log("Fetched data:", data);

        // Check if data exists and has elements before processing
        if (data && data.length > 0) {
          const labels = data.map((item) => item.ts);
          const datasets = [
            {
              label: "Machine Status",
              data: data.map((item) => item.machine_status),
              backgroundColor: "rgba(255, 206, 86, 0.2)",
              borderColor: "rgba(255, 206, 86, 1)",
              borderWidth: 1,
            },
          ];
          setChartData({ labels, datasets });
        } else {
          console.log("No data returned from the API");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <Line
          data={chartData} // Only render chart if data exists
          options={{
            scales: {
              x: {
                type: "time",
                time: {
                  unit: "day",
                },
              },
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default ChartComponent;
