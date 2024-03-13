"use client";
import rightarrow from "@/components/images/rightarrow.png";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

ChartJS;
export default function Sales() {
  return (
    <div className="bg-[#fff] rounded-xl">
      <div className="flex items-center justify-between p-6">
        <h1>Борлуулалт</h1>
        <img className="w-[12px] h-[12px]" src={rightarrow.src} alt="" />
      </div>
      <div>
        <Bar
          data={{
            labels: ["A", "B", "C", "D"],
            datasets: [
              {
                label: "  My First dataset",
                backgroundColor: "#4c51bf",
                borderColor: "#4c51bf",
                hoverBackgroundColor: "#EC2F73",
                hoverBorderColor: "#EC2F73",
                data: [65, 78, 56, 65, 90],
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
