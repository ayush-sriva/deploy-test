import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Icon from "../../atoms/icon";
import theme from "../../../theme";
interface Props {
  onChange: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  options: any[];
  icon: string;
  placeholder: string;
  marginLeft: string;
  width: string;
}
const FindJobsAutoComplete: React.FC<Props> = ({
  onChange,
  options,
  icon,
  placeholder,
  marginLeft,
  width,
}) => {
  return (
    <Autocomplete
      onChange={(_event, value) => onChange(value)}
      sx={{
        display: "inline-block",
        "& input": {
          width: 200,
          bgcolor: "background.paper",
          color: () =>
            theme.palette.getContrastText(theme.palette.background.paper),
        },
        width: {width},
        borderRight: `1px solid ${theme.palette.greyColors.main}`,
      }}
      id="custom-input-demo"
      options={options}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <TextField
            name="skills"
            variant="standard"
            inputProps={{
              ...params.inputProps,
            }}
            InputProps={{
              startAdornment: (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "4px",
                    marginRight: "20px",
                  }}
                >
                  <Icon src={icon} />
                </Box>
              ),
              disableUnderline: true,
              sx: {
                fontFamily: "Montserrat",
                color: `${theme.palette.textColor.highEmphasis}`,
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "22px",
              },
            }}
            sx={{
              marginLeft: marginLeft,
              width: "100%",
            }}
            placeholder={placeholder}
          ></TextField>
        </div>
      )}
    />
  );
};

export default FindJobsAutoComplete;
