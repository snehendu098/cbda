import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring" }}
      viewport={{ once: true }}
      className="w-full h-[100vh]  flex items-center justify-center bg-slate-500"
    >
      <img
        src="./intro.jpg"
        alt="intro"
        className="w-full h-full bg-contain bg-center blur-sm opacity-50"
      />
      <div className="absolute flex mx-5 flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "linear", delay: 0.75 }}
          viewport={{ once: true }}
          className="text-2xl text-white font-semibold md:text-6xl lg:text-8xl text-center sm:text-3xl"
        >
          Comprehensive healthcare services under one roof
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "linear", delay: 0.75 }}
          className="text-md sm:text-lg tracking-widest mt-10 text-center md:text-xl text-white"
        >
          Explore a wide range of services we offer for your betterment
        </motion.p>
        <Link href={"/services"}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "linear", delay: 0.75 }}
            className="p-4 px-8 bg-slate-800 text-white mt-10 rounded-full shadow-xl duration-500 cursor-pointer hover:bg-slate-600"
          >
            Explore Services
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Intro;
