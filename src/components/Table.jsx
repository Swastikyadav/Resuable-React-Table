import { useTable, useSortBy } from "react-table";

import { formatDate, formateAmount } from "../utils";

import "../styles/table.css";

function Table({ data, columns }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data }, useSortBy);

  const formatCellValue = cell => {
    const cellValue = cell.render("Cell").props.value;

    if (cell.column.type === "Date") {
      return formatDate(cellValue);
    } else if (cell.column.type === "Amount") {
      return formateAmount(cellValue);
    } else {
      return cellValue;
    }
  };

  return (
    <div className="table-div">
      <table {...getTableProps()}>
        <thead>
          <tr {...headerGroups[0].getHeaderGroupProps()}>
            {headerGroups[0].headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                <div className="table__th">
                  {column.render("Header")}
                  <span className="table__sortIcon">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <> &#x21d3;</>
                      ) : (
                        <> &#x21d1;</>
                      )
                    ) : (
                      <> &#x21d5;</>
                    )}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{formatCellValue(cell)}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
