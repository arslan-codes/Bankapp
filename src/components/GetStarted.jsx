import React from "react";
import payment from "../assets/cut-online-payment-security.png";
import Team from "./Team";

const GetStarted = () => {
  return (
    <div className="min-h-screen mx-auto transition duration-150 ease-out hover:ease-in  ">
      <div className="  flex justify-center ">
        <hr className="w-1/2 mb-32  "></hr>
      </div>
      <div className="flex justify-evenly text-balance px-10 ">
        <div className="w-1/3 text-justify ">
          <h1 className="text-5xl font-bold my-4 text-justify font-bold tracking-tight text-white">
            Why Choose Us
          </h1>
          <p className=" text-left text-justify ">
            Discover the advantages of banking with KavaSaki, from our
            cutting-edge technology to our dedicated customer support.
            Integrity, innovation, and customer-first thinking guide everything
            we do at KavaSaki. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Similique excepturi libero quo rerum laboriosam
            laudantium non iusto reiciendi
          </p>
        </div>

        <img className="min-h-2.5 flex-end " src={payment} alt="" />
      </div>
      <div className="text-center text-balance px-10 ">
        <h1 className="text-5xl font bold m-4 font-bold tracking-tight text-white">
          Meet Our Team
        </h1>
        Get to know the people behind KavaSaki who work tirelessly to bring you
        the best banking experience.
        <Team />
      </div>
    </div>
  );
};

export default GetStarted;
