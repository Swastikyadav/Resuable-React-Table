import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "./components/Table";

const baseURL = "https://canopy-frontend-task.now.sh/api/";

function App() {
  const [holdingsData, setHoldingsData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState({
    isLoading: false,
    isError: false
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setFetchStatus(prevState => ({
          ...prevState,
          isLoading: true
        }));

        const fetchedData = await axios.get(`${baseURL}holdings`);

        setFetchStatus(prevState => ({
          ...prevState,
          isLoading: false,
          isError: false
        }));

        setHoldingsData(fetchedData);
      } catch (error) {
        setFetchStatus(prevState => ({
          ...prevState,
          isLoading: false,
          isError: true
        }));
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {fetchStatus.isLoading ? "Loading..." : <Table />}
      <br />
      {fetchStatus.isError ? "Something went wrong..." : ""}
      <br />
    </div>
  );
}

export default App;
