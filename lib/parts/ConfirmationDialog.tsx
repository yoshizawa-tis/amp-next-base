import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type Props = {
  title?: string
  text?: string
  execFunc?: Function
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ConfirmationDialog:React.FC<Props> = ({title, text, execFunc, open, setOpen}) => {

  const handleClose = () => {
    setOpen(false);
  };
  const exec = () => {
    if (execFunc) execFunc()
    setOpen(false);
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={exec} color="primary" autoFocus>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmationDialog