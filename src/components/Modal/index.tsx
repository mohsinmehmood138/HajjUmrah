import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Typography, useTheme } from '@mui/material';

interface DeleteError {
  open: boolean;
  onClose: () => void;
  onDelete?: () => void;
}

const DeleteModal: React.FC<DeleteError> = ({ open, onClose, onDelete }) => {
  const theme = useTheme();

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={onClose}
      aria-labelledby="delete-dialog-title"
      PaperProps={{
        sx: {
          p: 0,
          mt: 0,
        },
      }}
    >
      <DialogTitle
        sx={{
          p: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Confirm Deletion</Typography>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              color: '#fff',
              width: 30,
              height: 30,
              background: 'gray',
              borderRadius: '50%',
              padding: 0,
              '&:hover': {
                background: 'gray',
              },
            }}
          >
            <CloseRoundedIcon fontSize="small" />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ px: 3, py: 2 }}>
        <Typography variant="body1" sx={{ my: 2 }}>
          Are you sure you want to delete this item?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This action is permanent and cannot be undone.
        </Typography>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} variant="outlined" color="primary">
          Cancel
        </Button>
        <Button onClick={onDelete} variant="contained" color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
