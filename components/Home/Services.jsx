import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import axios from "axios";

const Service = ({ item }) => (
  // l = l.slice(96) + "..."
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ ease: "easeIn", delay: 0.25 }}
    className="flex items-center justify-center flex-col"
  >
    <img
      src={item.img}
      alt="cbda"
      className="aspect-square bg-cover bg-center"
    />
    <p className="text-xl font-bold text-slate-800">{item?.name}</p>
    <p className="text-md text-center text-slate-600 mt-3 mx-2">
      {item?.desc?.length > 96 ? item?.desc?.slice(96) + "..." : item?.desc}
    </p>
  </motion.div>
);

const Services = () => {
  const { data } = useSWR("/api/notion", fetchData);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", delay: 0 }}
      id="Services"
      className="max-w-[100vw] w-full bg-gray-300 p-10 flex flex-col items-center justify-center overflow-hidden"
    >
      <p className="text-4xl font-slate-800 font-semibold">
        Some Of Our Services
      </p>
      <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 gap-4 mx-2 md:mx-7 mt-5 lg:grid-cols-4">
        {data &&
          data.data.map((item, index) => {
            if (index <= 3) {
              return <Service key={index} item={item} />;
            }
          })}
        {data?.data?.length <= 0 && (
          <p className="text-red-600 font-semibold">No Services</p>
        )}
      </div>

      <Link href="/services">
        <div className="text-xl px-10 p-2 bg-slate-900 text-white mt-20 cursor-pointer duration-500 hover:bg-slate-800">
          Explore
        </div>
      </Link>
    </motion.div>
  );
};

async function fetchData(url) {
  const res = await axios.get(url);
  return res;
}

export default Services;
