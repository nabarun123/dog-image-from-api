import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [details, setDetails] = useState([]);
  const fetchDetails = async () => {
    const data = await axios.get("https://dog.ceo/api/breed/malinois/images");
    setDetails(data.data.message);
    console.log(data);
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App">
      <h1>Hello Relevel</h1>
      {details.map((item) => (
        <div className="dog">
          <img height="30%" width="60%" src={item} />
        </div>
      ))}
    </div>
  );
}

export default App;
