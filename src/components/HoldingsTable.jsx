import Table from "./Table";
import Loader from "./Loader";

import { holdingsColumns } from "../utils";

function HoldingsTable({ data }) {
  return (
    <div className="holdingsTable">
      <h2>Table with holdings data.</h2>
      {data.isLoading ? (
        <Loader />
      ) : (
        <Table data={data.payload} columns={holdingsColumns} />
      )}

      {data.isError && (
        <p className="main__errorMessage">
          Something went wrong with holdings data...
        </p>
      )}
    </div>
  );
}

export default HoldingsTable;
