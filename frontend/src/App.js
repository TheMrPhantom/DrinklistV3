import Header from "./user/Header";
import Login from "./user/Login";
import { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import UsernameList from './user/UsernameList';
import UserInfo from './user/UserInfo';

function App() {

  const [loginToken, setloginToken] = useState("");
  const [snackbarState, setSnackbarState] = useState("");
  const [snackbarText, setSnackbarText] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false)
  };

  const openSnackbar = (text, state) => {
    setSnackbarState(state);
    setSnackbarText(text);
    setSnackbarOpen(true);
  };

  const logoutCallback = () => {
    setloginToken("");
    console.log("Logged out")
  };

  return (
    <div className="App">
      <Header token={loginToken} onLogOut={logoutCallback} />
      {
        loginToken === "" ?
          <Login snackbar={openSnackbar} onLogIn={setloginToken} />
          : (selectedUser === "" ?
            <UsernameList snackbar={openSnackbar} selectedUser={setSelectedUser} />
            : <UserInfo user={selectedUser} setUser={setSelectedUser} snackbar={openSnackbar} />
          )
      }

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackbarState}>
          {snackbarText}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
