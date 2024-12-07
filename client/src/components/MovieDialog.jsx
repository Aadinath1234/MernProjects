import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { setOpen } from '../redux/movieSlice';
import VideoBackground from './VideoBackground';

export default function MovieDialog() {
  const { open, id } = useSelector(store => store.movie);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            width: '80%', // Default width for larger screens
            maxWidth: '1200px', // Max width for larger screens
            height: '70%', // Default height for larger screens
            margin: 'auto', // Centers the dialog on the screen
            '@media (max-width: 425px)': { // For screens between 325px and 425px
              width: '95%', // Adjust width for smaller screens
              height: '80%', // Adjust height for smaller screens
            },
            '@media (min-width: 320px) and (max-width: 425px)': { // Specific range for 325px to 425px
              width: '90%', // Adjust width for screens in this range
              height: '70%', // Adjust height for screens in this range
                
            },
          },
        }}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <VideoBackground movieId={id} bool={true} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}






