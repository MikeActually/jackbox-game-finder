import React from 'react';
import { TextField, Grid, Switch, FormControlLabel, FormHelperText } from '@material-ui/core';

export default function GameTableFilter(props) {
    const { onFilterPlayer, onAudienceFilter } = props;
    const onSubmit = (event) => {
        event.preventDefault();
        onFilterPlayer(event.target.elements.playerCount.value);
    };
    const onPlayerCountChange = (event) => {
        onFilterPlayer(event.target.value);
    };
    const onAudienceToggle = (event) => {
        onAudienceFilter(event.target.checked);
    };
    return (
        <form onSubmit={onSubmit}>
            <Grid container spacing={1}
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item xs={6} sm={3}>
                    <TextField
                        name="playerCount"
                        label="Player Count"
                        variant="outlined"
                        onChange={onPlayerCountChange} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <FormControlLabel
                        control={
                            <Switch
                                name="audience"
                                color="primary"
                                size="small"
                                onChange={onAudienceToggle}
                            />
                        }
                        label="Overflow to Audience?"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormHelperText>When toggle is on and your player count exceeds the maximum for a game, then games displayed will also allow player count to overflow into audience </FormHelperText>
                </Grid>
            </Grid>
        </form>
    )
}