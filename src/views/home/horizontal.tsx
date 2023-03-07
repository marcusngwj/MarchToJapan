import Grid from '@mui/material/Unstable_Grid2';
import LeftPanel from "./components/leftPanel";
import RightPanel from './components/rightPanel';

export default function View() {
  return (
    <Grid container>
      <Grid md><LeftPanel /></Grid>
      <Grid md><RightPanel /></Grid>
    </Grid>
  );
}
