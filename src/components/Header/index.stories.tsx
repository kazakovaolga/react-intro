import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Header from '.';

export default {
  title: 'Example/MyHeader',
  component: Header
} as ComponentMeta<typeof Header>;

type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;
const text="React-Intro";
const level:HeaderLevel=2;

export const Primary = () => <Header level={level} text={text}></Header>;
