import { useSelector } from "react-redux";
import { selectTaskCount } from "../../redux/selectors";
import { Typography } from "@mui/material";

export const TaskCounter = () => {
  const { active, completed } = useSelector(selectTaskCount);

  return (
    <div>
      <Typography variant="h6">Tasks counter</Typography>
      <p>Active: {active}</p>
      <p>Completed: {completed}</p>
    </div>
  );
};