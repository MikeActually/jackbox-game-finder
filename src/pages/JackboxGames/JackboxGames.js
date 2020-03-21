import React from 'react';
import GamesTable from '../../components/GamesTable/GamesTable';
import GameTableFilter from '../../components/GamesTable/GameTableFilter';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import { getGamesList, getPacksList } from '../../data/GamesList/GamesList';
import RandomGame from '../../components/RandomGame/RandomGame';
import FilterList from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function JackboxGames() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('pack');
    const [playerCount, setPlayerCount] = React.useState('');
    const [audience, setAudience] = React.useState(false);
    const packsList = getPacksList();
    const [checkedPacks, setCheckedPacks] = React.useState(Object.keys(packsList));
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
    const handlePackChecked = (value) => {
        const currentIndex = checkedPacks.indexOf(value);
        const newChecked = [...checkedPacks];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setCheckedPacks(newChecked);
    }
    const gamesList = getGamesList({ order, orderBy, playerCount, audience, checkedPacks });
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <RandomGame gamesList={gamesList} />
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<FilterList />}>
                    <Typography>Filter Games</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <GameTableFilter
                        onFilterPlayer={handlePlayerFilter}
                        onAudienceFilter={handleAudience}
                        onTogglePackChecked={handlePackChecked}
                        packs={packsList}
                        checkedPacks={checkedPacks}
                        audience />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <GamesTable
                gamesList={gamesList}
                order={order}
                orderBy={orderBy}
                handleRequestSort={handleRequestSort} />
        </div>
    );
}