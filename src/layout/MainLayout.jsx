import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <Grid>
      <Outlet></Outlet>
    </Grid>
  );
};

export default MainLayout;