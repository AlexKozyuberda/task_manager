import { Button, Dialog, DialogContent, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from '../../lib/redux/dialog/dialogSlice';
import { deleteTask } from '../../lib/redux/task/taskSlice';
import { RootState } from '../../lib/redux/init/store';

export const TaskDialog = () => {
  const dispatch = useDispatch();
  const { show, id } = useSelector((state: RootState) => state.dialog);

  const handleDeleteTask = () => {
    dispatch(deleteTask(id as string));
    dispatch(closeDialog());
  };

  return (
    <Dialog
      open={show as boolean}
      onClose={() => dispatch(closeDialog())}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogContent>
        <Typography>Are you sure you want to delete it?</Typography>
        <Button color="primary" onClick={() => dispatch(closeDialog())}>
          Close
        </Button>
        <Button variant="contained" color="error" onClick={handleDeleteTask}>
          Delete
        </Button>
      </DialogContent>
    </Dialog>
  );
};
