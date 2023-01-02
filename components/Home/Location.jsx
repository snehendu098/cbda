import React from "react";

const Location = () => {
  return (
    <div
      id="Location"
      className="w-full flex flex-col items-center justify-center"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5334405122553!2d88.5281650147863!3d23.07756048492531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8c16f7c66c6e3%3A0xeb46b7a2f657316c!2sCBDA!5e0!3m2!1sen!2sin!4v1672421502530!5m2!1sen!2sin"
        // style="border:0;"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full min-h-[70vh]"
      ></iframe>
    </div>
  );
};

export default Location;
