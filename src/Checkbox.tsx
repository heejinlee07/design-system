import React, { useState } from 'react';
import { styled } from './stitches.config';

const StyledCheckBox = styled('input', {
  '&:hover': {
    cursor: 'pointer',
  },
});

const StyledLabel = styled('span', {
  paddingLeft: 10,
  '&:hover': {
    cursor: 'pointer',
  },
});

export interface CheckBoxProps {
  id: string;
  name: string;
  value: string;
  label: string;
}

export const CheckBox = ({ id, name, value, label }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked((target as HTMLInputElement).checked);
  };

  return (
    <label>
      <StyledCheckBox
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        checked={isChecked}
      />
      <StyledLabel
        css={{
          color: isChecked ? 'red' : 'blue',
        }}
      >
        {label}
      </StyledLabel>
    </label>
  );
};
