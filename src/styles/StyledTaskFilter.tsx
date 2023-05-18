// Core
import styled from 'styled-components';
import { Box, FormControlLabel, RadioGroup, TextField } from '@mui/material';

export const StyledTaskFilter = styled(Box)`
  display: flex;
  gap: 0 10px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  &.MuiFormGroup-root {
    flex-flow: row nowrap;
    gap: 0 10px;
  }
`;

export const StyledTextField = styled(TextField)`
  flex: 1;

  & input {
    height: 43px;
    padding: 11px 8px;
    font-size: 14px;
    box-sizing: border-box;

    &::placeholder {
      color: #c4c4c4;
      opacity: 1;
    }
  }

  & div.Mui-focused {
    fieldset {
      &.MuiOutlinedInput-notchedOutline {
        border-color: #5dcb42;
        border-width: 1px;
      }
    }
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    margin: 0;
    min-width: 78px;

    &:first-child {
      min-width: 87px;
    }
  }

  & span.MuiTypography-root {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 0 5px;
    min-height: 43px;
    margin: 0;
    padding: 8px 11px;
    font-size: 14px;
    text-transform: none;
    border: 1px solid #f2eded;
    border-radius: 5px;
    transition: all 0.3s;

    svg {
      font-size: 16px;
      color: #5dcb42;
    }

    &:hover {
      color: #fff;
      background-color: #5dcb42;
      border-color: #f2eded;

      svg {
        color: #fff;
      }
    }
  }

  & span.MuiButtonBase-root {
    display: none;
  }

  & span.Mui-checked {
    ~ span {
      color: #fff;
      background-color: #5dcb42;
      border-color: #f2eded;

      svg {
        color: #fff;
      }
    }
  }
`;
