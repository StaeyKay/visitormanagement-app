import { getVisitors, saveVisitors } from "@/utils";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const KeyDeposit = () => {
  const [visitorName, setVisitorName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [time, setTime] = useState();
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("");

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const visitorData = {
        visitorName: visitorName,
        employeeName: employeeName,
        phoneNumber: phone,
        purposeOfVisit: purpose,
        arrivalTime: time,
      };
      console.log(visitorName);
      console.log(employeeName);
      console.log(time);
      console.log("visitorData:", visitorData);

      const visitor = await saveVisitors(visitorData);
      resetForm();
      navigate("/checkout");
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    setVisitorName("");
    setEmployeeName("");
    setPhone("");
    setPurpose("");
    setTime("");
  };

  return (
    <div className="min-h-screen space-y-10">
      <h1 className="bg-[#E62E2D] text-center text-white py-4 font-bold text-[40px]">
        Welcome to Graphic Communications Group Limited
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Employee Key Deposit</h1>
          <p className="mt-2 text-gray-600">
            Please fill in your details below
          </p>
        </div>
        <div className=" mt-8">
          {/* <h4>Check-In Form</h4>
          <p className="mt-2 text-gray-600">
            Please fill in your details below
          </p> */}
          <form
            onSubmit={handleForm}
            action=""
            className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm animate-fadeIn"
          >
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Your full name
              </label>
              <input
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#E62E2D] focus:outline-none focus:ring-1 focus:ring-[#E62E2D]"
                type="text"
                placeholder="Full Name"
                onChange={(e) => setVisitorName(e.target.value)}
                value={visitorName}
                required
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Your phone number
              </label>
              <input
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#E62E2D] focus:outline-none focus:ring-1 focus:ring-[#E62E2D]"
                type="text"
                placeholder="Enter your phone number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Department
              </label>
              <input
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#E62E2D] focus:outline-none focus:ring-1 focus:ring-[#E62E2D]"
                type="text"
                placeholder="Full Name"
                onChange={(e) => setEmployeeName(e.target.value)}
                value={employeeName}
                required
              />
            </div>
            <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E62E2D] hover:bg-[#E62E2D]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KeyDeposit;
