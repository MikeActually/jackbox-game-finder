import React from 'react';
import GamesTable from '../../components/GamesTable/GamesTable';
import GameTableFilter from '../../components/GamesTable/GameTableFilter';
import { Grid } from '@material-ui/core';
import { getGamesList } from '../../data/GamesList/GamesList';
import RandomGame from '../../components/RandomGame/RandomGame';

export default function JackboxGames() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('pack');
    const [playerCount, setPlayerCount] = React.useState('');
    const [audience, setAudience] = React.useState(false);
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const handlePlayerFilter = (value) => {
        setPlayerCount(value);
    };
    const handleAudience = (value) => {
        setAudience(value);
    };
    const gamesList = getGamesList({ order, orderBy, playerCount, audience });
    return (
        <Grid container spacing={3}>
            <Grid item container xs={12} spacing={1}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                <Grid item xs={12} sm={6}>
                    <GameTableFilter onFilterPlayer={handlePlayerFilter} onAudienceFilter={handleAudience} audience />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <RandomGame gamesList={gamesList} />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <GamesTable gamesList={gamesList} order={order} orderBy={orderBy} handleRequestSort={handleRequestSort} />
            </Grid>
        </Grid>
    );
}