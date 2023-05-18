// Core
import { Box, Button, Checkbox, IconButton, Typography } from '@mui/material';
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

export const StyledTypography = styled(Typography)`
  &.MuiTypography-root {
    font-size: 14px;
    text-align: center;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  gap: 0 15px;
  justify-content: space-around;
`;

export const StyledCloseButton = styled(Button)`
  &.MuiButton-root {
    text-transform: none;
    color: #6e82ab;

    &:hover {
      background-color: rgba(110, 130, 171, 0.03);
    }
  }
`;

export const StyledDeleteButton = styled(Button)`
  &.MuiButton-root {
    text-transform: none;
    color: #f33a3d;

    &:hover {
      background-color: rgba(243, 58, 61, 0.03);
    }
  }
`;
