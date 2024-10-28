import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="bg-[#E62E2D] text-center text-white py-4 font-bold text-[40px]">
        Welcome to Graphic Communications Group Limited
      </h1>
      <div className="flex flex-col items-center p-10">
        <p className="text-[30px] font-semibold">
          Kindly click the check-in button below to check in.
        </p>
        <div className="flex gap-x-5">
          <button
            onClick={() => navigate("/checkin")}
            className="bg-[#E62E2D] text-white px-5 py-2 rounded-lg"
          >
            Check-In
          </button>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-[#E62E2D] text-white px-5 py-2 rounded-lg"
          >
            Check-Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
