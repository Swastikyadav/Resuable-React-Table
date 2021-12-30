import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://canopy-frontend-task.now.sh/api/";

function useFetch(query) {
  const [state, setState] = useState({
    payload: [],
    isLoading: false,
    isError: false
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setState(prevState => ({
          ...prevState,
          isLoading: true
        }));

        const fetchedData = await axios.get(`${baseURL}${query}`);

        setState(prevState => ({
          ...prevState,
          payload: fetchedData.data.payload || fetchedData.data.transactions,
          isLoading: false,
          isError: false
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          isLoading: false,
          isError: true
        }));
      }
    }

    fetchData();
  }, [query]);

  return [state];
}

export default useFetch;
