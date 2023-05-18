import { Dialog, DialogContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from '../../lib/redux/dialog/dialogSlice';
import { deleteTask } from '../../lib/redux/task/taskSlice';
import { RootState } from '../../lib/redux/init/store';
import {
  StyledButtons,
  StyledCloseButton,
  StyledDeleteButton,
  StyledTypography,
} from '../../styles';

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
        <StyledTypography>Are you sure you want to delete it?</StyledTypography>
        <StyledButtons>
          <StyledCloseButton
            size="small"
            onClick={() => dispatch(closeDialog())}
          >
            Close
          </StyledCloseButton>
          <StyledDeleteButton size="small" onClick={handleDeleteTask}>
            Delete
          </StyledDeleteButton>
        </StyledButtons>
      </DialogContent>
    </Dialog>
  );
};
