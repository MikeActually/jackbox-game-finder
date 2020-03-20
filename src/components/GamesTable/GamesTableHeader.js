import React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel } from '@material-ui/core';

const headLabels = [
    { 'id': 'name', 'label': 'Name' },
    { 'id': 'pack', 'numeric': true, 'label': 'Pack' },
    { 'id': 'playerCount', 'numeric': true, 'label': 'Player Count' },
    { 'id': 'audience', 'numeric': true, 'label': 'Audience' }
];

export default function GameListHeader(props) {
    const { orderBy, order, classes, onRequestSort } = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };
    return (
        <TableHead>
            <TableRow>{
                headLabels.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}>
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>))
            }
            </TableRow>
        </TableHead>);
};