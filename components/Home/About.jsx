import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="About"
      className="w-full bg-slate-100 flex flex-col items-center justify-center px-10 pt-10"
      initial={{ opacity: 0 }}
      viewport={{ once: false }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", delay: 0.75 }}
      exit={{ opacity: 0 }}
    >
      <p className="text-4xl font-semibold text-gray-900">About Us</p>
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: false }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring" }}
        exit={{ opacity: 0 }}
        className="w-[90%] md:w-[70%] lg:w-1/2 flex flex-col items-center justify-center"
      >
        <p className="text-xl my-10 text-gray-800 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab at
          officia itaque exercitationem! Ea molestiae culpa porro nobis a
          voluptatibus, eum ut temporibus eaque, mollitia vero saepe quaerat?
          Nihil! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          architecto distinctio velit eum, iusto libero, repellendus ex amet
          sint, iste dicta officia quis quibusdam nemo veniam. Quas dolor
          voluptatum nam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Accusamus harum porro laborum. Autem maxime, aliquam rerum
          molestias laborum vero dicta officia tenetur sunt illo commodi,
          aliquid corporis reprehenderit accusantium laboriosam?
        </p>
        {/* <div className="rounded-full cursor-pointer text-xl font-semibold bg-slate-900 p-4 px-10 text-white mt-10 mb-10">
          Read More
        </div> */}
      </motion.div>
    </motion.div>
  );
};

export default About;
