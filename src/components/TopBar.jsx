import React from "react";
import payment from "../assets/cut-online-payment-security.png";

const Topbar = () => {
  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50 text-white">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 lg:justify-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-20 w-auto shadow-xl" src={payment} alt="" />
            </a>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Topbar;
