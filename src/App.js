import "./styles.css";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

export default function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid sm={2} xs={0} />
        <Grid xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
}
