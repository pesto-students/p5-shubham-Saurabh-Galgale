import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./redux/actions";
import './App.css'

const App = () => {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: actions.INC_STEP });
  };
  const reset = () => {
    dispatch({ type: actions.RESET_STEP });
  };
  const decrement = () => {
    dispatch({ type: actions.DEC_STEP });
  };

  return (
    <div className="App">
      <h2>Count is {count} </h2>

      <Grid container justifyContent="center" direction="column" spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            onClick={increment}
            sx={{ borderRadius: 2, width: 300, height: 50, backgroundColor: "#5e5eb0" }}
          >
            Add a Step
          </Button>
          <Button
            variant="contained"
            onClick={decrement}
            sx={{ borderRadius: 2, mx: 1, width: 300, height: 50, backgroundColor: "#5e5eb0" }}
          >
            Remove a Step
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={reset}
            sx={{ borderRadius: 2, width: 300, height: 50, color: "black" }}
          >
            Reset Steps
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;