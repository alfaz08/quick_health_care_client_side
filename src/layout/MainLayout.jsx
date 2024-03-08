import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navabar/Navbar";


const MainLayout = () => {
  return (
    <Grid>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </Grid>
  );
};

export default MainLayout;