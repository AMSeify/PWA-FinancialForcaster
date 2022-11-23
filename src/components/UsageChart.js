import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

const UsageChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend)

  const data = {
    labels: ["استفاده شده", "باقی مانده"],
    datasets: [
      {
        label: "مقدار باقی مانده اشتراک",
        data: [20, 10],
        backgroundColor: ["#ffc107", "#000000"],
        borderColor: ["#ffc107", "#000000"],
        borderWidth: 1,
      },
    ],
  }
  return (
    <Doughnut
      data={data}
      height={200}
      width={200}
      options={{ maintainAspectRatio: false }}
    />
  )
}

export default UsageChart
