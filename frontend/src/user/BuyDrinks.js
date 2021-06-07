import React from 'react'
import Paper from '@material-ui/core/Paper';
import Drink from './Drink'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import '../common.css'

import { useState, useEffect } from 'react'

const BuyDrinks = ({ user, snackbar }) => {

    const [drinks, setDrinks] = useState([]);
    const [drinksLoaded, setDrinksLoaded] = useState([]);

    useEffect(() => {
        const loadDrinks = async () => {
            const drinksInput = await fetch("http://localhost:5000/getDrinks",
                {
                    method: "POST",
                    headers: { "Content-type": "application/json", "Access-Control-Allow-Origin": "localhost:5000/*" },
                    body: JSON.stringify("token")
                });

            const status_code = drinksInput.status

            if (status_code === 200) {
                const drinksJson = await drinksInput.json();


                setDrinks(drinksJson)
                setDrinksLoaded(drinksJson)
            } else {
                snackbar("Server returned status code: " + status_code, "error")
            }
        }

        loadDrinks()
    }, [snackbar]);

    const searchDrinks = (text) => {
        setDrinks(drinksLoaded.filter(
            drink =>
            (
                String(drink.name).toLocaleLowerCase().includes(String(text)) || String(text) === ""
            )));
    }

    return (
        <Paper className="paper" elevation={3} style={{ padding: "10px" }}>
            <Typography variant="h6">
                Drink selection
            </Typography>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "10px", marginTop: "10px" }}>
                <TextField style={{ width: "70%" }} label="Drink-Name" type="text" onChange={(e) => searchDrinks(e.target.value)} />
            </div>
            <div className="flexContainer">
                {
                    drinks.map(
                        (drink) =>
                            (<Drink key={drink} infos={drink} user={user} />)
                    )
                }
            </div>
        </Paper>
    )
}

export default BuyDrinks
