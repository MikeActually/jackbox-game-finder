import React from 'react';
import { TextField, Grid, Switch, FormControlLabel, FormHelperText } from '@material-ui/core';
import GamePackFilter from './GamePackFilter';

export default function GameTableFilter(props) {
    const { onFilterPlayer, onAudienceFilter, onTogglePackChecked, packs, checkedPacks } = props;
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
    const onPackToggle = value => () => {
        onTogglePackChecked(value);
    };
    return (
        <form onSubmit={onSubmit}>
            <Grid container spacing={3} justifyContent="flex-start">
                <Grid item container spacing={3} justifyContent="flex-start" xs={12} sm={6}>
                    <Grid item xs={12}>
                        <TextField
                            name="playerCount"
                            label="Player Count"
                            variant="outlined"
                            onChange={onPlayerCountChange}
                            type="number" />
                    </Grid>
                    <Grid item xs={12}>
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
                <Grid>
                    <GamePackFilter
                        packs={packs}
                        onPackToggle={onPackToggle}
                        checkedPacks={checkedPacks} />
                </Grid>
            </Grid>
        </form>
    );
}