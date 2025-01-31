import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center overflow-y-hidden">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to{" "}
            <span className="text-[#E62E2D]">Graphic Communications</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Streamline your visitor management process with our digital check-in
            system.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button
                onClick={() => navigate("/checkin")}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#E62E2D] hover:bg-[#E62E2D]/90 md:py-4 md:text-lg md:px-10"
              >
                Check-In
              </button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <button
                onClick={() => navigate("/checkout")}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base text-[#E62E2D] font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Check-Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
