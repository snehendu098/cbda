import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const items = ["about", "services", "doctors"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-transparent shadow-xl fixed top-0 left-0 right-0 w-full z-10 backdrop-blur-md"
      >
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  md:mx-20 mx-5  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link href="/">
                  <h1 className="font-bold text-xl cursor-pointer">
                    <Image src={"/logo.png"} height={40} width={170} />
                  </h1>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {items.map((item) => (
                    <Link href={item} key={item}>
                      <p className="cursor-pointer hover:bg-red-600 text-black hover:text-white px-3 py-2 capitalize rounded-md text-sm font-medium">
                        {item}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-red-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-transparent shadow-xl px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                {items.map((item) => (
                  <Link href={item} key={item}>
                    <p className="cursor-pointer hover:bg-red-600 text-black hover:text-white capitalize block px-3 py-2 rounded-md text-base font-medium">
                      {item}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </motion.nav>
    </div>
  );
}

export default Navbar;
