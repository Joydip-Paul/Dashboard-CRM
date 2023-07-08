import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  polarChart: any = [
    {
      name: 'American Samoa',
      series: [
        {
          value: 4109,
          name: '2016-09-23T18:02:39.947Z',
        },
        {
          value: 4255,
          name: '2016-09-16T13:19:20.855Z',
        },
        {
          value: 3857,
          name: '2016-09-15T07:06:59.085Z',
        },
        {
          value: 3860,
          name: '2016-09-14T09:43:36.340Z',
        },
        {
          value: 2686,
          name: '2016-09-17T15:08:04.476Z',
        },
      ],
    },
    {
      name: 'Panama',
      series: [
        {
          value: 3066,
          name: '2016-09-23T18:02:39.947Z',
        },
        {
          value: 5182,
          name: '2016-09-16T13:19:20.855Z',
        },
        {
          value: 3254,
          name: '2016-09-15T07:06:59.085Z',
        },
        {
          value: 6451,
          name: '2016-09-14T09:43:36.340Z',
        },
        {
          value: 3668,
          name: '2016-09-17T15:08:04.476Z',
        },
      ],
    },
    {
      name: 'Georgia',
      series: [
        {
          value: 5975,
          name: '2016-09-23T18:02:39.947Z',
        },
        {
          value: 2111,
          name: '2016-09-16T13:19:20.855Z',
        },
        {
          value: 3302,
          name: '2016-09-15T07:06:59.085Z',
        },
        {
          value: 3829,
          name: '2016-09-14T09:43:36.340Z',
        },
        {
          value: 2084,
          name: '2016-09-17T15:08:04.476Z',
        },
      ],
    },
    {
      name: 'Tuvalu',
      series: [
        {
          value: 4818,
          name: '2016-09-23T18:02:39.947Z',
        },
        {
          value: 4398,
          name: '2016-09-16T13:19:20.855Z',
        },
        {
          value: 2216,
          name: '2016-09-15T07:06:59.085Z',
        },
        {
          value: 6271,
          name: '2016-09-14T09:43:36.340Z',
        },
        {
          value: 5812,
          name: '2016-09-17T15:08:04.476Z',
        },
      ],
    },
    {
      name: 'Vanuatu',
      series: [
        {
          value: 6200,
          name: '2016-09-23T18:02:39.947Z',
        },
        {
          value: 6926,
          name: '2016-09-16T13:19:20.855Z',
        },
        {
          value: 2928,
          name: '2016-09-15T07:06:59.085Z',
        },
        {
          value: 5650,
          name: '2016-09-14T09:43:36.340Z',
        },
        {
          value: 5818,
          name: '2016-09-17T15:08:04.476Z',
        },
      ],
    },
  ];
}
