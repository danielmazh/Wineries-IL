import React from "react";
import logo from "./logo.svg";
import "././styles/App.css";
import NavBar from "./common/components/NavBar";
import SignUp from "./common/components/SingUp";

function App() {
  const [data, setData] = React.useState(null);
  const [authToken, setAuthToken] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <NavBar authToken={authToken} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <SignUp />
      </header>
    </div>
  );
}

export default App;
