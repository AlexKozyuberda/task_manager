// Core
import { ChangeEvent, FC, useState } from 'react';

// Components
import { TaskForm } from '../form/TaskForm';

// Hooks
import { useSortAndFilterTasks } from '../../hooks/useSortAndFilterTask.ts';

// Styles
import {
  StyledFormControlLabel,
  StyledRadioGroup,
  StyledTask,
  StyledTaskFilter,
  StyledTaskList,
  StyledTextField,
} from '../../styles';
import { TaskItem } from './TaskItem.tsx';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { FormControl, Radio } from '@mui/material';

export const TaskList: FC = () => {
  const [taskOption, setTaskOption] = useState('all');
  const [searchTask, setSearchTask] = useState('');

  const tasks = useSortAndFilterTasks(searchTask, taskOption);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTask(event.target.value);
  };

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskOption(event.target.value);
  };

  return (
    <StyledTask>
      <StyledTaskFilter>
        <StyledTextField
          label="Search"
          variant="outlined"
          onChange={handleSearch}
          value={searchTask}
        />

        <FormControl>
          <StyledRadioGroup value={taskOption} onChange={handleToggle}>
            <StyledFormControlLabel
              value="all"
              control={<Radio />}
              label="All"
            />
            <StyledFormControlLabel
              value="done"
              control={<Radio />}
              label={
                <>
                  <CheckCircleOutlineIcon /> Done
                </>
              }
            />
          </StyledRadioGroup>
        </FormControl>
      </StyledTaskFilter>
      <StyledTaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </StyledTaskList>

      <TaskForm />
    </StyledTask>
  );
};
