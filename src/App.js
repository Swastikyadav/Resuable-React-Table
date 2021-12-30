import useFetch from "./custom-hooks/useFetch";
import HoldingsTable from "./components/HoldingsTable";
import TransactionsTable from "./components/TransactionsTable";

function App() {
  const [holdingsData] = useFetch("holdings");
  const [transactionsData] = useFetch("transactions");

  return (
    <main className="main">
      <h1 className="main__heading">Reusable React Table Component</h1>

      <TransactionsTable data={transactionsData} />

      <HoldingsTable data={holdingsData} />
    </main>
  );
}

export default App;
