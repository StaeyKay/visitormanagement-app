import { filterVisitors, getEmployees, getVisitors } from "@/utils";
import React, { useState, useEffect, useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import {
  AlarmClock,
  CalendarArrowUp,
  PhoneCall,
  UserRound,
  UsersRound,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RetrievalTable = () => {
  const { toast } = useToast();

  const tableRef = useRef(null);

  const [employeeList, setEmployeeList] = useState([]);
  const [input, setInput] = useState("");
  const [dailyCount, setDailyCount] = useState(0);
  const [monthlyCount, setMonthlyCount] = useState(0);

  const handleSearch = async (value) => {
    const filteredData = await filterVisitors(value);
    setEmployeeList(filteredData);
  };

  const formatTimeSpent = (minutes) => {
    if (minutes === null || minutes === undefined) return "0.00"; // Default if missing data

    const hours = Math.floor(minutes / 60); // Get whole hours
    const mins = minutes % 60; // Get remaining minutes

    return `${hours}.${mins < 10 ? "0" : ""}${mins}`; // Ensures 1.05 instead of 1.5
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      const employeeLists = await getEmployees();
      setEmployeeList(employeeLists);
    //   setDailyCount(employeeLists.dailyCount);
    //   setMonthlyCount(employeeLists.monthlyCount);
    };
    fetchEmployees();
  }, []);

  const formatDate = (dateString) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short", // "Jan", "Feb", etc.
      year: "2-digit", // "25" instead of "2025"
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(new Date(dateString));
  };

  return (
    <div>
      <DownloadTableExcel
        filename="key retrieval table"
        sheet="key retrieval"
        currentTableRef={tableRef.current}
      >
        <button> Export excel </button>
      </DownloadTableExcel>
      {/* Search Input */}
      <div className="flex justify-end p-5">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-l-full p-2"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          className="bg-[#E62E2D] p-2 text-white rounded-r-full hover:bg-[#DFA2A2]"
          onClick={() => handleSearch(input)}
        >
          Search
        </button>
      </div>
      <div className="flex justify-between p-5">
        <div className="bg-blue-200 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Visitors Today:</h2>
          <p className="text-xl font-bold">{dailyCount}</p>
        </div>
        <div className="bg-green-200 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Visitors This Month:</h2>
          <p className="text-xl font-bold">{monthlyCount}</p>
        </div>
      </div>

      <table ref={tableRef} className="w-full text-center">
        <thead>
          <tr className="border-b-2">
            <th className="p-2">
              <div className="flex gap-1 justify-center">
                <UserRound />
                Full Name
              </div>
            </th>
            <th className="text-center p-2">
              <div className="flex gap-1 justify-center">
                <PhoneCall />
                Phone
              </div>
            </th>
            <th className="text-center p-2">
              <div className="flex gap-1 justify-center">
                <UsersRound />
                Department
              </div>
            </th>
            <th className="text-center p-2">
              <div className="flex gap-1">
                <CalendarArrowUp />
                Key Number
              </div>
            </th>
            {/* <th className="text-center p-2">Date</th> */}
            <th className="text-center p-2">
              <div className="flex gap-1 justify-center">
                <AlarmClock />
                Time
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee, index) => {
            return (
              <tr key={index}>
                <td className="p-2">{employee.fullName}</td>
                <td className="p-2">{employee.phoneNumber}</td>
                <td className="p-2">{employee.department}</td>
                <td className="p-2">{employee.keyNumber}</td>
                <td className="p-2">{formatDate(employee.time)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RetrievalTable;
