import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCheckBox = styled.input`
  &:hover {
    cursor: pointer;
  }
`;

const StyledLabel = styled.span`
  padding-left: 10;

  &:hover {
    cursor: pointer;
  }
`;

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
      <StyledLabel>{label}</StyledLabel>
    </label>
  );
};
