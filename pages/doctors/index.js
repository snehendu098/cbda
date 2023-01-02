import React from "react";
import TimeCard from "../../components/Clinic/TimeCard";

const link =
  "https://script.google.com/macros/s/AKfycbxLEFItqgQuYK6z5ggez8EMy_h-DJm6jNuNOgZNlo_St_VxRCjml0xR4z7d_CTpnYDWoQ/exec";

const App = ({ data }) => {
  return (
    <div className="w-screen pt-20 flex flex-col items-center justify-center">
      <p className="text-3xl font-bold my-5">Doctor's Clinic</p>
      {data.data.map((item, index) => (
        <TimeCard key={index} item={item} />
      ))}
      <div className="fixed p-2 px-10 bottom-12 rounded-full right-12 bg-gray-900 text-xl text-white fint-semibold">
        Book Slot
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(link);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default App;
