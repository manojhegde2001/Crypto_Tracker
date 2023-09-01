import { useState } from "react";
import Image from "next/image";
import bit from "../public/bitcoin.png";
import eth from "../public/etherium.png";
import card from "../public/cardano.png";
import bin from "../public/binance.png";
import tet from "../public/tether.png";
import pol from "../public/polcat.png";
import xrp from "../public/XRP.png";
import vr from "../public/Vectorred.png";
import vg from "../public/Vectorg.png";
import s1 from "../public/Star.png";



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
    },
    {
      id: "11",
      img: bit,
      NAME: "Eleventh Crypto",
      PRICE: "$876543",
      "24H": "4.56%",
      "7D": "7.89%",
      MARKETCAP: "$6789012345",
      VOLUME: "$5678901234",
      CIRCULATINGSUPPLY: "$6789012345",
    },
    {
      id: "12",
      img: bit,
      NAME: "Twelfth Crypto",
      PRICE: "$765432",
      "24H": "5.67%",
      "7D": "8.90%",
      MARKETCAP: "$7890123456",
      VOLUME: "$6789012345",
      CIRCULATINGSUPPLY: "$7890123456",
    },
    {
      id: "13",
      img: bin,
      NAME: "Thirteenth Crypto",
      PRICE: "$654321",
      "24H": "6.78%",
      "7D": "9.01%",
      MARKETCAP: "$8901234567",
      VOLUME: "$7890123456",
      CIRCULATINGSUPPLY: "$8901234567",
    },
    {
      id: "14",
      img:eth,
      NAME: "Fourteenth Crypto",
      PRICE: "$543210",
      "24H": "7.89%",
      "7D": "1.12%",
      MARKETCAP: "$9012345678",
      VOLUME: "$8901234567",
      CIRCULATINGSUPPLY: "$9012345678",
    },
    {
      id: "15",
      img:pol,
      NAME: "Fifteenth Crypto",
      PRICE: "$43210",
      "24H": "8.90%",
      "7D": "2.23%",
      MARKETCAP: "$0123456789",
      VOLUME: "$9012345678",
      CIRCULATINGSUPPLY: "$0123456789",
    },
    {
      id: "16",
      img: tet,
      NAME: "Sixteenth Crypto",
      PRICE: "$3210",
      "24H": "9.01%",
      "7D": "3.34%",
      MARKETCAP: "$1234567890",
      VOLUME: "$0123456789",
      CIRCULATINGSUPPLY: "$1234567890",
    },
    {
      id: "17",
      img: card,
      NAME: "Seventeenth Crypto",
      PRICE: "$210",
      "24H": "1.12%",
      "7D": "4.45%",
      MARKETCAP: "$2345678901",
      VOLUME: "$1234567890",
      CIRCULATINGSUPPLY: "$2345678901",
    },
    {
      id: "18",
      img: bit,
      NAME: "Eighteenth Crypto",
      PRICE: "$110",
      "24H": "2.23%",
      "7D": "5.56%",
      MARKETCAP: "$3456789012",
      VOLUME: "$2345678901",
      CIRCULATINGSUPPLY: "$3456789012",
    },
    {
      id: "19",
      img: pol,
      NAME: "Nineteenth Crypto",
      PRICE: "$55",
      "24H": "3.34%",
      "7D": "6.67%",
      MARKETCAP: "$4567890123",
      VOLUME: "$3456789012",
      CIRCULATINGSUPPLY: "$4567890123",
    },
    {
      id: "20",
      img:bin,
      NAME: "Twentieth Crypto",
      PRICE: "$25",
      "24H": "4.45%",
      "7D": "7.78%",
      MARKETCAP: "$5678901234",
      VOLUME: "$4567890123",
      CIRCULATINGSUPPLY: "$5678901234",
    },
    {
      "id": "21",
      "img": bit,
      "NAME": "Uniswap UNI",
      "PRICE": "$25.67",
      "24H": "0.45%",
      "7D": "3.21%",
      "MARKETCAP": "$5,432,109,876",
      "VOLUME": "$456,789,012",
      "CIRCULATINGSUPPLY": "211,234,567"
    },
    {
      "id": "22",
      "img": eth,
      "NAME": "Dogecoin DOGE",
      "PRICE": "$0.3456",
      "24H": "2.34%",
      "7D": "8.76%",
      "MARKETCAP": "$7,890,123,456",
      "VOLUME": "$654,321,098",
      "CIRCULATINGSUPPLY": "22,345,678,901"
    },
    {
      "id": "23",
      "img":tet,
      "NAME": "Stellar XLM",
      "PRICE": "$0.256",
      "24H": "0.98%",
      "7D": "4.56%",
      "MARKETCAP": "$4,567,890,123",
      "VOLUME": "$567,890,123",
      "CIRCULATINGSUPPLY": "17,890,123,456"
    },
    {
      "id": "24",
      "img": bin,
      "NAME": "EOS EOS",
      "PRICE": "$4.56",
      "24H": "1.23%",
      "7D": "5.67%",
      "MARKETCAP": "$3,456,789,012",
      "VOLUME": "$456,789,012",
      "CIRCULATINGSUPPLY": "12,345,678,901"
    },
    {
      "id": "25",
      "img":pol,
      "NAME": "Cosmos ATOM",
      "PRICE": "$18.97",
      "24H": "0.76%",
      "7D": "6.78%",
      "MARKETCAP": "$1,234,567,890",
      "VOLUME": "$345,678,901",
      "CIRCULATINGSUPPLY": "6,789,012,345"
    },
    {
      "id": "26",
      "img": eth,
      "NAME": "Monero XMR",
      "PRICE": "$127.34",
      "24H": "0.56%",
      "7D": "2.34%",
      "MARKETCAP": "$2,345,678,901",
      "VOLUME": "$123,456,789",
      "CIRCULATINGSUPPLY": "18,901,234,567"
    },
    {
      "id": "27",
      "img": bit,
      "NAME": "Tezos XTZ",
      "PRICE": "$3.87",
      "24H": "0.34%",
      "7D": "1.23%",
      "MARKETCAP": "$1,345,678,901",
      "VOLUME": "$234,567,890",
      "CIRCULATINGSUPPLY": "9,012,345,678"
    },
    {
      "id": "28",
      "img": card,
      "NAME": "Solana SOL",
      "PRICE": "$74.56",
      "24H": "1.56%",
      "7D": "7.89%",
      "MARKETCAP": "$8,901,234,567",
      "VOLUME": "$789,012,345",
      "CIRCULATINGSUPPLY": "34,567,890,123"
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
                  <th className="py-2" key={key}>
                    {key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="place-content-center">
            {data.map((dataItem) => (
              <tr
                key={dataItem.id}
                className="w-screen border-y-[1px] border-gray-300"
              >
                {Object.keys(dataItem)
                  .filter((key) => key !== "img")
                  .map((key) => (
                    <td
                      className={`py-3 my-3 text-center font-medium ${
                        key === "24H"
                          ? "text-red-500"
                          : key === "7D"
                          ? "text-green-500"
                          : ""
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
                      ) : key === "7D" ? (
                        <div className="flex items-center justify-center">
                          <Image src={vg} alt="vg" className="w-2 h-2" />
                          <span className="pl-1">{dataItem["7D"]}</span>
                        </div>
                      ) : key === "VOLUME" ? (
                        <div>
                          <span>{dataItem["VOLUME"]}</span>
                          <p className="text-gray-500 font-normal text-sm text-center pl-10">
                            932,000 BTC
                          </p>
                        </div>
                      ) : key === "CIRCULATINGSUPPLY" ? (
                        <div className="w-full flex flex-col justify-center ">
                          <span>{dataItem["CIRCULATINGSUPPLY"]}</span>
                          <div  className="w-2/3 items-center justify-center">
                            <div className="mb-6 h-1  bg-neutral-200">
                              <div className="h-1 bg-slate-600 w-1/2"></div>
                            </div>
                          </div>
                        </div>
                      ) : 
                      key === "id" ? (
                        <div className="flex items-center justify-center">
                          <Image src={s1} alt="star" className="w-4 h-4"/>
                          <span className="pl-3 text-gray-500 ">{dataItem["id"]}</span>
                        </div>
                      ) :(
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
    <div className="w-4/5 justify-end">
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
