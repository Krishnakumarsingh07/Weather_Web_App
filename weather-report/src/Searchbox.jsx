import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { colors } from "@mui/material";

export default function Searchbox({ passFunc }) {
  let [city, setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let fetchData = async () => {
    const API_KEY = "429f991e510caba8d635d7c7ae3b42c8";
    const URL_LINK = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    let data = await fetch(URL_LINK);
    let weatherData = await data.json();
    console.log(weatherData);

    await passFunc(weatherData);
  };

  const headingStyle = {
    color: "rgb(55, 37, 8)",
    border: "2px solid rgb(148 144 138)",
    // padding: '0px 1px 0px 1px',
    borderRadius: "6px",
    // backgroundColor: "#e6e8b469"
  };

  const divStyle = {
    border: "2px solid rgb(148 144 138)",
    borderRadius: "15px",
    padding: "30px 30px 80px 30px",
  };

  const buttonStyle = {
    marginLeft: "10px",
    marginTop: "10px",
    color: "rgb(55, 37, 8)",
    backgroundColor: "#e6e8b469",
  };

  const inputStyle = {
    // backgroundColor: "white",
    borderRadius: "15px",
  };

  return (
    <>
      <div style={divStyle}>
        <h3 style={headingStyle}>Weather Search</h3>
        <div>
          <form action="">
            <TextField
              required
              style={inputStyle}
              onChange={handleChange}
              id="outlined-basic"
              label="Required"
              variant="outlined"
              value={city}
            />
            <Button style={buttonStyle} onClick={fetchData}>
              Search
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
