import {Modal} from "../src/CommonComponents/ModelPopUp/Model";
// import React, {useState} from "react";
import React, {useState} from "react";
import "./index.css";
import {Header} from "./CommonComponents/Header/Header";
import {Box, FormControl, InputLabel, Select, MenuItem} from "@mui/material";

const App = () => {
  const [showModal, setshowModal] = useState(true);
  const [city, setCity] = useState("");
  const locationHeader = (
    <>
      <FormControl fullWidth style={{margin: "10px", width: "19rem"}}>
        <InputLabel id="demo-simple-select-label">Select City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Age"
          onChange={(e) => setCity(e.target.value)}
        >
          <MenuItem value={"Bangalore"}>Bengalore</MenuItem>
          <MenuItem value={"Hubli"}>Hubli</MenuItem>
          <MenuItem value={"Bijapur"}>Bijapur</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth style={{margin: "10px", width: "19rem"}}>
        <InputLabel id="demo-simple-select-label">Select Locality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Age"
          onChange={(e) => setCity(e.target.value)}
        >
          <MenuItem value={"Bangalore"}>Bengalore</MenuItem>
          <MenuItem value={"Hubli"}>Hubli</MenuItem>
          <MenuItem value={"Bijapur"}>Bijapur</MenuItem>
        </Select>
      </FormControl>
    </>
  );

  return (
    <div>
      <Header />
      <div class="flex flex-row">{locationHeader}</div>
      <div> </div>
      <button
        onClick={() => {
          setshowModal(true);
        }}
        class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline flex items-center"
      >
        <svg
          className="h-5 w-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        Click me
      </button>
      <Modal
        shouldShow={showModal}
        onRequestClose={() => {
          setshowModal(false);
        }}
        closeClick={() => {
          setshowModal(false);
        }}
      >
        <div style={{margin: "10px", width: "50%"}}>{locationHeader}</div>
      </Modal>
    </div>
  );
};

export default App;
