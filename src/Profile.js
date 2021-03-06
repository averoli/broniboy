import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import ProfileEdit from "./ProfileEdit";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import {PhotoCamera} from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";


const useStyles = makeStyles((theme) => ({
    img: {
        display: 'flex',
        maxWidth: '80%',
        borderRadius: '8px'
    },
    blockIcon: {
        display: 'flex',
        direction: 'row',
    },
    location: {
        color: '#999',
        paddingRight: '5px'
    },
    input: {
        display: 'none'
    },
    button: {
        color: '#999',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
            color: 'black'
        }
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    formControl: {
        padding: '0px',
        margin: theme.spacing(1)
    },
    dialogAct: {
        justifyContent: 'center'
    }

}))

const Profile = ({ firstName, secondName, src, updateProfile }) => {

    const initialData = {
        updateFirstName: ' ',
        updateSecondName: ' ',
        updateSrc: '',
        updateFile: ''

    }

    const [initData, setInitData] = useState(initialData)

    const [isEditing, setEditing] = useState(false)

    const classes = useStyles()

    const handleClick = () => {
        setEditing(prevState => !prevState)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setInitData({...initData, [name]: value});
    }


    const handleSave = (e) => {
        setEditing(prevState => {
            if (prevState === true) {
                updateProfile && updateProfile(initData)
            }
            return !prevState
        })
    }

    const photoUpload = (e) => {
        console.log(e)
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            setInitData({
                file: file,
                updateSrc: reader.result
            });
        }
        reader.readAsDataURL(file);
    }

    return (
        <Paper style={{paddingLeft: '60px', paddingTop: '20px'}}>
            <Box>
                <p style={{fontSize: '12px', color: '#999'}}>?????????????? / ??????????????</p>

            </Box>
            <p style={{fontSize: '36px'}}>??????????????</p>
            <Grid container spacing={3} alignItems='center'>
                <Grid item md={2} xs={12}>
                    <CardMedia>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file"/>
                        <img src={src} alt='' className={classes.img} style={{width: '120px'}}/>
                    </CardMedia>
                    <Typography variant="h6" style={{marginTop: '10px'}}>
                        {firstName} {secondName}
                    </Typography>

                </Grid>
                <Grid item md={3} xs={12}>
                    <Button
                        startIcon={<SettingsIcon/>}
                        onClick={handleClick}
                        className={classes.button}
                    >
                        ??????????????????????????
                    </Button>

                    <div className={classes.blockIcon}>
                        <Button
                            startIcon={<ExitToAppIcon/>}
                            className={classes.button}
                        >
                            ??????????
                        </Button>
                    </div>
                </Grid>
                <Grid item md={7} xs={12}>
                    <h2>?????????????? ??????????????</h2>
                    <p>?????? ??????????????</p>
                </Grid>
            </Grid>
            {isEditing &&
            <Dialog aria-labelledby="customized-dialog-title"
                    onClose={handleClick}
                    open={isEditing}>

                <DialogContent dividers>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={3}>
                            <input accept="image/*" className={classes.input} id="icon-button-file"
                                   type="file"
                                   onChange={photoUpload}
                            />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera style={{color: '#999'}}/>
                                </IconButton>
                            </label>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <form className={classes.form}>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        label="??????"
                                        id="outlined-basic"
                                        defaultValue={firstName}
                                        name='firstName'
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        label="??????????????"
                                        defaultValue={secondName}
                                        name='secondName'
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        onChange={handleChange}
                                    />
                                </FormControl>
                            </form>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions className={classes.dialogAct}>
                    <Button autoFocus onClick={handleSave} className={classes.button}>
                        ??????????????????
                    </Button>
                </DialogActions>
            </Dialog>
            }
        </Paper>
    )
}

export default Profile