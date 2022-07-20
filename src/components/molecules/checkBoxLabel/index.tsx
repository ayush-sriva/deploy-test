import Checkbox from "../../atoms/checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@material-ui/core/styles";
const CustomFormLabel = styled(FormControlLabel)({
  "& .MuiTypography-root": {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px ",
    lineHeight: "22px ",
    color: "#656E66 ",
  },
});

interface Props {
  label: string;
}

const CheckboxLabel: React.FC<Props> = (props) => {
  return (
    <FormGroup>
      <CustomFormLabel
        control={<Checkbox defaultChecked sx={{ marginRight: "8px" }} />}
        label={props.label}
      />
    </FormGroup>
  );
};

export default CheckboxLabel;
