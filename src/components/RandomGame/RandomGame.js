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
    const gameName = randomGame ? randomGame.name : 'No game found.';
    const packName = randomGame ? randomGame.packName : 'Please refine your filters';
    const players = randomGame ? `Players: ${randomGame.minPlayers}-${randomGame.maxPlayers}` : '';
    const audience = randomGame ? `Audience: ${randomGame.audience === true ? 'Yes' : 'No'}` : '';
    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                {gameName && <DialogTitle id="simple-dialog-title">{gameName}</DialogTitle>}
                <DialogContent>
                    {packName && <DialogContentText>{packName}</DialogContentText>}
                    {players && <DialogContentText>{players}</DialogContentText>}
                    {audience && <DialogContentText>{audience}</DialogContentText>}
                </DialogContent>
            </Dialog>
            <Button className={classes.randomButton} variant="contained" color="primary" onClick={getRandomGame}>Get a random game!</Button>
        </div >
    );
}