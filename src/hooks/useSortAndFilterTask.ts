// Core
import { useSelector } from 'react-redux';

// Store
import { RootState } from '../lib/redux/init/store';

export const useSortAndFilterTasks = (
  searchTask: string,
  taskOption: string
) => {
  const { data } = useSelector((state: RootState) => state.tasks);

  const tasks = [...data]
    .sort((a, b) => {
      if (a.completed && !b.completed) {
        return 1;
      }
      if (!a.completed && b.completed) {
        return -1;
      }
      return 0;
    })
    .filter((task) => {
      const searchDescription = task.description
        .toLowerCase()
        .includes(searchTask.toLowerCase());

      const statusTask =
        taskOption === 'all' || (taskOption === 'done' && task.completed);

      return searchDescription && statusTask;
    });

  return tasks;
};
