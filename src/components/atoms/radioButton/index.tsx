import Radio, { RadioProps } from "@mui/material/Radio";
import radioTrueIcon from "../../../assets/icons/trueRadio.svg";
import radioFalseIcon from "../../../assets/icons/falseRadio.svg";
import { ReactSVG } from "react-svg";

interface Props extends RadioProps {}

const RadioButton = ({ sx, ...remProps }: Props) => {
  return (
    <Radio
      data-testid="radioButton"
      icon={<ReactSVG src={radioFalseIcon} />}
      checkedIcon={<ReactSVG src={radioTrueIcon} />}
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

export default RadioButton;
