import React from "react";
import TimeCard from "../../components/Clinic/TimeCard";

const App = () => {
  return (
    <div className="w-screen pt-20 flex flex-col items-center justify-center">
      <p className="text-3xl font-bold my-5">Doctor's Clinic</p>
      <TimeCard />
    </div>
  );
};

export default App;
