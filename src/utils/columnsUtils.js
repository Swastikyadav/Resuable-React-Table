const holdingsColumns = [
  {
    Header: "Name",
    accessor: "name",
    id: "name",
    type: "Text",
    maxWidth: 250,
    minWidth: 140
  },
  {
    Header: "Ticker",
    accessor: "ticker",
    id: "ticker",
    type: "Text",
    maxWidth: 250,
    minWidth: 140
  },
  {
    Header: "Asset Class",
    accessor: "asset_class",
    id: "asset_class",
    type: "Text",
    maxWidth: 250,
    minWidth: 140
  },
  {
    Header: "Average Price",
    accessor: "avg_price",
    id: "avg_price",
    type: "Amount",
    maxWidth: 250,
    minWidth: 140
  },
  {
    Header: "Market Price",
    accessor: "market_price",
    id: "market_price",
    type: "Amount",
    maxWidth: 250,
    minWidth: 140
  },
  {
    Header: "Change Percentage",
    accessor: "latest_chg_pct",
    id: "latest_chg_pct",
    type: "Amount",
    maxWidth: 250,
    minWidth: 140
  },
  {
    Header: "Base CCY",
    accessor: "market_value_ccy",
    id: "market_value_ccy",
    type: "Amount",
    maxWidth: 250,
    minWidth: 140
  }
];

const transactionsColumns = [
  {
    Header: "Name",
    accessor: "name",
    id: "name",
    type: "Text",
    maxWidth: 250,
    minWidth: 140
  },
  {
    Header: "Ticket Ref",
    accessor: "ticketref",
    id: "ticketref",
    type: "Text",
    maxWidth: 250,
    minWidth: 140
  },
  {
    Header: "Trade Date",
    accessor: "traded_on",
    id: "traded_on",
    type: "Date",
    maxWidth: 250,
    minWidth: 140
  },
  {
    Header: "Quantity",
    accessor: "quantity",
    id: "quantity",
    type: "Amount",
    maxWidth: 250,
    minWidth: 140
  },
  {
    Header: "Currency",
    accessor: "currency",
    id: "currency",
    type: "Text",
    maxWidth: 250,
    minWidth: 140
  },
  {
    Header: "Settled Amount",
    accessor: "settlement_amount",
    id: "settlement_amount",
    type: "Amount",
    maxWidth: 250,
    minWidth: 140
  }
];

export { holdingsColumns, transactionsColumns };
