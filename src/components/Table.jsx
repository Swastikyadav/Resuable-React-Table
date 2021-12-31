import {
  useTable,
  useSortBy,
  usePagination,
  useFlexLayout,
  useResizeColumns
} from "react-table";

import { formatDate, formateAmount } from "../utils";

import "../styles/table.css";

function Table({ data, columns }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,

    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    state: { pageIndex }
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useSortBy,
    usePagination,
    useFlexLayout,
    useResizeColumns
  );

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
      <table className="table" {...getTableProps()}>
        <thead className="thead">
          <tr className="tr" {...headerGroups[0].getHeaderGroupProps()}>
            {headerGroups[0].headers.map(column => (
              <th
                className="th"
                {...column.getHeaderProps(column.getSortByToggleProps(), {
                  style: { minWidth: column.minWidth, width: column.width }
                })}
              >
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

                <div
                  {...column.getResizerProps()}
                  className={`th__resizer ${
                    column.isResizing ? "th__isResizing" : ""
                  }`}
                />
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="tbody" {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr className="tr" {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td className="td" {...cell.getCellProps()}>
                      {formatCellValue(cell)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="table__pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          &#x21d0; Back
        </button>
        {Array.from(Array(pageCount).keys()).map(page => {
          return (
            <button
              key={page}
              onClick={() => gotoPage(page)}
              style={{
                background: `${pageIndex === page ? "#7180bf" : ""}`,
                color: `${pageIndex === page ? "#fff" : ""}`
              }}
            >
              {page + 1}
            </button>
          );
        })}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next &#x21d2;
        </button>
      </div>
    </div>
  );
}

export default Table;
