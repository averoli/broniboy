import './App.css';
import Profile from "./Profile";
import Grid from "@material-ui/core/Grid";


function App() {

    return (
        <Grid container>
            <Grid item xs={12}>
                <Profile
                />
            </Grid>
        </Grid>
    );
}

export default App;
