import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import GameListHeader from './GamesTableHeader';

const useStyles = makeStyles(theme => ({
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function GamesTable(props) {
    const { handleRequestSort, gamesList, order, orderBy } = props;
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <GameListHeader
                    orderBy={orderBy}
                    order={order}
                    classes={classes}
                    onRequestSort={handleRequestSort}
                />
                <TableBody>
                    {gamesList.map((row, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`;
                        return (
                            <TableRow key={labelId}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.packName}</TableCell>
                                <TableCell align="right">{row.minPlayers}-{row.maxPlayers}</TableCell>
                                <TableCell align="right">{row.audience ? 'Yes' : 'No'}</TableCell>
                            </TableRow>);
                    })}
                </TableBody>
            </Table>
        </TableContainer >
    );
}