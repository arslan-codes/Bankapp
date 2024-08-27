import React from "react";
import payment1 from "../assets/1.jpg";
import payment2 from "../assets/2.jpg";
import payment3 from "../assets/3.jpg";

const Features = () => {
  return (
    <div>
      <div className="text-center ">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Why choose us
        </h1>
        <p className="mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero i
        </p>
      </div>

      <div className="flex justify-evenly p-10 min-h-screen">
        <div className="card  bg-black w-96 shadow-xl  ">
          <figure>
            <img src={payment1} alt="Quick and Secure Transactions" />
          </figure>
          <div className="card-body border-neutral-900 border-2 rounded-b-xl">
            <div className="relative isolate px-6 ">
              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-600 to-purple-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                ></div>
              </div>
              <h2 className="card-title"> Quick and Secure Transactions!</h2>
              <p>
                Experience lightning-fast transactions on rhino.fi, ensuring
                your assets move across chains swiftly and securely. Our
                platform's speed is matched only by its robust security
                measures.
              </p>
            </div>
          </div>
        </div>

        <div className="card  bg-black w-96 shadow-xl  ">
          <figure>
            <img src={payment2} alt="Quick and Secure Transactions" />
          </figure>
          <div className="card-body border-neutral-900 border-2 rounded-b-xl">
            <div className="relative isolate px-6 ">
              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-600 to-purple-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                ></div>
              </div>
              <h2 className="card-title">
                {" "}
                Seamless Self-Custodial Interoperability
              </h2>
              <p>
                rhino.fi offers seamless self-custodial interoperability,
                providing control and accessibility. With rhino.fi, you have the
                power to manage your assets effortlessly across various chains.
              </p>
            </div>
          </div>
        </div>

        <div className="card    bg-black w-96 shadow-xl">
          <figure>
            <img src={payment3} alt="Quick and Secure Transactions" />
          </figure>
          <div className="card-body border-neutral-900 border-2 rounded-b-xl">
            <div className="relative isolate px-6 ">
              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-600 to-purple-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                ></div>
              </div>
              <h2 className="card-title">
                Low-Cost Transactions High-Value Experience
              </h2>
              <p>
                rhino.fi’s mission is to help onboard the next billion users to
                DeFi. Our fee model reflects this to support all users to make
                the most of DeFi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
