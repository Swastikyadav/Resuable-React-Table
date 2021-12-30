const holdingsColumns = [
  {
    Header: "Name",
    accessor: "name",
    type: "Text"
  },
  {
    Header: "Ticker",
    accessor: "ticker",
    type: "Text"
  },
  {
    Header: "Asset Class",
    accessor: "asset_class",
    type: "Text"
  },
  {
    Header: "Average Price",
    accessor: "avg_price",
    type: "Amount"
  },
  {
    Header: "Market Price",
    accessor: "market_price",
    type: "Amount"
  },
  {
    Header: "Change Percentage",
    accessor: "latest_chg_pct",
    type: "Amount"
  },
  {
    Header: "Base CCY",
    accessor: "market_value_ccy",
    type: "Amount"
  }
];

const transactionsColumns = [
  {
    Header: "Name",
    accessor: "name",
    type: "Text"
  },
  {
    Header: "Ticket Ref",
    accessor: "ticketref",
    type: "Text"
  },
  {
    Header: "Trade Date",
    accessor: "traded_on",
    type: "Date"
  },
  {
    Header: "Quantity",
    accessor: "quantity",
    type: "Amount"
  },
  {
    Header: "Currency",
    accessor: "currency",
    type: "Text"
  },
  {
    Header: "Settled Amount",
    accessor: "settlement_amount",
    type: "Amount"
  }
];

export { holdingsColumns, transactionsColumns };
