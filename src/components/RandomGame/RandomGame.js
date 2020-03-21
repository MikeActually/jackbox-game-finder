import React from 'react';
import { Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    randomButton: {
        textTransform: "uppercase"
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function RandomGame(props) {
    const { getGamesList } = props;
    const [randomGame, setRandomGame] = React.useState('');
    const classes = useStyles();
    const getRandomGame = (event) => {
        const gamesList = getGamesList();
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
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
                className={classes.modal}
            >
                <div className={classes.paper}>
                    <h2 id="simple-modal-title">{randomGame}</h2>
                </div>
            </Modal>
            <Button className={classes.randomButton} variant="contained" color="primary" onClick={getRandomGame}>Get a random game!</Button>
        </div>
    );
}