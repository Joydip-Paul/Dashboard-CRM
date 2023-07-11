import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexMarkers,
  ApexFill,
  ApexForecastDataPoints,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  colors: string[];
  fill: ApexFill;
  forecastDataPoints: ApexForecastDataPoints;
  legend: ApexLegend;
};

@Component({
  selector: 'app-area-chart-two',
  templateUrl: './area-chart-two.component.html',
  styleUrls: ['./area-chart-two.component.scss']
})
export class AreaChartTwoComponent {
  @ViewChild("chart") chart:any = ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          type: "rangeArea",
          name: "Team B Range",

          data: [
            {
              x: "Jan",
              y: [1100, 1900]
            },
            {
              x: "Feb",
              y: [1200, 1800]
            },
            {
              x: "Mar",
              y: [900, 2900]
            },
            {
              x: "Apr",
              y: [1400, 2700]
            },
            {
              x: "May",
              y: [2600, 3900]
            },
            {
              x: "Jun",
              y: [500, 1700]
            },
            {
              x: "Jul",
              y: [1900, 2300]
            },
            {
              x: "Aug",
              y: [1000, 1500]
            }
          ]
        },

        {
          type: "rangeArea",
          name: "Team A Range",
          data: [
            {
              x: "Jan",
              y: [3100, 3400]
            },
            {
              x: "Feb",
              y: [4200, 5200]
            },
            {
              x: "Mar",
              y: [3900, 4900]
            },
            {
              x: "Apr",
              y: [3400, 3900]
            },
            {
              x: "May",
              y: [5100, 5900]
            },
            {
              x: "Jun",
              y: [5400, 6700]
            },
            {
              x: "Jul",
              y: [4300, 4600]
            },
            {
              x: "Aug",
              y: [2100, 2900]
            }
          ]
        },

        {
          type: "line",
          name: "Team B Median",
          data: [
            {
              x: "Jan",
              y: 1500
            },
            {
              x: "Feb",
              y: 1700
            },
            {
              x: "Mar",
              y: 1900
            },
            {
              x: "Apr",
              y: 2200
            },
            {
              x: "May",
              y: 3000
            },
            {
              x: "Jun",
              y: 1000
            },
            {
              x: "Jul",
              y: 2100
            },
            {
              x: "Aug",
              y: 1200
            },
            {
              x: "Sep",
              y: 1800
            },
            {
              x: "Oct",
              y: 2000
            }
          ]
        },
        {
          type: "line",
          name: "Team A Median",
          data: [
            {
              x: "Jan",
              y: 3300
            },
            {
              x: "Feb",
              y: 4900
            },
            {
              x: "Mar",
              y: 4300
            },
            {
              x: "Apr",
              y: 3700
            },
            {
              x: "May",
              y: 5500
            },
            {
              x: "Jun",
              y: 5900
            },
            {
              x: "Jul",
              y: 4500
            },
            {
              x: "Aug",
              y: 2400
            },
            {
              x: "Sep",
              y: 2100
            },
            {
              x: "Oct",
              y: 1500
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeArea",
        animations: {
          speed: 500
        }
      },
      colors: ["#d4526e", "#33b2df", "#d4526e", "#33b2df"],
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: [0.24, 0.24, 1, 1]
      },
      forecastDataPoints: {
        count: 2,
        dashArray: 4
      },
      stroke: {
        curve: "straight",
        width: [0, 0, 2, 2]
      },
      legend: {
        show: true,
        customLegendItems: ["Team B", "Team A"],
        inverseOrder: true
      },
      title: {
        text: "Range Area with Forecast Line (Combo)"
      },
      markers: {
        hover: {
          sizeOffset: 5
        }
      }
    };
  }
}
