import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

export default function GamePackFilter(props) {
    const { packs, checkedPacks, onPackToggle } = props;
    return (
        <List>
            {Object.keys(packs).map(packKey => {
                const labelId = `checkbox-list-label-${packKey}`;
                return (
                    <ListItem key={packKey} role={undefined} dense button onClick={onPackToggle(packKey)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checkedPacks.indexOf(packKey) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                                color="primary"
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={packs[packKey]} />
                    </ListItem>
                );
            })}
        </List>
    );
}
