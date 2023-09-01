import Image from "next/image";
import s1 from "../public/Star.png"


const Smallcards = () => {
    return (  
        <div className="w-full flex justify-center text-xs font-semibold">
        <div className="w-4/5 justify-start flex flex-row gap-5 mt-3">
        <div className=" justify-center flex flex-row p-1 ">
            <Image src={s1} className="bg-slate-300 rounded-l-lg  " alt="star"/>
            <h2 className="bg-slate-300 rounded-r-lg ">Favourites</h2>
        </div>
        <div className="bg-slate-300 rounded-lg p-1 text-blue-600 font-medium"><p>CryptoCurrencies</p></div>
        <div className="bg-slate-300 rounded-lg p-1"><p>DeFi</p></div>
        <div className="bg-slate-300 rounded-lg p-1"><p>NFTs & Collectibles</p></div>
</div>
</div>
    );
}
 
export default Smallcards;