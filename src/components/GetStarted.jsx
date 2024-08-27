import React from "react";
import payment from "../assets/cut-online-payment-security.png";
import Team from "./Team";
import Rating from "./Rating";
const GetStarted = () => {
  return (
    <div className="min-h-screen transition duration-150 ease-out hover:ease-in  ">
      <div className="relative isolate px-6 ">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className=" flex justify-center ">
          <hr className="w-1/2 mb-32  "></hr>
        </div>
        <div className="flex justify-evenly text-balance  ">
          <div className="w-1/3 text-justify ">
            <h1 className="text-5xl font-bold my-4 text-justify font-bold tracking-tight text-white">
              Our Mission
            </h1>
            <p className=" text-left text-justify ">
              Discover the advantages of banking with KavaSaki, from our
              cutting-edge technology to our dedicated customer support.
              Integrity, innovation, and customer-first thinking guide
              everything we do at KavaSaki. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Similique excepturi libero quo rerum
              laboriosam laudantium non iusto reiciendi
            </p>
          </div>

          <img className="min-h-2.5 flex-end " src={payment} alt="" />
        </div>
        <div className="text-center text-balance mb-0  ">
          <h1 className="text-5xl font bold m-4 font-bold tracking-tight text-white">
            Meet Our Team
          </h1>
          Get to know the people behind KavaSaki who work tirelessly to bring
          you the best banking experience.
          <Team />
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
