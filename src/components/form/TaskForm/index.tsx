// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputLabel, OutlinedInput } from '@mui/material';

// Configs
import { taskSchema } from './config';
import {
  FieldGroup,
  StyledButton,
  StyledFormControl,
  StyledHelperText,
} from '../../../styles';
import { generateID } from '../../../helpers';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../lib/redux/task/taskSlice.ts';
import { FC } from 'react';

interface ITask {
  description: string;
  id: string;
}

export const TaskForm: FC = () => {
  const dispatch = useDispatch();

  const { formState, register, handleSubmit, reset } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(taskSchema),
  });

  const {
    errors: { description },
  } = formState;

  const onSubmit = (data: ITask) => {
    const id = generateID();

    dispatch(addTask({ ...data, id }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <StyledFormControl
          size="small"
          error={!!formState?.errors?.description}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-task">Your task</InputLabel>
          <OutlinedInput
            id="outlined-adornment-task"
            {...register('description')}
            label="Your task"
          />
          {!!formState?.errors?.description && (
            <StyledHelperText>{description?.message}</StyledHelperText>
          )}
        </StyledFormControl>
        <StyledButton type="submit" variant="outlined">
          Add
        </StyledButton>
      </FieldGroup>
    </form>
  );
};
