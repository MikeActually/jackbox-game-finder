import games from './jackboxgames.json';


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
function getComparator(order, orderBy) {
    let orderByField;
    switch (orderBy) {
        case 'playerCount':
            orderByField = order === 'desc' ? 'maxPlayers' : 'minPlayers';
            break;
        default:
            orderByField = orderBy;
            break;
    }
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderByField)
        : (a, b) => -descendingComparator(a, b, orderByField);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

export function getGamesList(params) {
    const { order, orderBy } = params;
    const sortedGames = stableSort(games.games, getComparator(order, orderBy));
    sortedGames.forEach((element, index) => {
        sortedGames[index].packName = games.packs[element.pack];
    });
    return sortedGames;
}