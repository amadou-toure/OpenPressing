import { Grid } from "@mui/material";
import ProductPerfomance from "./dashboard/ProductPerfomance";

const Tables = (props) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default Tables;
