import { Box } from "@mui/material";
import Img from "../../atoms/image";
import aqi from "../../../assets/images/AirQualityIndex.svg";
import theme from "../../../theme/index";
interface AirQualityProps {
  airQuality: string;
}
const AirQualityIndex = ({ airQuality }: AirQualityProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "212px",
        textAlign: "center",
      }}
      data-testid="aqi"
    >
      <Img src={aqi}></Img>
      <Box sx={{ position: "absolute", top: "35%", left: "29%" }}>
        <Box
          style={{
            color: `${theme.palette.primary.main}`,
            fontFamily: "Montserrat",
            fontWeight: "600",
            fontSize: "48px",
            lineHeight: "48px",
          }}
        >
          {airQuality}
        </Box>
      </Box>
    </Box>
  );
};

export default AirQualityIndex;
