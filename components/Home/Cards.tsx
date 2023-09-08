import Image from "next/image";
import i1 from "../../public/Image1.png";
import i2 from "../../public/Image2.png";
import i3 from "../../public/Image3.png";

const Cards = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-4/5 flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/3 flex flex-col gap-3 border-2 shadow-lg rounded-xl p-4 mt-5 hover:bg-blue-100">
          <div className="flex flex-row items-center">
            <Image src={i1} alt="card1" className="w-16 h-16" />
            <div className="flex flex-col ml-3">
              <p>Take a quiz</p>
              <h2 className="font-semibold">
                Learn and earn $CKB Learn and earn $CKB
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-3 border-2 shadow-lg rounded-xl p-4 mt-5 hover:bg-blue-100">
          <div className="flex flex-row items-center">
            <Image src={i2} alt="card2" className="w-16 h-16" />
            <div className="flex flex-col ml-3">
              <p>Portfolio 🔥</p>
              <h2 className="font-semibold">
                Track your trades in one place, not all over the place
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-3 border-2 shadow-lg rounded-xl p-4 mt-5 hover:bg-blue-100">
          <div className="flex flex-row items-center">
            <Image src={i3} alt="card3" className="w-16 h-16" />
            <div className="flex flex-col ml-3">
              <p>Portfolio</p>
              <h2 className="font-semibold">
                Track your trades in one place, not all over the place
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <h2 className="w-4/5 font-bold items-start mt-10  max-[750px]:text-lg">
          Top 100 Cryptocurrencies by Market Cap
        </h2>
      </div>
    </div>
  );
};

export default Cards;
