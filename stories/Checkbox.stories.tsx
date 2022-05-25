import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CheckBox, CheckBoxProps } from '../src/Checkbox';

const meta: Meta = {
  title: 'CheckBox',
  component: CheckBox,
};

export default meta;

const Template: Story<CheckBoxProps> = args => <CheckBox {...args} />;

export const singleCheckbox = Template.bind({});

singleCheckbox.args = {
  id: 'singleCheckbox',
  name: 'singleCheckbox',
  value: 'singleCheckbox',
  label: 'singleCheckbox',
};
