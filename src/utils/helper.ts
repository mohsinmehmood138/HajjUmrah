import { toast } from 'react-toastify';

export const showSuccessToast = (message = 'Updated Successfully') => {
  toast.success(message, {
    className: 'toast-success',
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    style: {
      fontWeight: 'bold',
      borderRadius: '8px',
    },
  });
};

export const showErrorToast = (message = 'Something went wrong!') => {
  toast.error(message, {
    className: 'toast-error',
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    style: {
      fontWeight: 'bold',
      borderRadius: '8px',
    },
  });
};
