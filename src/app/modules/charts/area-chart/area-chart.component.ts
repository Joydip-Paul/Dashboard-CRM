import { Component } from '@angular/core';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent {
  areaChart:any = [
    {
      "name": "Paraguay",
      "series": [
        {
          "value": 6342,
          "name": "2016-09-14T06:40:55.155Z"
        },
        {
          "value": 6114,
          "name": "2016-09-22T06:25:08.915Z"
        },
        {
          "value": 2911,
          "name": "2016-09-17T12:06:44.694Z"
        },
        {
          "value": 2522,
          "name": "2016-09-14T02:25:28.902Z"
        },
        {
          "value": 6960,
          "name": "2016-09-16T17:26:17.685Z"
        }
      ]
    },
    {
      "name": "Zambia",
      "series": [
        {
          "value": 3433,
          "name": "2016-09-14T06:40:55.155Z"
        },
        {
          "value": 5558,
          "name": "2016-09-22T06:25:08.915Z"
        },
        {
          "value": 6593,
          "name": "2016-09-17T12:06:44.694Z"
        },
        {
          "value": 2921,
          "name": "2016-09-14T02:25:28.902Z"
        },
        {
          "value": 5204,
          "name": "2016-09-16T17:26:17.685Z"
        }
      ]
    },
    {
      "name": "Grenada",
      "series": [
        {
          "value": 3067,
          "name": "2016-09-14T06:40:55.155Z"
        },
        {
          "value": 5613,
          "name": "2016-09-22T06:25:08.915Z"
        },
        {
          "value": 4506,
          "name": "2016-09-17T12:06:44.694Z"
        },
        {
          "value": 6778,
          "name": "2016-09-14T02:25:28.902Z"
        },
        {
          "value": 5460,
          "name": "2016-09-16T17:26:17.685Z"
        }
      ]
    },
    {
      "name": "French Guiana",
      "series": [
        {
          "value": 6683,
          "name": "2016-09-14T06:40:55.155Z"
        },
        {
          "value": 4906,
          "name": "2016-09-22T06:25:08.915Z"
        },
        {
          "value": 6530,
          "name": "2016-09-17T12:06:44.694Z"
        },
        {
          "value": 2062,
          "name": "2016-09-14T02:25:28.902Z"
        },
        {
          "value": 2950,
          "name": "2016-09-16T17:26:17.685Z"
        }
      ]
    },
    {
      "name": "Tokelau",
      "series": [
        {
          "value": 4241,
          "name": "2016-09-14T06:40:55.155Z"
        },
        {
          "value": 3303,
          "name": "2016-09-22T06:25:08.915Z"
        },
        {
          "value": 6611,
          "name": "2016-09-17T12:06:44.694Z"
        },
        {
          "value": 5487,
          "name": "2016-09-14T02:25:28.902Z"
        },
        {
          "value": 6050,
          "name": "2016-09-16T17:26:17.685Z"
        }
      ]
    }
  ]
}
