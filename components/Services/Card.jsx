import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "linear", delay: 0.1 }}
      className="w-[90%] sm:w-[80%] bg-white p-5 rounded-sm shadow-xl md:w-[90%] md:grid md:grid-cols-3 md:gap-4"
    >
      <div className="bg-cover md:col-span-1 min-h-[12rem] bg-center md:w-full md:mr-2 overflow-hidden bg-[url('https://images.pexels.com/photos/6829488/pexels-photo-6829488.jpeg')]"></div>
      <div className="md:col-span-2">
        <p className="text-2xl font-semibold md:mt-0 mt-5 text-gray-900">
          Dummy Card
        </p>
        <p className="text-gray-600 py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis
          placeat debitis saepe eius fuga fugit animi dolor facere quisquam
          laudantium distinctio, fugiat minima vitae doloremque corrupti
          blanditiis voluptatum quasi? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Unde mollitia, in dicta vitae voluptate quos
          excepturi nesciunt error sunt, quasi sit molestiae tenetur sapiente
          velit deserunt eum itaque, saepe ipsa?
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
