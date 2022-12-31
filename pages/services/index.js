import React from "react";
import Card from "../../components/Services/Card";

const App = () => {
  return (
    <div className="pt-20 w-full flex items-center justify-center flex-col">
      <p className="text-3xl font-bold w-full text-center mt-5 mb-10">
        Services
      </p>
      <div className="w-full flex flex-col items-center justify-center">
        <Card />
      </div>
    </div>
  );
};

export default App;
