import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';

export default function Pagination() {
  const [data, setData] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 7;

  useEffect(() => {
    // Make an API request to fetch data
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h%2C7d")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // Set the initial page count and items
        setPageCount(Math.ceil(data.length / itemsPerPage));
        setCurrentItems(data.slice(0, itemsPerPage));
      });
  }, []);

  useEffect(() => {
    // Update currentItems when itemOffset changes
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
  }, [itemOffset, data]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* Your table rendering code */}
      <div className="w-full flex justify-center">
      <div className="w-full flex justify-center">
  <div className="w-4/5 font-semibold">
    <table className="table-auto w-full border-gray-300 shadow-lg mt-5">
      <thead>
        <tr className="text-center">
          <th className="py-3 my-3 text-start font-medium">Name</th>
          <th className="py-3 my-3 text-start font-medium">Market Cap</th>
          <th className="py-3 my-3 text-start font-medium">Volume</th>
          <th className="py-3 my-3 text-start font-medium">Circulating Supply</th>
          <th className="py-3 my-3 text-start font-medium">24H % Change</th>
          <th className="py-3 my-3 text-start font-medium">7D % Change</th>
        </tr>
      </thead>
      <tbody className="place-content-center">
        {currentItems.map((dataItem) => (
          <tr
            key={dataItem.id}
            className={"w-screen border-y-[1px] border-gray-300"}
          >
            <td className="py-3 my-3 text-start font-medium">
              <div className="flex justify-start ml-2">
                {/* Assuming 'img' property contains the URL of the image */}
                <img src={dataItem.img} alt="img" width={17} height={17} />
                <span className="pl-2">{dataItem.name}</span>
              </div>
            </td>
            <td className="py-3 my-3 text-start font-medium">
              {dataItem.market_cap}
            </td>
            <td className="py-3 my-3 text-start font-medium">
              {dataItem.volume}
            </td>
            <td className="py-3 my-3 text-start font-medium">
              {dataItem.circulating_supply}
            </td>
            <td className="py-3 my-3 text-start font-medium text-red-500">
              {dataItem["24h_change"]}
            </td>
            <td className="py-3 my-3 text-start font-medium text-green-500">
              {dataItem["7d_change"]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
