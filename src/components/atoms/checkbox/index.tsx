import CheckBox, { CheckboxProps } from "@mui/material/Checkbox";
import trueCheckbox from "../../../assets/icons/true_checkbox.svg";
import falseCheckbox from "../../../assets/icons/false_checkbox.svg";
import { ReactSVG } from "react-svg";

interface Props extends CheckboxProps {}

const Checkbox = ({ sx, ...remProps }: Props) => {
  return (
    <CheckBox
      data-testid="checkbox"
      icon={<ReactSVG src={falseCheckbox} />}
      checkedIcon={<ReactSVG src={trueCheckbox} />}
      sx={{
        padding: 0,
        "&:hover": {
          backgroundColor: "transparent",
        },
        ...sx,
      }}
      {...remProps}
    />
  );
};

export default Checkbox;
