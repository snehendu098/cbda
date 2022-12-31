import React from "react";

// Endpoint: https://script.google.com/macros/s/AKfycbxLEFItqgQuYK6z5ggez8EMy_h-DJm6jNuNOgZNlo_St_VxRCjml0xR4z7d_CTpnYDWoQ/exec

const TimeCard = () => {
  return (
    <div className="w-[80%] border-[5px] p-2">
      <p className="text-lg font-semibold rounded-md">9:30 pm - 10:30 pm</p>
      <ul className="mt-3">
        <li className="text-md font-semibold text-gray-600">Dr 1</li>
        <li className="text-md font-semibold text-gray-600">Dr 2</li>
        <li className="text-md font-semibold text-gray-600">Dr 3</li>
        <li className="text-md font-semibold text-gray-600">Dr 4</li>
      </ul>
    </div>
  );
};

export default TimeCard;
