import Image from "next/image";

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
          <p className="text-[#ABABAB]">Log In</p>
          <div className="btn bg-[#3C77F7] px-[1.5vw] p-[1vw] flex items-center justify-center text-[#E6E6E6]">
            Sign Up
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[3vh]">
        <h1 className="title text-[4vw] leading-[4.2vw] flex items-center justify-center font-bold text-center p-4 w-[55vw]">
          Your reconnection analysis results.
        </h1>
        <img src="/Line1.png" className="w-[27vw] -mt-5 mr-[15vw]" />
        <div className="gray-btn h-[18vh] w-[22.5vw] mr-[37.5vw] flex flex-col p-[2vw] pb-[2vw] -mt-[50px] justify-center">
          <div className="flex flex-row w-[100%] gap-[2px] items-center justify-center mt-[1.6%]">
            <img src="/cloud.png" height={100} className="w-[15%]" />
            <h2 className="text-[#B3B3B3] text-[1.2vw] w-[100%] font-bold mb-[2.5%]">
              Reconnection Rate
            </h2>
            <img src="/question.png" height={100} className="w-[12%]" />
          </div>
          <div className="flex flex-row items-end gap-2">
            <h1 className="data-nums">0.212</h1>
            <p className="text-[#666] mb-[5%] text-[1vw]">km2 per second</p>
          </div>
        </div>
        <img src="/Line2.png" className="w-[40vw] -mt-[16vh] ml-[20vw]" />
        <div className="gray-btn h-[18vh] w-[22.5vw] mr-[37.5vw] flex flex-col p-[2vw] pb-[2vw] ml-[80vw] -mt-[80px] justify-center">
          <div className="flex flex-row w-[100%] gap-[2px] items-center justify-center mt-[1.6%]">
            <img src="/magnet.png" height={100} className="w-[15%]" />
            <h2 className="text-[#B3B3B3] text-[1.2vw] w-[100%] font-bold mb-[2.5%]">
              Bz (IMF Magnitude)
            </h2>
            <img src="/question.png" height={100} className="w-[12%]" />
          </div>
          <div className="flex flex-row items-end gap-2">
            <h1 className="data-nums">-1.203</h1>
            <p className="text-[#666] mb-[5%] text-[1vw]">nanoTeslas</p>
          </div>
        </div>
        <img src="/Line3.png" className="w-[18vw] -mt-[10vh] ml-[10vw]" />
        <div className="gray-btn h-[18vh] w-[20vw] mr-[32vw] flex flex-col items-center justify-center -mt-[20vh] ml-[8vw]">
          hi
        </div>
      </div>
      <img
        src="/shapes-right.png"
        className="absolute top-[75%] left-[15%] w-[250px]"
      />
      <img
        src="/shapes-left.png"
        className="absolute top-[75%] right-[30%] w-[200px]"
      />{" "}
      <img
        src="/shapes-right.png"
        className="absolute top-[160%] left-[30%] w-[250px]"
      />
      <img
        src="/shapes-left.png"
        className="absolute top-[160%] right-[15%] w-[200px]"
      />{" "}
    </div>
  );
}
