import {
  useTable,
  useSortBy,
  usePagination,
  useFlexLayout,
  useResizeColumns,
  useColumnOrder
} from "react-table";

import DndColumn from "./DndColumn";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
    visibleColumns,
    setColumnOrder,
    state: { pageIndex }
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useSortBy,
    usePagination,
    useFlexLayout,
    useResizeColumns,
    useColumnOrder
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

  const moveColumn = (dragIndex, dropIndex) => {
    const newColumnOrder = [...visibleColumns];

    [newColumnOrder[dragIndex], newColumnOrder[dropIndex]] = [
      newColumnOrder[dropIndex],
      newColumnOrder[dragIndex]
    ];

    console.log(visibleColumns);
    setColumnOrder(newColumnOrder.map(col => col.id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="table-div">
        <table className="table" {...getTableProps()}>
          <thead className="thead">
            <tr className="tr" {...headerGroups[0].getHeaderGroupProps()}>
              {headerGroups[0].headers.map((column, idx) => (
                <DndColumn
                  key={column.id}
                  column={column}
                  index={idx}
                  moveColumn={moveColumn}
                />
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
    </DndProvider>
  );
}

export default Table;
