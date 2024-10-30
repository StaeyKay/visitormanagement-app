import { getVisitors, saveVisitors } from "@/utils";
import React, { useEffect, useState } from "react";

const Checkin = () => {
  const [visitorName, setVisitorName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [time, setTime] = useState();
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("");

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
      console.log("visitorData:", visitorData)

      const visitor = await saveVisitors(visitorData);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    setVisitorName("");
    setEmployeeName("");
    setTime();
  };

  return (
    <div className="space-y-10">
      <h1 className="bg-[#E62E2D] text-center text-white py-4 font-bold text-[40px]">
        Welcome to Graphic Communications Group Limited
      </h1>
      <div className="p-10">
        <div className="bg-[#E62E2D] p-10 rounded-xl space-y-4">
          <h4>Check-In Form</h4>
          <p className="text-white">Please fill in the form below</p>
          <form
            onSubmit={handleForm}
            action=""
            className="flex flex-col space-y-4"
          >
            <label htmlFor="" className="text-white">
              Your full name:
            </label>
            <input
              className="rounded-md h-8"
              type="text"
              placeholder="Full Name"
              onChange={(e) => setVisitorName(e.target.value)}
              value={visitorName}
            />
            <label htmlFor="" className="text-white">
              Your phone number
            </label>
            <input
              className="rounded-md h-8"
              type="text"
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <label htmlFor="" className="text-white">
              Person to visit:
            </label>
            <input
              className="rounded-md h-8"
              type="text"
              placeholder="Full Name"
              onChange={(e) => setEmployeeName(e.target.value)}
              value={employeeName}
            />
            <label htmlFor="" className="text-white">
              Purpose of visit
            </label>
            <input
              className="rounded-md h-8"
              type="text"
              placeholder="Purpose"
              onChange={(e) => setPurpose(e.target.value)}
              value={purpose}
            />
            <label htmlFor="" className="text-white">
              Arrival time:
            </label>
            <input
              className="rounded-md h-8"
              type="datetime-local"
              onChange={(e) => setTime(e.target.value)}
              value={time}
            />
            <button className="bg-[#ffc0cbff] w-[100px] rounded-md">
              Check In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkin;
