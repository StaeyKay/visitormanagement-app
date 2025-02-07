import { getVisitors, saveEmployees } from "@/utils";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const KeyRetrieval = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [keyNumber, setKeyNumber] = useState("");
  const [time, setTime] = useState();
  

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const staffData = {
        fullName: fullName,
        phoneNumber: phone,
        department: department,
        keyNumber: keyNumber,
        time: time,
      };
      console.log(fullName);
      console.log(department);
      console.log(time);
      console.log("staffData:", staffData);

      const staff = await saveEmployees(staffData);
      resetForm();
      navigate("/retrievalTable");
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    setFullName("");
    setPhone("");
    setDepartment("");
    setKeyNumber("");
    setTime("");
  };

  return (
    <div className="min-h-screen space-y-10">
      <h1 className="bg-[#E62E2D] text-center text-white py-4 font-bold text-[40px]">
        Welcome to Graphic Communications Group Limited
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Employee Key Pick Up</h1>
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
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
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
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
                required
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Key Number
              </label>
              <input
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#E62E2D] focus:outline-none focus:ring-1 focus:ring-[#E62E2D]"
                type="text"
                placeholder="Full Name"
                onChange={(e) => setKeyNumber(e.target.value)}
                value={keyNumber}
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

export default KeyRetrieval;
