import axios from "axios";
import useSWR from "swr";
import React, { useState } from "react";
import Card from "../../components/Services/Card";

const App = () => {
  // const [data, setData] = useState([]);

  const { data } = useSWR("/api/notion", fetchData);

  return (
    <div className="pt-20 w-full flex items-center justify-center flex-col pb-20">
      <p className="text-3xl font-bold w-full text-center mt-5 mb-10">
        Services
      </p>
      <div className="w-full flex flex-col items-center justify-center">
        {data &&
          data.data.map((item, index) => <Card key={index} item={item} />)}
        {data?.data?.length <= 0 && (
          <p className="text-red-600 font-semibold">No Services</p>
        )}
      </div>
    </div>
  );
};

async function fetchData(url) {
  const res = await axios.get(url);
  return res;
}
export default App;
