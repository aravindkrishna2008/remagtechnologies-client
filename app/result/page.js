"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Graph from "./graph/main";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import AuthOptions from "../components/AuthOptions";
import { useRouter } from "next/navigation";
import { getData } from "../globaldata";

export default function Home() {
  const [graphHover, setGraphHover] = useState(false);
  const [reconnectionRateHover, setReconnectionRateHover] = useState(false);
  const [bzHover, setBzHover] = useState(false);
  // const [, setMaxSeverity] = useState(0);

  let maxSeverity = 0;
  const resData = useRouter().query;
  // console.log(getData());
  let data = localStorage.getItem("data");
  data = JSON.parse(data);

  let reconrateValues = [];
  let severityValues = [];
  // console.log("type of the data is " + JSON.parse(data)[0].reconrate);
  // console.log(data);

  for (let i = 0; i < data.length; i++) {
    reconrateValues.push(data[i].reconrate);
    severityValues.push(data[i].severity / 5);
    // setMaxSeverity(calculateMaxSeverity());
  }

  let avgReconrate = 0;

  for (let i = 0; i < reconrateValues.length; i++) {
    avgReconrate += reconrateValues[i];
  }

  avgReconrate /= reconrateValues.length;
  console.log(avgReconrate);

  // round to 3 decimal places
  avgReconrate = Math.round((avgReconrate + Number.EPSILON) * 10000) / 10000;

  // find max severity values as a number

  function calculateMaxSeverity() {
    let max = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].severity > max) {
        max = data[i].severity;
      }
    }
    return max;
  }

  maxSeverity = calculateMaxSeverity();

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
      <div className="flex flex-col items-center justify-center mt-[3vh] ">
        <h1 className="title text-[4vw] leading-[4.2vw] flex items-center justify-center font-bold text-center p-4 w-[55vw]">
          Your reconnection analysis results.
        </h1>
        <img src="/Line1.png" className="w-[27vw] -mt-5 mr-[15vw]" />
        {!reconnectionRateHover ? (
          <div
            className="gray-btn h-[18vh] w-[22.5vw] mr-[37.5vw] flex flex-col p-[2vw] pb-[2vw] -mt-[50px] justify-center"
            onMouseLeave={() => {
              setTimeout(() => {
                setReconnectionRateHover(false);
              }, 1000);
            }}
          >
            <div className="flex flex-row w-[100%] gap-[2px] items-center justify-center mt-[1.6%]">
              <img src="/cloud.png" height={100} className="w-[15%]" />
              <h2 className="text-[#B3B3B3] text-[1.2vw] w-[100%] font-bold mb-[2.5%]">
                Reconnection Rate
              </h2>
              <img
                src="/question.png"
                height={100}
                className="w-[12%]"
                onMouseEnter={() => setReconnectionRateHover(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setReconnectionRateHover(false);
                  }, 2000); // Wait for 4 seconds (4000 milliseconds) before setting graphHover to false
                }}
              />
            </div>
            <div className="flex flex-row items-end gap-2">
              <h1 className="data-nums">{avgReconrate}</h1>
              <p className="text-[#666] mb-[5%] text-[1vw]">(unitless)</p>
            </div>
          </div>
        ) : (
          <div
            className="gray-btn h-[23vh] w-[22.5vw] mr-[37.5vw] flex flex-col p-[2vw] pb-[2vw] -mt-[50px] justify-center"
            onMouseEnter={() => setReconnectionRateHover(true)}
          >
            <div className="flex flex-row w-[100%] gap-[2px] items-center justify-center mt-[1.6%]">
              <img src="/cloud.png" height={100} className="w-[15%]" />
              <h2 className="text-[#B3B3B3] text-[1.2vw] w-[100%] font-bold mb-[2.5%]">
                Reconnection Rate
              </h2>
              <img
                src="/question.png"
                height={100}
                className="w-[12%]"
                onMouseEnter={() => setReconnectionRateHover(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setReconnectionRateHover(false);
                  }, 0); // Wait for 4 seconds (4000 milliseconds) before setting graphHover to false
                }}
              />
            </div>
            <p className=" group-hover:transition group-hover:ease-in-out text-[#666]  0 mb-1 text-[1vw]">
              The Reconnection Rate measures the merging of the Geomagnetic
              field and IMF in an indefinite cycle. A low Reconnection Rate can
              allow solar particles to penetrate Earth&apos;s atmosphere.
            </p>
          </div>
        )}

        <img src="/Line2.png" className="w-[40vw] -mt-[16vh] ml-[20vw]" />
        {!bzHover ? (
          <div
            className="gray-btn h-[18vh] w-[22.5vw] mr-[37.5vw] flex flex-col p-[2vw] pb-[2vw] ml-[80vw] -mt-[80px] justify-center"
            onMouseLeave={() => {
              setTimeout(() => {
                setBzHover(false);
              }, 1000);
            }}
          >
            <div className="flex flex-row w-[100%] gap-[2px] items-center justify-center mt-[1.6%]">
              <img src="/magnet.png" height={100} className="w-[15%]" />
              <h2 className="text-[#B3B3B3] text-[1.2vw] w-[100%] font-bold mb-[2.5%]">
                Maximum Severity
              </h2>
              <img
                src="/question.png"
                height={100}
                className="w-[12%]"
                onMouseEnter={() => setBzHover(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setBzHover(false);
                  }, 2000); // Wait for 4 seconds (4000 milliseconds) before setting graphHover to false
                }}
              />
            </div>
            <div className="flex flex-row items-end gap-2">
              <h1 className="data-nums">{maxSeverity}/5</h1>
              <p className="text-[#666] mb-[5%] text-[1vw]">severity scale</p>
            </div>
          </div>
        ) : (
          <div
            className="gray-btn h-[23vh] w-[22.5vw] mr-[37.5vw] flex flex-col p-[2vw] pb-[2vw] ml-[80vw] -mt-[80px] justify-center"
            onMouseEnter={() => setBzHover(true)}
          >
            <div className="flex flex-row w-[100%] gap-[2px] items-center justify-center mt-[1.6%]">
              <img src="/magnet.png" height={100} className="w-[15%]" />
              <h2 className="text-[#B3B3B3] text-[1.2vw] w-[100%] font-bold mb-[2.5%]">
                Maximum Severity
              </h2>
              <img
                src="/question.png"
                height={100}
                className="w-[12%]"
                onMouseEnter={() => setBzHover(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setBzHover(false);
                  }, 0); // Wait for 4 seconds (4000 milliseconds) before setting graphHover to false
                }}
              />
            </div>
            <p className=" group-hover:transition group-hover:ease-in-out text-[#666]  0 mb-1 text-[1vw]">
              The maximum severity of a potential solar storm in the inputted
              graph. This is the worst you can expect given the data. See
              geomagnetic storms in
              <a href="https://www.swpc.noaa.gov/noaa-scales-explanation">
                https://www.swpc.noaa.gov/noaa-scales-explanation
              </a>{" "}
              for specific details
            </p>
          </div>
        )}

        <img src="/Line3.png" className="w-[18vw] -mt-[10vh] ml-[8vw]" />
        {!graphHover ? (
          <div className=" gray-btn h-[50vh] w-[40vw] mr-[37.5vw] flex flex-col p-[2vw] pb-[2vw] justify-center -mt-[20vh] -ml-[6vw]   ">
            <div className="flex flex-row w-[100%] gap-[2px] items-center justify-center mt-[1.6%]  ">
              <img src="/warning.png" height={100} className="w-[8%]" />
              <h2 className="text-[#B3B3B3] text-[1.2vw] w-[100%] font-bold mb-[2.5%]">
                Reconnection Severity
              </h2>

              <img
                src="/question.png"
                height={100}
                className={`w-[8%] transition  ${graphHover ? "hovered" : ""}`}
                onMouseEnter={() => setGraphHover(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setGraphHover(false);
                  }, 0); // Wait for 4 seconds (4000 milliseconds) before setting graphHover to false
                }}
              />
            </div>
            <div className="w-[25vw]">
              <Graph
                width={"30%"}
                className=" group-hover:transition ease-in-out  h-[30vh]  "
                data2={reconrateValues}
                data3={severityValues}
              />
            </div>
          </div>
        ) : (
          <div
            className=" gray-btn h-[60vh] w-[40vw] mr-[37.5vw] flex flex-col p-[2vw] pb-[2vw] justify-center -mt-[20vh] -ml-[6vw]   "
            onMouseLeave={() => {
              setTimeout(() => {
                setGraphHover(false);
              }, 0); // Wait for 4 seconds (4000 milliseconds) before setting graphHover to false
            }}
          >
            <div className="flex flex-row w-[100%] gap-[2px] items-center justify-center mt-[1.6%]">
              <img src="/warning.png" height={100} className="w-[8%]" />
              <h2 className="text-[#B3B3B3] text-[1.2vw] w-[100%] font-bold mb-[2.5%]">
                Reconnection Severity
              </h2>
              <img
                src="/question.png"
                height={100}
                className={`w-[8%] ${graphHover ? "hovered" : ""}`}
                onMouseEnter={() => setGraphHover(true)}
              />
            </div>
            <p className=" group-hover:transition group-hover:ease-in-out text-[#666]  0 mb-1 text-[1vw]">
              The graph shows analytic severity over time, with the Reconnection
              Rate depending on the IMF. When the Bz component stays below 20 nT
              consistently, it signals a potential solar storm.
            </p>
            <div className="w-[25vw]">
              <Graph
                width={"30%"}
                className=" group-hover:transition ease-in-out  h-[30vh]  "
                data2={reconrateValues}
                data3={severityValues}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
