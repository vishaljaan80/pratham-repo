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
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
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
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  const tags = [
    "Catalog",
    "Circooles",
    "Command + R",
    "Hourglass",
    "Layers",
    "Quotient",
    "Sisyphus",
    ];

  const hideHandler = () => {
          const hidDivs = document.querySelectorAll('.hid');
          hidDivs.forEach(div => {
            div.style.display = div.style.display === 'none' ? 'block' : 'none';
          });
  }

  const [isHidden, setIsHidden] = React.useState(false);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <div className="bg-white sm:w-[89%] lg:w-[81vw] w-[90vw] ml-5 mx-4 rounded-lg">
        <div className="text-xl text-center text-[#101828d4] border-b py-2">
          Best Selling Products
        </div>
        <div
          className="border-b text-sm text-[#667085] flex items-center gap-2"
          onClick={toggleHidden}
        >
          <i
            className={`text-lg p-2 border rounded ${
              isHidden ? "fa-plus" : "fa-minus"
            } w-4 flex items-center justify-center h-4 text-sm m-2 ml-3 fa-solid `}
          ></i> 
          Products
          <i
            className={` ${
              isHidden ? "fa-arrow-up" : "fa-arrow-down"
            }  flex text-[#667085] text-sm items-center justify-center m-2 fa-solid `}
          ></i>
        </div>
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`flex ${
              isHidden ? "hidden" : "block"
            } gap-5 border-b items-center py-5`}
          >
            <input
              id={`showCheckboxes-${index}`}
              type="checkbox"
              className="ml-4 w-5 rounded-full h-5 border-none"
            />
            <label
              htmlFor={`showCheckboxes-${index}`}
              className="text-sm text-gray-700"
            >
              {tag}
            </label>
          </div>
        ))}
      </div>



      <div className="container bg-white rounded-lg sm:w-[80vw] md:w-[89%] lg:w-[81vw] w-[90vw] m-4 flex flex-col bg-red ml-5 mt-4">
        <div className="overflow-x-auto w-[90%] mx-auto ">
          <table
            {...getTableProps()}
            className="w-full border-collapse border-gray-300 shadow-md "
          >
          <thead className=" text-left">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={`py-4 text-nowrap border-b-2 px-2 border-gray-300  text-sm font-semibold text-gray-700 ${
                        column.isSorted
                          ? "bg-blue-400 text-black  font-semibold w-1/3 transition-all ease-in "
                          : ""
                      }`}
                      key={column.id}
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
            <tbody {...getTableBodyProps()} className="">
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className="hover:bg-gray-200 transition-all"
                    key={row.id || row.index} // Use row.id or row.index as a fallback
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="py-2 px-4 border-b border-gray-300  text-gray-600 text-sm"
                        key={cell.id || cell.column.id} // Use cell.id or cell.column.id as a fallback
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

        <div className="sm:flex w-full gap-4 items-center justify-center hidden  mt-4">
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
          <div className="text-sm ">
            Page {pageIndex + 1} of {pageOptions.length}
          </div>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className={`px-3 py-2 bg-gray-300 rounded ${
              !canNextPage
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-400"
            }`}
          >
            Next
          </button>
        </div>

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
    </>
  );
};

export default DynamicTableComponent;
