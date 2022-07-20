import { Box, Typography } from "@mui/material";
import theme from "../../../theme/index";
import Icon from "../../atoms/icon";
import close from "../../../assets/icons/close.svg";
import { useContext } from "react";
import { FilterContext } from "../../pages/findJobs";
import { JobContext } from "../../../App";
interface ChipsProps {
  text: string;
  index: number;
}

const FilterChips = (props: ChipsProps) => {
  const { text, index } = props;
  const { filtered, setFiltered } = useContext(FilterContext);
  const { filteredJobs, setFilteredJobs } = useContext(JobContext);
  function handleDelete(indexDelete: number) {
    const value = filtered[index];
    const filteredJobList = filteredJobs.filter(
      (filter: any) => filter.distance != value
    );

    let clearedArray = [...filtered];

    clearedArray.splice(indexDelete, 1);
    console.log(clearedArray);
    setFilteredJobs(filteredJobList);
    setFiltered(clearedArray);
  }
  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette.structural.main}`,
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        padding: "4px 12px",
        height: "32px",
      }}
      data-testid="chips"
    >
      <Typography
        variant="caption2"
        sx={{ color: `${theme.palette.textColor.mediumEmphasis}` }}
      >
        {text}
      </Typography>
      <Box sx={{ marginTop: "5px", cursor: "pointer" }}>
        <Icon
          src={close}
          onClick={() => {
            handleDelete(index);
          }}
        ></Icon>
      </Box>
    </Box>
  );
};

export default FilterChips;
