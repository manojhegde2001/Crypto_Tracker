import { useState } from "react";
import Image from "next/image";
import bit from "../../public/bitcoin.png";
import eth from ".././../public/etherium.png";
import card from "../../public/cardano.png";
import bin from "../../public/binance.png";
import tet from "../../public/tether.png";
import pol from "../../public/polcat.png";
import xrp from "../../public/XRP.png";
import vr from "../../public/Vectorred.png";
import vg from "../../public/Vectorg.png";
import s1 from "../../public/Star.png";


const Table = () => {
  
  const data = [
    {
      id: "1",
      img: bit,
      NAME: "Bitcoin BTC",
      PRICE: "$165945",
      "24H": "0.65%",
      "7D": "0.65%",
      MARKETCAP: "$326565632301",
      VOLUME: "$265966148456",
      CIRCULATINGSUPPLY: "$164949656596",
    },
    {
      id: "2",
      img: eth,
      NAME: "Etherium ETH",
      PRICE: "$165945",
      "24H": "0.65%",
      "7D": "0.65%",
      MARKETCAP: "$326565632301",
      VOLUME: "$265966148456",
      CIRCULATINGSUPPLY: "$164949656596",
    },
    {
      id: "3",
      img: card,
      NAME: "Cardano CDN",
      PRICE: "$165945",
      "24H": "0.65%",
      "7D": "0.65%",
      MARKETCAP: "$326565632301",
      VOLUME: "$265966148456",
      CIRCULATINGSUPPLY: "$164949656596",
    },
    {
      id: "4",
      img: bin,
      NAME: "Binance Coin BNB",
      PRICE: "$165945",
      "24H": "0.65%",
      "7D": "0.65%",
      MARKETCAP: "$326565632301",
      VOLUME: "$265966148456",
      CIRCULATINGSUPPLY: "$164949656596",
    },
    {
      id: "5",
      img: tet,
      NAME: "Tether USDT",
      PRICE: "$165945",
      "24H": "0.65%",
      "7D": "0.65%",
      MARKETCAP: "$326565632301",
      VOLUME: "$265966148456",
      CIRCULATINGSUPPLY: "$164949656596",
    },
    {
      id: "6",
      img: pol,
      NAME: "Polkadot",
      PRICE: "$165945",
      "24H": "0.65%",
      "7D": "0.65%",
      MARKETCAP: "$326565632301",
      VOLUME: "$265966148456",
      CIRCULATINGSUPPLY: "$164949656596",
    },
    {
      id: "7",
      img: xrp,
      NAME: "XRP",
      PRICE: "$165945",
      "24H": "0.65%",
      "7D": "0.65%",
      MARKETCAP: "$326565632301",
      VOLUME: "$265966148456",
      CIRCULATINGSUPPLY: "$164949656596",
    },
    {
      id: "8",
      img: bit,
      NAME: "Eighth Crypto",
      PRICE: "$123456",
      "24H": "1.23%",
      "7D": "4.56%",
      MARKETCAP: "$987654321",
      VOLUME: "$876543210",
      CIRCULATINGSUPPLY: "$765432109",
    },
    {
      id: "9",
      img: bit,
      NAME: "Ninth Crypto",
      PRICE: "$789012",
      "24H": "2.34%",
      "7D": "5.67%",
      MARKETCAP: "$1234567890",
      VOLUME: "$2345678901",
      CIRCULATINGSUPPLY: "$3456789012",
    },
    {
      id: "10",
      img: bit,
      NAME: "Tenth Crypto",
      PRICE: "$987654",
      "24H": "3.45%",
      "7D": "6.78%",
      MARKETCAP: "$5678901234",
      VOLUME: "$4567890123",
      CIRCULATINGSUPPLY: "$5678901234",
    }
  ];
  
  return (
    <div className="w-full">
    <div className="w-full flex justify-center">
      <div className="w-4/5 font-semibold">
        <table className="table-auto w-full  border-gray-300 shadow-lg mt-5">
          <thead>
            <tr className="text-center">
              {Object.keys(data[0])
                .filter((key) => key !== "img")
                .map((key) => (
                  <th key={key} className={`py-3 my-3 text-start font-medium ${
                    key === "7D"
                      ? "max-[750px]:hidden"
                      : key === "id" ? "max-[750px]:hidden":key === "MARKETCAP" ? "max-[750px]:hidden":key === "VOLUME" ? "max-[750px]:hidden": key === "CIRCULATINGSUPPLY" ? "max-[750px]:hidden": ""
                  }`}>
                    {key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="place-content-center">
            {data.map((dataItem) => (
              <tr
                key={dataItem.id}
                className={"w-screen border-y-[1px] border-gray-300"}
                
              >
                {Object.keys(dataItem)
                  .filter((key) => key !== "img")
                  .map((key) => (
                    <td
                      className={`py-3 my-3 text-start font-medium ${
                        key === "24H"
                          ? "text-red-500"
                          : key === "7D"
                          ? "text-green-500"
                          : key === "id" ? "max-[750px]:hidden":key === "7D" ? "max-[750px]:hidden":key === "MARKETCAP" ? "max-[750px]:hidden":key === "VOLUME" ? "max-[750px]:hidden": key === "CIRCULATINGSYPPLY" ? "max-[750px]:hidden" : ""
                      }`}
                      key={key}
                    >
                      {key === "NAME" ? (
                        <div className="flex justify-start ml-2">
                          <Image
                            src={dataItem["img"]}
                            alt="img"
                            width={17}
                            height={17}
                          />
                          <span className="pl-2">{dataItem["NAME"]}</span>
                        </div>
                      ) : key === "24H" ? (
                        <div className="flex justify-center items-center">
                          <Image src={vr} alt="vr" className="w-2 h-2" />
                          <span className="pl-1">{dataItem["24H"]}</span>
                        </div>
                      ): key === "7D" ? (
                        <div className="flex items-center justify-center max-[750px]:hidden">
                          <Image src={vg} alt="vg" className="w-2 h-2" />
                          <span className="pl-1">{dataItem["7D"]}</span>
                        </div>
                      ) : key === "VOLUME" ? (
                        <div >
                          <span>{dataItem["VOLUME"]}</span>
                          <p className="text-gray-500 font-normal text-sm text-center pl-10">
                            932,000 BTC
                          </p>
                        </div>
                      ) : key === "CIRCULATINGSUPPLY" ? (
                        <div className="w-full flex flex-col justify-center max-[750px]:hidden">
                          <span>{dataItem["CIRCULATINGSUPPLY"]}</span>
                          <div  className="w-2/3 items-center justify-center">
                            <div className="mb-6 h-1  bg-neutral-200">
                              <div className="h-1 bg-slate-600 w-1/2">
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : 
                      key === "id" ? (
                        <div className="flex items-center justify-center">
                          <Image src={s1} alt="star" className="w-4 h-4"/>
                          <span className="pl-3 text-gray-500 ">{dataItem["id"]}</span>
                        </div>
                      ):(
                        dataItem[key]
                      )}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="w-4/5 flex justify-end">
   <nav aria-label="Page navigation" className="flex justify-end pt-5 pb-5">
  <ul className="list-style-none flex gap-2">
    <li>
      <a className="relative block border-2 bg-gray-300 rounded-lg px-3 py-1.5 text-sm text-black transition-all duration-300 font-medium hover:bg-neutral-100" href="#!">&lt;</a>
    </li>
    <li>
      <a className="relative block border-2 rounded-lg bg-transparent px-3 py-1.5 text-sm text-black transition-all duration-300 font-medium hover:bg-neutral-100" href="#!">1</a>
    </li>
    <li aria-current="page">
      <a className="relative block rounded-lg border-2 bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300 hover:bg-neutral-100" href="#!">2
        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-rect(0,0,0,0)">(current)</span>
      </a>
    </li>
    <li>
      <a className="relative block rounded-lg border-2 font-medium text-black bg-transparent px-3 py-1.5 text-sm transition-all duration-300 hover:bg-neutral-100" href="#!">...</a>
    </li>
    <li>
      <a className="relative block rounded-lg border-2 font-medium text-black bg-transparent px-3 py-1.5 text-sm transition-all duration-300 hover:bg-neutral-100" href="#!">9</a>
    </li>
    <li>
      <a className="relative block rounded-lg border-2 font-medium text-black bg-transparent px-3 py-1.5 text-sm transition-all duration-300 hover:bg-neutral-100" href="#!">10</a>
    </li>
    <li>
      <a className="relative block rounded-lg border-2 font-medium text-gray-400 bg-transparent px-3 py-1 text-normal transition-all duration-300 hover:bg-neutral-100" href="#!">&gt;</a>
    </li>
  </ul>
</nav>

</div>


   </div>
  );
};

export default Table;