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
          style={{ maxWidth: "fit" }}
          data={{
            labels: ["A", "B", "C", "D", "E", "F", "G"],
            datasets: [
              {
                label: "  My First dataset",
                backgroundColor: "#000",
                hoverBackgroundColor: "#EC2F73",
                hoverBorderColor: "#EC2F73",
                data: [300, 225, 370, 225, 250, 400, 400],
                borderRadius: 20,
                borderWidth: 1,
                borderSkipped: false,
                barPercentage: 0.1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
