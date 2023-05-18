// Core
import { FC } from 'react';
import { Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';

// Store
import { completedTask } from '../../lib/redux/task/taskSlice';
import { openDialog } from '../../lib/redux/dialog/dialogSlice';

// Types
import { ITask } from '../../types';

// Styles
import { StyledCheckbox, StyledIconButton, StyledTaskItem } from '../../styles';

export const TaskItem: FC<ITask> = ({ description, id, completed }) => {
  const dispatch = useDispatch();
  const handleTaskComplete = (id: string) => {
    dispatch(completedTask(id));
  };

  const handleTaskDelete = (id: string) => {
    dispatch(openDialog({ id: id }));
  };

  return (
    <StyledTaskItem completed={completed}>
      <StyledCheckbox disableRipple onChange={() => handleTaskComplete(id)} />
      <Typography>{description}</Typography>
      <StyledIconButton
        aria-label="delete"
        size="small"
        disableRipple
        onClick={() => handleTaskDelete(id)}
      >
        <DeleteForeverIcon fontSize="inherit" />
      </StyledIconButton>
    </StyledTaskItem>
  );
};
