import React from 'react'
import '../common.css'
import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import amber from '@material-ui/core/colors/amber';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';

const UsernameList = ({ snackbar, selectedUser }) => {

    const [users, setUsers] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {


        const loadUsers = async () => {
            const userInput = await fetch("http://localhost:5000/getUser",
                {
                    method: "POST",
                    headers: { "Content-type": "application/json", "Access-Control-Allow-Origin": "localhost:5000/*" },
                    body: JSON.stringify("token")
                });

            const status_code = userInput.status

            if (status_code === 200) {
                const userJson = await userInput.json();
                userJson.sort();

                setUsers(userJson)
            } else {
                snackbar("Server returned status code: " + status_code, "error")
            }
        }

        loadUsers()
    }, [snackbar]);

    return (
        <Paper elevation={3} className="paper" style={{ margin: "10px", padding: "20px" }}>
            <div className="flexContainer" style={{ marginBottom: "20px" }}>
                <TextField style={{ width: "70%" }} label="Username" type="text" onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="flexContainer">
                {
                    users.map(
                        (user) => (
                            <Fade key={user + "fade"} in={text === "" || String(user).toLocaleLowerCase().includes(text.toLocaleLowerCase())}>
                                <Button key={user + "btn"} variant="contained" style={{ backgroundColor: amber[500] }} className="nameBtn" onClick={() => selectedUser(user)}>{user}</Button>
                            </Fade>
                        )
                    )
                }
            </div>
        </Paper>
    );
}

export default UsernameList
