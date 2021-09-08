import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormatDistance } from "../react-date-fns-hooks";
import { add } from "date-fns";

export default {
  title: "FormatDistance",
  addSuffix: true,
  component: FormatDistance,
} as ComponentMeta<typeof FormatDistance>;

const Template: ComponentStory<typeof FormatDistance> = (args) => (
  <FormatDistance {...args} />
);

const date = new Date();

export const Seconds = Template.bind({});
Seconds.args = {
  date: add(date, { seconds: -10 }),
  includeSeconds: true,
  addSuffix: true,
};

export const Minutes = Template.bind({});
Minutes.args = {
  date: add(date, { minutes: -4 }),
  includeSeconds: true,
  addSuffix: true,
};

export const Days = Template.bind({});
Days.args = {
  date: add(date, { days: -4 }),
  addSuffix: true,
};

export const Months = Template.bind({});
Months.args = {
  date: add(date, { months: -4, days: 3 }),
  addSuffix: true,
};
