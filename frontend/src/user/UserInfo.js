import React from 'react'
import BuyDrinks from './BuyDrinks'
import History from './History'
import Statistics from './Statistics'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import amber from '@material-ui/core/colors/amber';

const UserInfo = ({ user, setUser, snackbar }) => {
    return (
        <div>
            <Grid container spacing={3} style={{ padding: "10px" }}>
                <Grid item xs={5} style={{ height: "100%" }}>
                    <BuyDrinks user={user} snackbar={snackbar} />
                </Grid>
                <Grid item xs={7}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Statistics user={user} />
                        </Grid>
                        <Grid item xs={12}>
                            <History user={user} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ display: "flex", flexDirection: "column" }}>
                    <Button variant="contained" style={{ backgroundColor: amber[500], margin: "10px" }} onClick={() => setUser("")}>Back</Button>
                </Grid>
            </Grid>

        </div>
    )
}

export default UserInfo
