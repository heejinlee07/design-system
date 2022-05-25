import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CheckBox, CheckBoxProps } from '../src/Checkbox';

const meta: Meta = {
  title: 'CheckBox',
  component: CheckBox,
  argTypes: {
    onChange: { action: 'checked' },
  },
};

export default meta;

const Template: Story<CheckBoxProps> = args => <CheckBox {...args} />;

export const singleCheckbox = Template.bind({});

singleCheckbox.args = {
  id: 'singleCheckbox',
  name: 'singleCheckbox',
  value: 'on',
  label: 'singleCheckbox',
  onChange: action('checked'),
};
