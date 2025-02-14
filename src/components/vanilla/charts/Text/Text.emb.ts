import { EmbeddedComponentMeta, defineComponent } from '@embeddable.com/react';

import Component from './index';

export const meta: EmbeddedComponentMeta = {
  name: 'Text',
  label: 'Component: Text',
  inputs: [
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      description: 'The title text',
      category: 'Configure chart'
    },
    {
      name: 'body',
      type: 'string',
      label: 'Body',
      description: 'The body text',
      category: 'Configure chart'
    }
  ]
};

export type Inputs = {
  title?: string;
  body?: string;
};

export default defineComponent<Inputs>(Component, meta, {
  props: (inputs) => {
    return {
      title: inputs.title,
      body: inputs.body
    };
  }
});
