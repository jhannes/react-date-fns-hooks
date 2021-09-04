import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormatRelative } from "../react-date-fns-hooks";
import { add } from "date-fns";

export default {
  title: 'FormatRelative',
  addSuffix: true,
  component: FormatRelative,
} as ComponentMeta<typeof FormatRelative>;

const Template: ComponentStory<typeof FormatRelative> = (args) => <FormatRelative {...args} />;

const date = new Date();

export const Seconds = Template.bind({});
Seconds.args = {
  date: add(date, {seconds: -10})
};

export const Minutes = Template.bind({});
Minutes.args = {
  date: add(date, {minutes: -4})
};

export const Days = Template.bind({});
Days.args = {
  date: add(date, {days: -4})
};

export const Months = Template.bind({});
Months.args = {
  date: add(date, {months: -4, days: 3})
};



