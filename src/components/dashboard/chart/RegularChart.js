import React from "react";
import Chart from "react-apexcharts";

const RegularChart = () => {
  const seriesData = [
    {
      name: "Monthly Earning",
      data: [100, 200, 300, 350, 400, 450, 340, 230, 240, 302, 343, 244],
    },
  ];

  const optionsData = {
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: false,
      //   formatter: function (val) {
      //     return Number(val).toLocaleString() + "€";
      //   },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],

      position: "bottom",
      labels: {
        offsetY: 0,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs_: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: false,
        offsetY: -35,
      },
    },
    fill: {
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100],
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return Number(val).toLocaleString() + "€";
        },
      },
    },
    title: {
      //   text: "Revenus des 12 derniers mois",
      floating: true,
      offsetY: 0,
      align: "center",
      style: {
        color: "#444",
      },
    },
    chart: {
      animations: {
        enabled: false,
      },
    },
    colors: ["#d1cccc"],
    plotOptions: {
      bar: {
        borderRadius: 10,
      },
    },
  };

  return (
    <div>
      <Chart
        options={optionsData}
        series={seriesData}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default RegularChart;
