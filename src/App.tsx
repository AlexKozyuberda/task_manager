//Core
import { FC } from 'react';

// Components
import { TaskList } from './components/TaskList';
import { TaskDialog } from './components/TaskList/TaskDialog';

// Styles
import { GlobalStyles, TaskListWrapper } from './styles';

export const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <TaskListWrapper>
        <TaskList />
      </TaskListWrapper>
      <TaskDialog />
    </>
  );
};
