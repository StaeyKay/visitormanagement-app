import { getVisitors, saveVisitors } from "@/utils";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkin = () => {
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
    <div className="space-y-10">
      <h1 className="bg-[#E62E2D] text-center text-white py-4 font-bold text-[40px]">
        Welcome to Graphic Communications Group Limited
      </h1>
      <div className="px-60 py-10">
        <div className="bg-[#dfa2a2] py-10 px-20 rounded-md space-y-4">
          <h4>Check-In Form</h4>
          <p className="text-white">Please fill in the form below</p>
          <form
            onSubmit={handleForm}
            action=""
            className="grid grid-cols-2 gap-5 items-start"
          >
            <div className="flex flex-col">
              <label htmlFor="" className="text-white">
                Your full name
              </label>
              <input
                className="rounded-md h-8 p-2"
                type="text"
                placeholder="Full Name"
                onChange={(e) => setVisitorName(e.target.value)}
                value={visitorName}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-white">
                Your phone number
              </label>
              <input
                className="rounded-md h-8 p-2"
                type="text"
                placeholder="Enter your phone number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-white">
                Host:
              </label>
              <input
                className="rounded-md h-8 p-2"
                type="text"
                placeholder="Full Name"
                onChange={(e) => setEmployeeName(e.target.value)}
                value={employeeName}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-white">
                Purpose of visit
              </label>
              <input
                className="rounded-md h-8 p-2"
                type="text"
                placeholder="Purpose"
                onChange={(e) => setPurpose(e.target.value)}
                value={purpose}
              />
            </div>
            <button className="bg-[#f1d5da] w-[100px] rounded-md">
              Check In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkin;
