import { Avatar, FormControl, CardContent, CardMedia, createStyles, InputLabel, makeStyles, Select, Theme, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card/Card'
import CardHeader from '@material-ui/core/CardHeader'
import React from "react";
import { selectCardById } from "../../../../../core/store/storeV2/cardsSlice";
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import EditCardDrawer from '../../components/edit-card-drawer';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 350,
            margin: '10px'
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: 'green',
        },
    }),
);

export const CardExcerpt = ({ id }) => {
    const card = useSelector((state) => selectCardById(state, id))
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <div>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Menu
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}>
                            <MenuItem onClick={handleClose}>
                                <EditCardDrawer card={card} />
                            </MenuItem>
                        </Menu>
                    </div>
                }
                title={card.title}
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {card.description}
                </Typography>
            </CardContent>
        </Card>
    )
}