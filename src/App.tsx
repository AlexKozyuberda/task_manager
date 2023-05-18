//Core
import { FC } from 'react';

// Components
import { TaskList } from './components/TaskList';
import { TaskDialog } from './components/TaskList/TaskDialog';

// Styles
import { StyledGlobal, StyledTaskWrapper } from './styles';

export const App: FC = () => {
  return (
    <>
      <StyledGlobal />
      <StyledTaskWrapper>
        <TaskList />
      </StyledTaskWrapper>
      <TaskDialog />
    </>
  );
};
