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

const Profile = () => {

    const initialData = {
        firstName: ' ',
        secondName: ' '
    }

    const [initData, setInitData] = useState(initialData)

    const [isEditing, setEditing] = useState(false)

    const classes = useStyles()


    const handleClick = () => {
        setEditing(prevState => !prevState)
    }

    const handleChange = (e) => {
        console.log(e.target.name)
        const name = e.target.name
        const value = e.target.value
        setInitData({[name]: value});
    }

    const handleClickTest = (e) => {
        alert(e)
    }


    return (
        <Paper style={{paddingLeft: '60px', paddingTop: '20px'}}>
            <Box>
                <p style={{fontSize: '12px', color: '#999'}}>Главная / Профиль</p>

            </Box>
            <p style={{fontSize: '36px'}}>Профиль</p>
            <Grid container spacing={3} alignItems='center'>
                <Grid item lg={2} xs={12}>
                    <Typography variant="h6">
                        {initData.firstName} {initData.secondName}
                    </Typography>

                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file"/>
                    <CardMedia>
                        {/*<img src={img} alt='' className={classes.img}/>*/}
                    </CardMedia>

                </Grid>
                <Grid item lg={3} xs={12}>
                    <Button
                        startIcon={<SettingsIcon/>}
                        onClick={handleClick}
                        className={classes.button}
                    >
                        Редактировать
                    </Button>

                    <div className={classes.blockIcon}>
                        <Button
                            startIcon={<ExitToAppIcon/>}
                            className={classes.button}
                        >
                            Выход
                        </Button>
                    </div>
                </Grid>
                <Grid item lg={7} xs={12}>
                    <h2>История заказов</h2>
                    <p>Нет заказов</p>
                </Grid>
            </Grid>
            {isEditing &&
            <Dialog aria-labelledby="customized-dialog-title"
                    onClose={handleClick}
                    open={isEditing}>

                <DialogContent dividers>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={3}>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file"/>
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
                                        label="Имя"
                                        id="outlined-basic"
                                        defaultValue={initData.firstName}
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        label="Фамилия"
                                        defaultValue={initData.secondName}
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
                    <Button autoFocus onClick={() => handleClickTest('Heello')} className={classes.button}>
                        Сохранить
                    </Button>
                </DialogActions>
            </Dialog>
            }
        </Paper>
    )
}

export default Profile