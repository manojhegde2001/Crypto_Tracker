import React,{ useState } from "react";
import Image from "next/image";
import { useCryptoDataQuery } from "@/fraamework/rest/homepage/homepage.query";
import vr from "../../public/Vectorred.png";
import vg from "../../public/Vectorg.png";
import star from "../../public/Star.png";


const itemsPerPage = 10;

const Table = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isLoading } = useCryptoDataQuery(currentPage!);
  
  console.log("current page", currentPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data;
  console.log(data)
  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);
  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <div className="w-4/5 font-semibold">
          <table className=" w-full border-gray-300 shadow-lg mt-5">
            <thead>
              <tr className="text-center">
                <th className="py-3 my-3 text-center font-medium">#</th>
                <th className="py-3 my-3 text-center font-medium">NAME</th>
                <th className="py-3 my-3 text-center font-medium">PRICE</th>
                <th className="py-3 my-3 text-center font-medium">
                  24H <span className="text-blue-600 text-xl">↓</span>
                </th>
                <th className="py-3 my-3 text-center font-medium  max-[750px]:hidden">
                  7D
                </th>

                <th className="py-3 my-3 text-center font-medium max-[750px]:hidden">
                  VOLUME
                </th>
                <th className="py-3 my-3 text-start font-medium max-[750px]:hidden">
                  CIRCULATINGSUPPLY
                </th>
              </tr>
            </thead>
            <tbody className="place-content-center cursor-pointer">
              {paginatedData?.map((dataItem: any, index: any) => (
                <tr
                  key={index}
                  className={"w-full border-y-[1px] border-gray-300 hover:bg-slate-100"}
                >
                  <td className="py-1 my-2 flex justify-center font-medium ">
                    <div className="flex items-center">
                      <Image src={star} width={18} height={18} alt="star" />
                      <div className="flex justify-start ml-2">{(index +1)+startIndex}</div>
                    </div>
                  </td>
                  <td className="my-1 text-start pl-8 font-medium">
                    <div className="flex items-center">
                      <Image
                        src={dataItem?.image}
                        width={18}
                        height={18}
                        alt="logo"
                      />
                      <span className="pl-2">{dataItem?.name}</span>
                      <p className="text-gray-400 uppercase pl-2">
                        {dataItem?.symbol}
                      </p>
                    </div>
                  </td>
                  <td className="my-1 text-start font-medium">
                    <div className="flex justify-start ml-2">
                      {dataItem?.price_change_24h}
                    </div>
                  </td>
                  <td className="my-1 text-start font-bold text-red-600">
                    <div className="flex items-center">
                      <Image src={vr} alt="vr" width={10} height={10} />
                      <div className="flex justify-start ml-2">
                        {dataItem?.high_24h}
                      </div>
                    </div>
                  </td>
                  <td className="my-1 flex text-start font-bold text-green-600 max-[750px]:hidden">
                    <div className="flex items-center">
                      <Image src={vg} alt="vg" width={10} height={10} />
                      <div className="flex justify-center ml-2">
                        {dataItem?.low_24h}
                      </div>
                    </div>
                  </td>
                  <td className="my-1 text-center font-medium max-[750px]:hidden">
                    <div className="flex justify-end ml-2">
                      {dataItem?.total_volume}
                    </div>
                    <p className="text-gray-500 text-end text-sm">932,071 BTC</p>
                  </td>
                  <td className="font-medium items-center justify-center max-[750px]:hidden">
                    <div className="flex justify-center ml-2">
                      {dataItem?.circulating_supply}
                    </div>
                    <div className="pl-8 w-full">
                      <div className="w-3/4 items-center justify-center bg-gray-300 rounded-full h-1.5">
                        <div className="bg-gray-500 h-1.5 w-1/2 rounded-full"></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-4/5 justify-end">
        <nav aria-label="Page navigation" className="flex justify-end pt-5 pb-5">
          <ul className="list-style-none flex gap-2">
          <li>
              <a
                className={`relative block rounded-lg border-2 bg-transparent px-3 py-1.5 text-sm text-black transition-all duration-300 font-medium hover:bg-neutral-400 
                ${currentPage === startIndex ? "pointer-events-none hidden" : ""}`}
                href="#!"
                onClick={() => {
                  if (currentPage >= 0) {
                    handlePageChange(currentPage - 1);
                  }
                }}
              >
                &lt;
              </a>
</li>
            
            {/* {Array.from({ length: totalPages }).map((_, index) => (
              <li key={index}>
                <a
                  className={`relative block rounded-lg border-2 bg-transparent px-3 py-1.5 text-sm text-black transition-all duration-300 font-medium hover:bg-neutral-100 ${
                    currentPage === index ? "bg-primary-100" : ""
                  }`}
                  href="#!"
                  onClick={() => handlePageChange(index)}
                >
                  {index + 1}
                  {currentPage === index && (
                    <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-rect(0,0,0,0)">
                      (current)
                    </span>
                  )}
                </a>
              </li>
            ))} */}
            <li>
              <p className="relative block bg-transparent px-3 py-1.5 text-sm text-black font-medium">{currentPage + 1}</p>
            </li>
            <li>
              <a
                className={`relative block rounded-lg border-2 bg-transparent px-3 py-1.5 text-sm text-black transition-all duration-300 font-medium hover:bg-neutral-400 
                `}
                href="#!"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                &gt;
              </a>
            </li>
          </ul>
        </nav>
      </div>
        </div>
      </div>
    </div>
    
  );
};

export default Table;
