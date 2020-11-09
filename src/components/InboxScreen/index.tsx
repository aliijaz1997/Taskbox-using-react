import React, { FC } from 'react';
import { connect } from 'react-redux';
import PureTaskList from '../tasklist/index';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
    }),
);
//****************************
export interface InboxProps {
    error: boolean,
}

//   *****************************

export const InboxScreen: FC<InboxProps> = ({ error }) => {
    const classes = useStyles();

    if (error) {
        return (
            <div>
                Ooops It's error !!!
            </div>
        )
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        Task Box
              </Typography>
                </Toolbar>
            </AppBar>
            <PureTaskList />
        </div>
    );
}
export default connect(({ error }: any) => ({ error }))(InboxScreen);