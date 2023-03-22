import React from "react";
import man from "../assets/man.png";

const ClientTestimonial = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-4">
          What Our Clients Say About Us
        </h2>
        <h3 className="text-lg font-medium mb-6 flex-wrap max-w-lg">
          Build skills with courses, certificates, and degrees online from
          world-class universities. Graduate. This short quiz will sort.
        </h3>
      </div>

      <div className="flex my-8 max-w-auto">
        <div className="flex justify-center items-center flex-grow gap-28 ml-8">
          <div className="flex-none w-1/3 ">
            <img className="rounded-lg" src={man} alt="Client testimonial" />
          </div>

          <div className="text-2xl font-medium flex-wrap  max-w-sm ">
            "I started with their free courses but quickly became a customer
            once I saw how useful the lessons were."
            <h4 className="text-base font-bold mt-20">
              Cameron Wilson,
            </h4>
              <h5> The Disney Company</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
