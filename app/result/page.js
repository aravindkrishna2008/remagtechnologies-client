import Image from "next/image";
import AuthOptions from "../components/AuthOptions";

export default function Home() {
  return (
    <div className=" p-[4.722vw] r">
      <div className="text-white flex font-bold text-[1.5vw] items-center justify-between flex-row">
        <Image
          src="/logo.png"
          width={10000}
          height={10000}
          className="w-[20vw]"
        />
        <div className="flex flex-row items-center justify-center gap-8">
          <AuthOptions />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[3vh]">
        <h1 className="title text-[4vw] leading-[4.2vw] flex items-center justify-center font-bold text-center p-4 w-[55vw]">
          Your reconnection analysis results.
        </h1>
        <img src="/Line1.png" className="w-[27vw] -mt-5 mr-[15vw]" />
        <div className="gray-btn h-[18vh] w-[20vw] mr-[32vw] flex flex-col items-center justify-center -mt-[50px]">
          hi
        </div>
        <img src="/Line2.png" className="w-[40vw] -mt-[16vh] ml-[20vw]" />
        <div className="gray-btn h-[18vh] w-[20vw] mr-[32vw] flex flex-col items-center justify-center ml-[80vw] -mt-[80px]">
          hi
        </div>
        <img src="/Line3.png" className="w-[18vw] -mt-[10vh] ml-[10vw]" />
        <div className="gray-btn h-[18vh] w-[20vw] mr-[32vw] flex flex-col items-center justify-center -mt-[20vh] ml-[8vw]">
          hi
        </div>
      </div>
    </div>
  );
}
