import React from "react";
import { motion } from "framer-motion";

// Endpoint: https://script.google.com/macros/s/AKfycbxLEFItqgQuYK6z5ggez8EMy_h-DJm6jNuNOgZNlo_St_VxRCjml0xR4z7d_CTpnYDWoQ/exec

const TimeCard = ({ item }) => {
  console.log(item);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="w-[80%] border-[5px] p-2 mb-6"
    >
      <p className="text-lg font-semibold rounded-md">{item.time}</p>
      <ul className="mt-3">
        {item.doctors.map((val, index) => (
          <li key={index} className="text-md font-semibold text-gray-600">
            {val}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TimeCard;
