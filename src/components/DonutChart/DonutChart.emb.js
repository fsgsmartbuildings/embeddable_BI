import { defineComponent } from '@embeddable.com/react';
import { loadData } from '@embeddable.com/core';

import DonutChart from './DonutChart';

export const meta = {
  name: 'DonutChart',
  label: 'Donut Chart',
  inputs: [
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      description: 'The title for the chart'
    },
    {
      name: 'ds',
      type: 'dataset',
      label: 'Dataset',
      description: 'Dataset',
      defaultValue: false
    },
    {
      name: 'groups',
      type: 'dimension',
      label: 'Groups',
      config: {
        dataset: 'ds'
      }
    },
    {
      name: 'count',
      type: 'measure',
      label: 'Count',
      config: {
        dataset: 'ds'
      }
    },
    {
      name: 'showPercentages',
      type: 'boolean',
      label: 'Show as Percentage'
    },
    {
      name: 'showLabels',
      type: 'boolean',
      label: 'Show Labels'
    },
    {
      name: 'showLegend',
      type: 'boolean',
      label: 'Show Legend'
    },
    {
      name: 'maxGroups',
      type: 'number',
      label: 'Max Legend Items'
    }
  ],
  events: []
};

export default defineComponent(DonutChart, meta, {
  props: (props) => {
    return {
      ...props,
      donut: loadData({
        from: props.ds,
        dimensions: [props.groups],
        measures: [props.count]
      })
    };
  }
});