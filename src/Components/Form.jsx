<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios";

function Form(props){
    const [city, setCity] = useState("London");
    const [format, setFormat] = useState(
        {lat: "",lng: ""}
    );

    useEffect(() => {
        const API = "f31598d28140427198fea2dda77dfe15";
        const URL = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${API}`;
        axios
          .get(URL)
          .then((response) => {    
            setFormat(response.data.results[0].geometry);
          })
          .catch((error) => console.error("Error fetching weather data:", error));
      }, [city]);

    function handleChange(Event){
        setCity(Event.target.value);
    }

    function handleSearch(){
        props.onSearch(format, city);
    }

    return(<div>
        {/* <button onClick={handleSearch} type="button" class="btn btn-outline-success">Search</button> */}
        <div class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleChange} value={city} placeholder="Choose city..."/>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSearch}>Button</button>
    </div>

    </div>);
}

=======
import React, { useState, useEffect } from "react";
import axios from "axios";

function Form(props){
    const [city, setCity] = useState("London");
    const [format, setFormat] = useState(
        {lat: "",lng: ""}
    );

    useEffect(() => {
        const API = "f31598d28140427198fea2dda77dfe15";
        const URL = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${API}`;
        axios
          .get(URL)
          .then((response) => {    
            setFormat(response.data.results[0].geometry);
          })
          .catch((error) => console.error("Error fetching weather data:", error));
      }, [city]);

    function handleChange(Event){
        setCity(Event.target.value);
    }

    function handleSearch(){
        props.onSearch(format, city);
    }

    return(<div>
        {/* <button onClick={handleSearch} type="button" class="btn btn-outline-success">Search</button> */}
        <div class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleChange} value={city} placeholder="Choose city..."/>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSearch}>Button</button>
    </div>

    </div>);
}

>>>>>>> 8975eae (initial commit)
export default Form;