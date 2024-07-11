import { Modal } from "../CommonComponents/ModelPopUp/Model";
// import React, {useState} from "react";
import React, { useState } from "react";
import { Header } from "../CommonComponents/Header/Header";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import axios from "axios";
import {VenuGrid} from "../CommonComponents/VenuGrid/VenyGrid";

const App = () => {
  const [showModal, setshowModal] = useState(true);
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState(0);
  const [foodType, setFoodType] = useState('both');
  const [cities, setCities] = useState([])
  const [venus, setVenus] = useState([]);

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  // Handler function for food type selection change
  const handleFoodTypeChange = (event) => {
    setFoodType(event.target.value);
  };

  // Handler function for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any further processing with budget and foodType states
    console.log(`Budget: ${budget}, Food Type: ${foodType}`);
    // You can pass this data to another component or perform an API call, etc.
  };

  React.useEffect(() => {
    fetch(`http://localhost:8080/api/venue/cities`)
      .then(response => response.json())
      .then(data => setCities(data.cities))
  }, [])

  const handleCitySelection = (city) => {
    // fetch(`http://localhost:8080/api/venue/search`,{
    //   method:'POST',
    //   Body:{
    //     "budget":45631,
    //     "city":"Hubbali"},
    //   Headers: {
    //       Accept: 'application.json',
    //       'Content-Type': 'application/json'
    //     },
    // })
    setCity(city)
    axios.post(`http://localhost:8080/api/venue/search`, {
      "budget": budget,
      "city": city
    })
      .then(function (response) {
        console.log('anil',response);
        setVenus(response.data.venues);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const locationHeader = (
    <>
      <FormControl fullWidth style={{ margin: "10px", width: "19rem" }}>
        <InputLabel id="demo-simple-select-label">Select City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label=""
          onChange={(e) => handleCitySelection(e.target.value)}
        >
          {cities && cities.map((city, index) => (<MenuItem value={city}>{city}</MenuItem>))}
        </Select>
      </FormControl>
      {/* <FormControl fullWidth style={{margin: "10px", width: "19rem"}}> */}
      {/* <InputLabel id="demo-simple-select-label">Select Locality</InputLabel>
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
          </Select> */}
      {/* </FormControl> */}
    </>
  );

  return (
    <div>
      <Header />
      <div class="flex flex-row">{locationHeader}
        <>
          <form onSubmit={handleSubmit} >
            <Grid container spacing={2} alignItems="center " class="flex flex-row">
              <Grid item xs={12}>
                <TextField
                  style={{ margin: "10px", width: "19rem" }}
                  label="Budget"
                  type="number"
                  value={budget}
                  onChange={handleBudgetChange}
                  fullWidth
                  required
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth style={{ margin: "10px", width: "19rem" }}>
                  <InputLabel id="food-type-label">Food Type</InputLabel>
                  <Select
                    labelId="food-type-label"
                    value={foodType}
                    onChange={handleFoodTypeChange}
                    fullWidth
                  >
                    <MenuItem value="both">Both (Veg and Non-Veg)</MenuItem>
                    <MenuItem value="veg">Vegetarian Only</MenuItem>
                    <MenuItem value="nonveg">Non-Vegetarian Only</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} class="flex items-center">
                <Button type="submit" variant="contained" color="primary">
                  Filter
                </Button>
                <Button type="Clear" variant="contained" color="primary">
                  Clear
                </Button>
              </Grid>
            </Grid>
          </form>
        </>
      </div>
      <div>

      </div>
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
      <>
        <>
        {venus.length && 
         <VenuGrid venues={venus}></VenuGrid>
         }
        </>

      </>
      <Modal
        shouldShow={showModal}
        onRequestClose={() => {
          setshowModal(false);
        }}
        closeClick={() => {
          setshowModal(false);
        }}
      >
        <div style={{ margin: "10px", width: "50%" }}>{locationHeader}</div>
      </Modal>
    </div>
  );
};

export default App;
