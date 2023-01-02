import React from "react";
import { motion } from "framer-motion";

const Card = ({ item }) => {
  let link = item?.img;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "linear" }}
      className="w-[90%] sm:w-[80%] bg-white p-5 mb-5  rounded-sm shadow-xl md:w-[90%] md:grid md:grid-cols-3 md:gap-4"
    >
      <img
        src={link}
        alt={item.name}
        className={`object-cover md:col-span-1 max-h-[12rem] bg-center md:w-full md:mr-2 overflow-hidden`}
      />
      <div className="md:col-span-2">
        <p className="text-2xl font-semibold md:mt-0 mt-5 text-gray-900">
          {item.name}
        </p>
        <p className="text-gray-600 py-2">{item.desc}</p>
      </div>
    </motion.div>
  );
};

export default Card;
