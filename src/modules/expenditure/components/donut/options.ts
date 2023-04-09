export const options = {
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        padding: 15,
        usePointStyle: true,
      },
    },
    datalabels: {
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
    tooltip: {
      caretPadding: 25
    }
  },
};
