import moment from "moment";

function formatDate(cellValue) {
  return moment(new Date(cellValue)).format("DD/MM/YYYY");
}

function formateAmount(cellValue) {
  const isPositive = cellValue && cellValue > 0;
  const formatedCellValue = cellValue
    ? cellValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
    : "N/A";

  if (isPositive) {
    return <span style={{ color: "green" }}>{formatedCellValue}</span>;
  } else {
    return <span style={{ color: "red" }}>{formatedCellValue}</span>;
  }
}

export { formatDate, formateAmount };
