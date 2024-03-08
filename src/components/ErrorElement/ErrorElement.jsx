import { Grid } from "@mui/material";
import { Link } from "react-router-dom";


const ErrorElement = () => {
  const imageStyle = {
    display: 'block',
    margin: 'auto',
    marginTop: '6rem',
    maxWidth: '100%',
    height: 'auto',
  };

  const linkStyle = {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginTop: '2rem',
    textDecoration: 'none',
    color: 'black', // Change the color as needed
  };
  
  return (
    <Grid>
    
    <img
        style={imageStyle}
        src="https://i.ibb.co/72ZyFpK/404-page-cover.jpg"
        alt="404 Page Not Found"
      />
      <Link to="/" style={linkStyle}>
        <span>Go Home</span>
      </Link>
  </Grid>
  );
};

export default ErrorElement;