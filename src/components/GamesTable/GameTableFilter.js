import React from 'react';
import { TextField } from '@material-ui/core';

export default function GameTableFilter(props) {
    const { onFilterPlayer } = props;
    return (
        <div style={{ 'textAlign': 'left' }}>
            <form>
                <TextField
                    id="playerCount"
                    label="Number of Players"
                    variant="outlined"
                    onChange={onFilterPlayer} />
            </form>
        </div>
    )
}