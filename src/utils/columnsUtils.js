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
    type: "Float"
  },
  {
    Header: "Base CCY",
    accessor: "market_value_ccy",
    type: "Float"
  }
];

export { holdingsColumns };
