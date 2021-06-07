import React from 'react'
import Button from '@material-ui/core/Button';
import amber from '@material-ui/core/colors/amber';
import LocalBarRoundedIcon from '@material-ui/icons/LocalBarRounded';
import Grid from '@material-ui/core/Grid';

const Drink = ({ infos }) => {
    return (
        <Button key={infos + "btn"} variant="contained" style={{ backgroundColor: amber[500] }} className="drinkBtn" onClick={() => 5}>
            <Grid container spacing={1}>
                <Grid item xs={8} className="drinkBtnText">
                    <div >
                        {infos.name}
                    </div>
                    <div>
                        {infos.cost}
                    </div>
                </Grid>
                <Grid item xs={4} className="drinkBtnStock">
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div>
                            {infos.stock}
                        </div>
                        <LocalBarRoundedIcon />
                    </div>
                </Grid>
            </Grid>
        </Button>
    )
}

export default Drink
