import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SkillRadarChart = () => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(chartRef.current, {
        type: "radar",
        data: {
          labels: ["React.js", "Node.js", "MongoDB", "Python", "UI/UX", "AWS"],
          datasets: [
            {
              label: "My Skills",
              data: [95, 88, 85, 75, 90, 70],
              backgroundColor: "rgba(108, 92, 231, 0.2)",
              borderColor: "#6c5ce7",
              borderWidth: 2,
              pointBackgroundColor: "#6c5ce7",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "#6c5ce7",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            r: {
              beginAtZero: true,
              max: 100,
              ticks: { stepSize: 20, backdropColor: "transparent" },
              grid: { color: "rgba(108, 92, 231, 0.1)" },
            },
          },
          plugins: {
            legend: {
              position: "bottom",
              labels: { color: "var(--text-primary)" },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default SkillRadarChart;
