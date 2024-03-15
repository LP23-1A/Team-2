"use client";
import rightarrow from "@/components/images/rightarrow.png";
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const api = "http://localhost:8000/dashboard/status";

ChartJS;
export default function Sales() {
  const [salesData, setSalesData]: any = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(api);
        setSalesData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="bg-[#fff] rounded-xl">
      <div className="flex items-center justify-between p-6">
        <h1>Борлуулалт</h1>
        <img className="w-[12px] h-[12px]" src={rightarrow.src} alt="" />
      </div>
      <div>
        {salesData ? (
          <Bar
            style={{ maxWidth: "fit" }}
            data={{
              labels: salesData.labels,
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "#000",
                  hoverBackgroundColor: "#EC2F73",
                  hoverBorderColor: "#EC2F73",
                  data: salesData.data,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderSkipped: false,
                  barPercentage: 0.1,
                },
              ],
            }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
