import { Typography, Box } from "@mui/material";
import Button from "../../atoms/button";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@material-ui/core/styles";
import Icon from "../../atoms/icon";
import fileUploaded from "../../../assets/icons/fileUploaded.svg";
import {
  name,
  text,
  uploadButton,
  confirmButton,
  dialogHeading,
  applyButton,
} from "./constants";
const CustomDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    maxWidth: "700px",
    borderRadius: "12px",
  },
});
const UploadResume: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const imageRef: React.LegacyRef<HTMLInputElement> = React.createRef();
  const [file, setFile] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    imageRef.current?.click();
  };
  const handleSubmit = () => {
    setFile(true);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        borderRadius="8px"
        focusColor="#0B6D62 !important"
        height="32px"
        hoverColor="#4ABAAD !important"
        style={{
          backgroundColor: "#30A193",
          color: "undefined",
          padding: "8px 32px 8px 32px",
        }}
        variant="contained"
        width="101px"
        data-testid="openUploadDialog"
      >
        <Typography variant="caption1">{applyButton}</Typography>
      </Button>
      <CustomDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        data-testid="dialogClose"
        sx={{ maxHeight: "700px", borderRadius: "12px" }}
      >
        <Box sx={{ padding: "32px 54px 54px 54px", width: "592" }}>
          <DialogTitle sx={{ padding: "0px" }}>
            {" "}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              data-testid="dialogCloseElement"
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          {!file ? (
            <>
              <Typography variant="heading2">{dialogHeading}</Typography>
              <Box
                sx={{
                  marginTop: "16px",
                  backgroundColor: "#EFFFFD",
                  borderRadius: "12px",
                  border: "2px dashed #30A193",
                  height: "268px",
                  width: "592px",
                  display: "flex",
                  justifyContent: "center",
                  verticalAlign: "middle",
                  alignItems: "center",
                }}
              >
                <input
                  type="file"
                  ref={imageRef}
                  style={{ display: "none" }}
                  onChange={handleSubmit}
                />
                <Button
                  sx={{
                    borderRadius: "8px",
                    focusColor: "#0B6D62 !important",
                    height: "48px",
                    hoverColor: "#4ABAAD !important",
                    backgroundColor: "#30A193",
                    width: "281px",
                  }}
                  variant="contained"
                  onClick={handleClick}
                  data-testid="uploadFileElement"
                >
                  <Typography variant="caption1">{uploadButton}</Typography>
                </Button>
              </Box>
            </>
          ) : (
            <Box
              sx={{
                height: "268px",
                width: "592px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                verticalAlign: "middle",
                alignItems: "center",
              }}
            >
              <Icon src={fileUploaded} />
              <Typography variant="heading2">
                <strong>{name}</strong> {text}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "8px",
                  focusColor: "#0B6D62 !important",
                  height: "48px",
                  hoverColor: "#4ABAAD !important",
                  backgroundColor: "#30A193",
                  width: "156px",
                }}
                onClick={handleClose}
              >
                <Typography variant="caption1">{confirmButton}</Typography>
              </Button>
            </Box>
          )}
        </Box>
      </CustomDialog>
    </>
  );
};

export default UploadResume;
