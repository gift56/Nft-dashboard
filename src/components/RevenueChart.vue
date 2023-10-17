<template>
  <div class="w-full h-full">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "RevenueChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Revenue",
            borderColor: "#3C4795",
            backgroundColor: "#47E2EC",
            data: [0.5, 0.8, 1.0, 1.3, 1.5, 2.0],
            borderRadius: 40,
            barThickness: 16,
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
