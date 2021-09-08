import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormatDistanceStrict } from "../react-date-fns-hooks";
import { add } from "date-fns";

export default {
  title: "FormatDistanceStrict",
  addSuffix: true,
  component: FormatDistanceStrict,
} as ComponentMeta<typeof FormatDistanceStrict>;

const Template: ComponentStory<typeof FormatDistanceStrict> = (args) => (
  <FormatDistanceStrict {...args} />
);

const date = new Date();

export const Seconds = Template.bind({});
Seconds.args = {
  date: add(date, { seconds: -10 }),
  unit: "second",
  roundingMethod: "floor",
  addSuffix: true,
};

export const Minutes = Template.bind({});
Minutes.args = {
  date: add(date, { minutes: -4 }),
  unit: "minute",
  addSuffix: true,
};

export const Days = Template.bind({});
Days.args = {
  date: add(date, { days: -4 }),
  unit: "day",
  addSuffix: true,
};

export const Months = Template.bind({});
Months.args = {
  date: add(date, { months: -4, days: 3 }),
  unit: "month",
  addSuffix: true,
};
