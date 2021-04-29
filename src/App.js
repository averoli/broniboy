import './App.css';
import Profile from "./Profile";
import Grid from "@material-ui/core/Grid";
import {useState} from "react";

export const Data = {
    firstName: 'Olga',
    secondName: 'Averoli'
}

function App() {

    const [data, setData] = useState(Data)

    const updateProfile = (initData) => {
        setData(initData)
    }

    console.log(data)
    return (
        <Grid container>
            <Grid item xs={12}>
                <Profile
                    data={data}
                    firstName={data.firstName}
                    secondName={data.secondName}
                    updateProfile={updateProfile}
                />
            </Grid>
        </Grid>
    );
}

export default App;
