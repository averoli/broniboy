import './App.css';
import Profile from "./Profile";
import Grid from "@material-ui/core/Grid";
import {useState} from "react";
import Form from "./form";


function App() {

    const Data = {
        firstName: 'Olga',
        secondName: 'Averoli'
    }

const [profile, setProfile] = useState(Data)

    return (
        <Grid container>
            <Grid item xs={12}>
                <Profile
                firstName={profile.firstName}
                secondName={profile.secondName}
                />
                <Form />
            </Grid>
        </Grid>
    );
}

export default App;
