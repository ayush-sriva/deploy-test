import { Box, Typography } from "@mui/material";
import FilterChips from "../filterListChips";
import Button from "../../atoms/button";
import { useContext } from "react";
import { FilterContext } from "../../pages/findJobs";
import theme from "../../../theme";
const FilteredList: React.FC = () => {
  const { filtered, clearAll } = useContext(FilterContext);
  const displayLabel = (label: any) => {
    switch (label) {
      case "distance0":
        return "0-10 Kms";

      case "distance1":
        return "11-20 Kms";

      case "distance2":
        return "21-30 Kms";

      case "distance3":
        return "31-40 Kms";

      case "fullTime":
        return "Full Time";
      default:
        return label;
    }
  };

  return (
    <Box
      sx={{
        marginTop: "10px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {filtered &&
        filtered.map((filter: any, index: number) => {
          const label: any = displayLabel(filter);
          return (
            <Box sx={{ margin: "10px" }}>
              <FilterChips text={label} index={index} />
            </Box>
          );
        })}

      {filtered && filtered.length > 0 ? (
        <Button variant="text" onClick={clearAll}>
          <Typography
            variant="body1"
            width="inherit"
            height="inherit"
            sx={{
              borderBottom: `2px solid ${theme.palette.primary.primary300}`,
              color: " #4ABAAD",
            }}
            data-testid="clearAllFilters"
          >
            Clear All
          </Typography>
        </Button>
      ) : null}
    </Box>
  );
};

export default FilteredList;
