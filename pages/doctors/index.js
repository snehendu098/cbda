import React from "react";
import TimeCard from "../../components/Clinic/TimeCard";

const link =
  "https://script.google.com/macros/s/AKfycbzHCFa1A0JHl8pLrCi7STRwLLZNyElasoyGGGts0NGt_FC5SJMub8nMgnrm-rbQgFGhnQ/exec ";

const App = ({ data }) => {
  return (
    <div className="max-w-[100vw] pt-20 flex flex-col items-center justify-center">
      <p className="text-3xl font-bold my-5">Doctor's Clinic</p>
      {data.data.map((item, index) => (
        <TimeCard key={index} item={item} />
      ))}
      {/* <div className="fixed p-2 px-10 bottom-12 rounded-full right-12 bg-gray-900 text-xl text-white fint-semibold">
        Book Slot
      </div> */}
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
