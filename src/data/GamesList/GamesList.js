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

function booleanComparator(a, b, orderBy) {
    return (b[orderBy] === a[orderBy] ? 0 : (a[orderBy] === true ? 1 : -1));
}

function getComparator(order, orderBy) {
    let orderByField = orderBy;
    let useComparator = descendingComparator;
    switch (orderBy) {
        case 'playerCount':
            orderByField = order === 'desc' ? 'maxPlayers' : 'minPlayers';
            break;
        case 'audience':
            useComparator = booleanComparator;
            break;
        default:
            break;
    }
    return order === 'desc'
        ? (a, b) => useComparator(a, b, orderByField)
        : (a, b) => -useComparator(a, b, orderByField);
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

function playerCountFilter(gamesList, playerCount, audience) {
    playerCount = parseInt(playerCount);
    if (!isNaN(playerCount)) {
        gamesList = gamesList.filter(game => {
            return (game.minPlayers <= playerCount
                && game.maxPlayers >= playerCount) ||
                (audience === true && playerCount > game.maxPlayers && game.audience === true);
        });
    }
    return gamesList;
}

function packFilter(gamesList, checkedPacks) {
    return gamesList.filter(game => {
        return checkedPacks.indexOf(game.pack) !== -1;
    });
}

export function getGamesList(params) {
    const { order, orderBy, playerCount, audience, checkedPacks } = params;
    let gamesList = games.games;
    gamesList = packFilter(gamesList, checkedPacks);
    gamesList = playerCountFilter(gamesList, playerCount, audience);
    gamesList = stableSort(gamesList, getComparator(order, orderBy));
    gamesList.forEach((element, index) => {
        gamesList[index].packName = games.packs[element.pack];
    });
    return gamesList;
}

export function getPacksList() {
    return games.packs;
}