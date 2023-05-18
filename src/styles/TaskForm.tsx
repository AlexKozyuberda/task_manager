import styled from 'styled-components';
import { Button, FormControl, FormHelperText } from '@mui/material';
export const FieldGroup = styled.div`
  display: flex;
  gap: 0 10px;
`;

export const StyledFormControl = styled(FormControl)`
  flex: 1;

  & label {
    font-size: 14px;
  }

  & label.Mui-focused {
    font-size: 10px;
    text-transform: uppercase;
    color: #5dcb42;
  }

  & input.MuiInputBase-input {
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px 40rem #fff inset;
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

  & label.Mui-error {
    color: #f33a3d;
  }

  & div.Mui-error {
    fieldset {
      &.MuiOutlinedInput-notchedOutline {
        border-color: #ff9fa3;
      }
    }
  }

  & p.Mui-error {
    font-size: 11px;
    color: #f33a3d;
  }
`;

export const StyledHelperText = styled(FormHelperText)`
  &.MuiFormHelperText-root {
    position: absolute;
    top: calc(100% + 6px);
    margin: 0;
  }
`;

export const StyledButton = styled(Button)`
  width: 120px;
  font-size: 14px;

  &.MuiButton-root {
    text-transform: none;
    color: #5dcb42;
    border-color: #5dcb42;

    &:hover {
      color: #fff;
      background-color: #5dcb42;
      border-color: #5dcb42;
    }
  }
`;
