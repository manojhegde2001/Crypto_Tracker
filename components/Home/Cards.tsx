import Image from "next/image";
import i1 from "../../public/Image1.png";
import i2 from "../../public/Image2.png";
import i3 from "../../public/Image3.png";

const Cards = () => {
  return (
<><div className="w-full flex justify-center">
    <div className=" w-4/5 flex flex-row gap-4 justify-between">
    <div className="w-1/3 h-[140px] flex  justify-between gap-3 border-2 shadow-lg rounded-xl p-4 mt-5 ">
          <Image src={i1} alt="card1" className="flex-1" />
          <div className="flex flex-col justify-center">
            <p>Take a quiz</p>
            <h2 className="font-semibold">Learn and earn $CKB
            Learn and earn $CKB</h2>
          </div>
    </div>

    <div className=" w-1/3 h-[140px] flex justify-between gap-3 border-2 shadow-lg rounded-xl p-4 mt-5 ">
          <Image src={i2} alt="card2" className="flex-2" />
          <div className="flex flex-col justify-center">
            <p>Portfolio 🔥</p>
            <h2 className="font-semibold">Track your trades in one place,
                                    not all over the place</h2>
          </div>
    </div>

    <div className="w-1/3 h-[140px] flex justify-between gap-3 border-2 shadow-lg rounded-xl p-4 mt-5 ">
          <Image src={i3} alt="card3" className="flex-3" />
          <div className="flex flex-col justify-center">
            <p>Portfolio</p>
            <h2 className="font-semibold">Track your trades in one place,
not all over the place</h2>
          </div>
    </div>
    
    </div>
    </div>

    <div className="w-full flex justify-center"><h2 className="w-4/5 flex  justfy-end font-bold items-start mt-10">Top 100 Cryptocurrencies by Market Cap</h2></div>
  
    </>
  );
};

export default Cards;
