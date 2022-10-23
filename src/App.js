import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const fetchData = async () => {
  const url = "https://infinite-sands-83108.herokuapp.com/login";
  console.log("token", process.env.REACT_APP_HEROKU_TOKEN);
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: process.env.REACT_APP_HEROKU_TOKEN,
    },
    body: JSON.stringify({
      id: "10011",
      password: "Jerry Driskill",
    }),
  };

  try {
    const response = await fetch(url, settings);
    const result = await response.json();
    console.log("result", result);
  } catch (e) {
    console.log(e);
  }
};

function App() {
  const [screen, setScreen] = useState("patient");

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header {...{ screen, setScreen }}></Header>
      <Body {...{ screen, setScreen }}></Body>
      <Footer />
    </div>
  );
}

export default App;
