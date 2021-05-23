import './App.css';
import Profile from "./Profile";
import Grid from "@material-ui/core/Grid";
import {useState} from "react";
import Newprofile from "./Newprofile";


export const Data = {
    firstName: 'Olga',
    secondName: 'Averoli',
    file: '',
    src: 'https://i.pinimg.com/564x/d4/47/cb/d447cb319f0d32552dbd3813638f66bf.jpg'
}

function App() {

    const [data, setData] = useState(Data)


    const updateProfile = (updatedProfile) => {
        setData(updatedProfile)
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Profile
                    firstName={data.firstName}
                    secondName={data.secondName}
                    src={data.src}
                    updateProfile={updateProfile}
                />
                <Newprofile
                />
            </Grid>
        </Grid>
    );
}

export default App;
