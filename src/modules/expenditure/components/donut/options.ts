export const options = {
  plugins: {
    legend: {
      position: "right" as const,
      labels: {
        padding: 15,
      },
    },
    datalabels: {
      // font: {
      // },
      formatter: (value: any, context: any) => {
        return (
          (
            (value * 100) /
            context.chart.data.datasets[0].data.reduce(
              (a: number, b: number) => a + b
            )
          ).toFixed(2) + "%"
        );
      },
    },
  },
};