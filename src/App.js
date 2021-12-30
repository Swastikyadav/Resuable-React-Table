import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "./components/Table";
import { holdingsColumns } from "./utils";
import Loader from "./components/Loader";

const baseURL = "https://canopy-frontend-task.now.sh/api/";

function App() {
  const [holdingsData, setHoldingsData] = useState({ payload: [] });
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

        setHoldingsData(fetchedData.data);
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
    <main className="main">
      <h1 className="main__heading">Reusable React Table Component</h1>

      {fetchStatus.isLoading ? (
        <Loader />
      ) : (
        <Table data={holdingsData.payload} columns={holdingsColumns} />
      )}

      {fetchStatus.isError && (
        <p className="main__errorMessage">Something went wrong...</p>
      )}
    </main>
  );
}

export default App;
