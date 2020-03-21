import React from 'react';
import { Button, Dialog, DialogTitle, DialogContentText, DialogContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    randomButton: {
        textTransform: "uppercase"
    }
}));

export default function RandomGame(props) {
    const { gamesList } = props;
    const [randomGame, setRandomGame] = React.useState('');
    const classes = useStyles();
    const getRandomGame = (event) => {
        const randomInt = Math.floor(Math.random() * gamesList.length);
        if (gamesList.length > 0) {
            setRandomGame(gamesList[randomInt]);
        }
        handleOpen();
    }
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">{randomGame.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{randomGame.packName}</DialogContentText>
                    <DialogContentText>Players: {randomGame.minPlayers}-{randomGame.maxPlayers}</DialogContentText>
                    <DialogContentText>Audience: {randomGame.audience === true ? 'Yes' : 'No'}</DialogContentText>
                </DialogContent>
            </Dialog>
            <Button className={classes.randomButton} variant="contained" color="primary" onClick={getRandomGame}>Get a random game!</Button>
        </div >
    );
}