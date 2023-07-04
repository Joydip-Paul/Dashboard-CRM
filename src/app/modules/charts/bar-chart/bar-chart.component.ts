import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  areaChart: any = [
    {
      name: 'Benin',
      series: [
        {
          value: 6812,
          name: '2016-09-22T06:47:26.161Z',
        },
        {
          value: 5637,
          name: '2016-09-17T16:22:12.433Z',
        },
        {
          value: 2494,
          name: '2016-09-21T00:37:21.545Z',
        },
        {
          value: 6543,
          name: '2016-09-16T02:29:07.916Z',
        },
        {
          value: 6937,
          name: '2016-09-21T12:08:28.419Z',
        },
      ],
    },
    {
      name: 'Estonia',
      series: [
        {
          value: 5148,
          name: '2016-09-22T06:47:26.161Z',
        },
        {
          value: 4280,
          name: '2016-09-17T16:22:12.433Z',
        },
        {
          value: 5250,
          name: '2016-09-21T00:37:21.545Z',
        },
        {
          value: 3454,
          name: '2016-09-16T02:29:07.916Z',
        },
        {
          value: 2810,
          name: '2016-09-21T12:08:28.419Z',
        },
      ],
    },
    {
      name: 'Taiwan',
      series: [
        {
          value: 2772,
          name: '2016-09-22T06:47:26.161Z',
        },
        {
          value: 6671,
          name: '2016-09-17T16:22:12.433Z',
        },
        {
          value: 2169,
          name: '2016-09-21T00:37:21.545Z',
        },
        {
          value: 5000,
          name: '2016-09-16T02:29:07.916Z',
        },
        {
          value: 2562,
          name: '2016-09-21T12:08:28.419Z',
        },
      ],
    },
    {
      name: 'Gabon',
      series: [
        {
          value: 4593,
          name: '2016-09-22T06:47:26.161Z',
        },
        {
          value: 3597,
          name: '2016-09-17T16:22:12.433Z',
        },
        {
          value: 2502,
          name: '2016-09-21T00:37:21.545Z',
        },
        {
          value: 2054,
          name: '2016-09-16T02:29:07.916Z',
        },
        {
          value: 2970,
          name: '2016-09-21T12:08:28.419Z',
        },
      ],
    },
    {
      name: 'Yemen',
      series: [
        {
          value: 5335,
          name: '2016-09-22T06:47:26.161Z',
        },
        {
          value: 4178,
          name: '2016-09-17T16:22:12.433Z',
        },
        {
          value: 5348,
          name: '2016-09-21T00:37:21.545Z',
        },
        {
          value: 5757,
          name: '2016-09-16T02:29:07.916Z',
        },
        {
          value: 3217,
          name: '2016-09-21T12:08:28.419Z',
        },
      ],
    },
  ];

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
