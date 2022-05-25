import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from '../src/Input';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'TextField',
  component: TextField,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;

const Template: Story<TextFieldProps> = args => <TextField {...args} />;

export const input = Template.bind({});

export const textarea = Template.bind({});

textarea.args = {
  textarea: true,
  onChange: action('textarea changed'),
};
