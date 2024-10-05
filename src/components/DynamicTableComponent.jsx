import React from "react";
import { useTable, usePagination, useSortBy } from "react-table";

const DynamicTableComponent = ({
  columns,
  data,
  showButtons,
  onEdit,
  onDelete,
  onView,
}) => {
  // Define the table instance using useTable and the additional hooks for sorting and pagination
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Only the rows for the active page
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
    gotoPage,
    pageCount,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Start on the first page
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="container sm:w-[80vw] md:w-[70vw] w-[80vw] md:px-4 px-0 flex flex-col bg-red ml-8 mt-5">
      {/* Table */}
      <div className="overflow-x-auto rounded-lg ">
        <table
          {...getTableProps()}
          className="w-full border-collapse border border-gray-300 shadow-md"
        >
          <thead className="bg-gray-100 text-left">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={`py-3 px-4 border-b border-gray-300 text-sm font-semibold text-gray-700 ${
                      column.isSorted ? "bg-blue-400 text-black font-semibold w-1/3 transition-all ease-in " : ""
                    }`}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
                
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="hover:bg-gray-50 transition-all"
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="py-2 px-4 border-b border-gray-300 text-gray-600 text-sm"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={`px-3 py-2 bg-gray-300 rounded ${
            !canPreviousPage
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-400"
          }`}
        >
          Previous
        </button>
        <div className="text-sm">
          Page {pageIndex + 1} of {pageOptions.length}
        </div>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className={`px-3 py-2 bg-gray-300 rounded ${
            !canNextPage ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"
          }`}
        >
          Next
        </button>
      </div>

      {/* Jump to Page */}
      <div className="mt-2 mb-10">
        <label className="mr-2">Go to page:</label>
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          className="border p-2 rounded-md w-20 text-center"
        />
      </div>
    </div>
  );
};

export default DynamicTableComponent;
