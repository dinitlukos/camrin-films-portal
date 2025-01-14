import { Snackbar } from "@mui/material";

const ErrorSnackBar = ({
  message = "Something went wrong!",
  open = false,
  setOpen,
}) => {
  const handleClose = () => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      message={message}
    />
  );
};
export default ErrorSnackBar;
