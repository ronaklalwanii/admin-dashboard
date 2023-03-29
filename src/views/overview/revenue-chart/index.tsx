import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import { ApexOptions } from "apexcharts";
import ReactApexChart from "@/components/libs/ReactApexCharts";

const RevenueChart = () => {
  const series = [
    {
      name: "Offline",
      data: [200, 250, 400, 800, 500, 300, 400, 600, 700],
    },
    {
      name: "Online",
      data: [400, 500, 350, 600, 550, 350, 500, 600, 700],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 400,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        horizontal: false,
        columnWidth: "55%",
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
  };

  return (
    <Card>
      <CardHeader
        title="Revenue Comparison"
        subheader="Of previous months between online and offline revenue."
      />
      <CardContent>
        <ReactApexChart
          type="bar"
          height={400}
          series={series}
          options={options}
        />
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
