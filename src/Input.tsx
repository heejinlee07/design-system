import React from 'react';

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;

export interface TextFieldProps {
  value: string;
  placeholder?: string;
  autoFocus?: boolean;
  name?: string;
  type?: 'email' | 'password' | 'text';
  textarea?: boolean;
  onChange: (val: string) => void;
}

export const TextField = React.forwardRef<InputElement, TextFieldProps>(
  ({ onChange, textarea = false, ...rest }, ref) => {
    const InputElement = textarea ? 'textarea' : 'input';
    return (
      <InputElement
        ref={ref as any}
        style={{
          border: `1px solid ${textarea ? 'blue' : 'green'}`,
        }}
        onChange={({ target: { value } }: InputChangeEvent) => onChange(value)}
        {...rest}
      />
    );
  }
);
