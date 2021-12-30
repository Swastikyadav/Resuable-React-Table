import Table from "./Table";
import Loader from "./Loader";

import { transactionsColumns } from "../utils";

function HoldingsTable({ data }) {
  return (
    <div className="transactionsTable">
      <h2>Table with transactions data.</h2>
      {data.isLoading ? (
        <Loader />
      ) : (
        <Table data={data.payload} columns={transactionsColumns} />
      )}

      {data.isError && (
        <p className="main__errorMessage">
          Something went wrong with transactions data...
        </p>
      )}
    </div>
  );
}

export default HoldingsTable;
