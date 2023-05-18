// Core
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { OutlinedInput } from '@mui/material';

// Configs & Helpers
import { taskSchema } from './config';
import { generateID } from '../../../helpers';

// Store
import { addTask } from '../../../lib/redux/task/taskSlice';

// Styles
import {
  StyledButton,
  StyledFieldGroup,
  StyledFormControl,
  StyledHelperText,
  StyledInputLabel,
} from '../../../styles';

export const TaskForm: FC = () => {
  const dispatch = useDispatch();
  const [labelPosition, setLabelPosition] = useState(false);

  const { formState, register, handleSubmit, reset, watch } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(taskSchema),
  });

  const {
    errors: { description },
  } = formState;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const id = generateID();

    const description = data.description || '';
    const completed = false;

    dispatch(addTask({ id, description, completed }));
    reset();
    setLabelPosition(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledFieldGroup>
        <StyledFormControl
          size="small"
          error={!!formState?.errors?.description}
          variant="outlined"
        >
          <StyledInputLabel
            shrink={labelPosition || !!watch('description')}
            htmlFor="outlined-adornment-task"
          >
            Your task
          </StyledInputLabel>
          <OutlinedInput
            id="outlined-adornment-task"
            {...register('description')}
            label="Your task"
            onFocus={() => setLabelPosition(!watch('description'))}
            onBlur={() => setLabelPosition(!!watch('description'))}
          />
          {!!description?.message && (
            <StyledHelperText>
              {description?.message as string}
            </StyledHelperText>
          )}
        </StyledFormControl>
        <StyledButton type="submit" variant="outlined">
          Add
        </StyledButton>
      </StyledFieldGroup>
    </form>
  );
};
