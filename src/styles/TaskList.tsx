import { Box, Checkbox, IconButton } from '@mui/material';
import { DetailedHTMLProps, LiHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IListItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  completed: boolean;
}

export const StyledTask = styled(Box)`
  width: 556px;
  margin: 0 auto;
  padding: 34px 55px 63px 16px;
  background-color: #fff;
`;

export const StyledTaskList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const StyledTaskItem = styled.li<IListItemProps>`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 0 7px;
  padding: 12px 8px 12px 12px;
  transition: background-color 0.3s;

  &:not(:last-child) {
    border-bottom: 1xp solid #f3f3f3;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  }

  &:hover {
    background-color: #f3f3f3;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  &.MuiCheckbox-root {
    padding: 0;
    font-size: 16px;

    &.Mui-checked {
      color: #5dcb42;
    }

    svg {
      font-size: inherit;
    }
  }
`;

export const StyledIconButton = styled(IconButton)`
  &.MuiIconButton-root {
    margin-left: auto;
    padding: 0;
    font-size: 16px;

    &:hover {
      color: #f33a3d;
    }
  }
`;
