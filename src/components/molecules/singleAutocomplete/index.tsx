import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { styled } from "@material-ui/core/styles";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    padding: "4px 12px !important",
    height: "50px",
    width: "400px",
    borderRadius: "8px",
  },
});
interface Props {
  onChange: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  options: any[];
}
const SingleAutoComplete: React.FC<Props> = (props) => {
  return (
    <Autocomplete
      onChange={(_event, value) => props.onChange(value)}
      sx={{
        display: "inline-block",
        "& input": {
          width: 200,
          bgcolor: "background.paper",
          color: (theme) =>
            theme.palette.getContrastText(theme.palette.background.paper),
        },
      }}
      id="custom-input-demo"
      options={props.options}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <Typography variant="subtitle1" sx={{ marginBottom: "4px" }}>
            {"Where do you stay ?"}
          </Typography>
          <CustomTextField
            id="autocomplete"
            variant="outlined"
            inputProps={{ ...params.inputProps }}
            placeholder="Enter your Location"
          />
        </div>
      )}
    />
  );
};

export default SingleAutoComplete;
