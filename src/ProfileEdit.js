import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import {PhotoCamera} from "@material-ui/icons";
import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none'
    },
    button: {
        backgroundColor: '#F37021',
        color: 'white',
        '&:hover': {
            color: '#999'
        },
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

const ProfileEdit = ({onClickSave, handleClick, isEditing}) => {

    const classes = useStyles()

    const handleSave = () => {
        onClickSave && onClickSave()
    }

    return (
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
                                    defaultValue=''
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                />
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    label="Фамилия"
                                    defaultValue=''
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                />
                            </FormControl>
                        </form>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions className={classes.dialogAct}>
                <Button autoFocus onClick={handleSave} className={classes.button}>
                    Сохранить
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ProfileEdit