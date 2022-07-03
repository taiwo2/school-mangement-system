import './App.css';
import {Container,AppBar,Typography, Grow,Grid} from "@material-ui/core"
// import Typography from '@mui/material/Typography';
import ShowStudent from './component/ShowStudent';
import CreateStudent from './component/CreateStudent';
import useStyles from "./component/CreateStudent/styles"
function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Students Create & Show
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container alignItems="stretch" style={{justifyContent: "space-between"}}>
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appbar} position="static" color="inherit">
                  <ShowStudent />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
                <AppBar className={classes.appbar} position="static" color="inherit">
                  <CreateStudent />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
