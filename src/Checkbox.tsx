import React from 'react';
import styled, { css } from 'styled-components';

const StyledCheckBox = styled.input`
  &:hover {
    cursor: pointer;
  }
`;

const StyledLabel = styled.span<{ isChecked: 'on' | 'off' }>`
  ${props =>
    props.isChecked === 'on' &&
    css`
      background-color: pink;
    `}
  padding-left: 10;
  &:hover {
    cursor: pointer;
  }
`;

export interface CheckBoxProps {
  id: string;
  name: string;
  value: 'on' | 'off';
  label: string;
  onChange: (value: 'on' | 'off') => void;
}

export const CheckBox = ({
  id,
  name,
  value,
  label,
  onChange,
}: CheckBoxProps) => {
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onChange(target.value === 'on' ? 'off' : 'on');
  };

  return (
    <label>
      <StyledCheckBox
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        checked={value === 'on'}
      />
      <StyledLabel isChecked={value}>{label}</StyledLabel>
    </label>
  );
};
