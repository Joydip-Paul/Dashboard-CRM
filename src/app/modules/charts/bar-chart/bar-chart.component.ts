import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  data: any = [
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
}
