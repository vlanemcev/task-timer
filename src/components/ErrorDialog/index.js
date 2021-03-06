import React from "react";
import PropTypes from "prop-types";

// material UI
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const ErrorDialog = (props) => {
  const { id, title, isOpen, children, onClose } = props;

  return (
    <Dialog
      open={isOpen}
      aria-labelledby={`${id}-dialog-title`}
      aria-describedby={`${id}-dialog-description`}
    >
      <DialogTitle id={`${id}-dialog-title`}>{title}</DialogTitle>
      <DialogContent id={`${id}-dialog-description`}>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ErrorDialog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
};

export default ErrorDialog;
