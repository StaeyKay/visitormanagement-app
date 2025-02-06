import { filterVisitors, getVisitors, updateVisitor } from "@/utils";
import React, { useState, useEffect } from "react";
import {
  AlarmClock,
  CalendarArrowUp,
  PhoneCall,
  UserRound,
  UsersRound,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { toast } = useToast();

  const [visitorList, setVisitorList] = useState([]);
  const [input, setInput] = useState("");
  const [dailyCount, setDailyCount] = useState(0);
  const [monthlyCount, setMonthlyCount] = useState(0);

  const handleCheckout = async (visitorId) => {
    try {
      await updateVisitor(visitorId);
      const visitorList = await getVisitors();
      setVisitorList(visitorList);
      toast({
        title: "Success!",
        description: "Visitor has been checked out successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to check out visitor",
        variant: "destructive",
      });
    }
  };

  const handleSearch = async (value) => {
    const filteredData = await filterVisitors(value);
    setVisitorList(filteredData);
  };

  const formatTimeSpent = (minutes) => {
    if (minutes === null || minutes === undefined) return "0.00"; // Default if missing data

    const hours = Math.floor(minutes / 60); // Get whole hours
    const mins = minutes % 60; // Get remaining minutes

    return `${hours}.${mins < 10 ? "0" : ""}${mins}`; // Ensures 1.05 instead of 1.5
  };

  useEffect(() => {
    const fetchVisitors = async () => {
      const visitorLists = await getVisitors();
      setVisitorList(visitorLists.visitors);
      setDailyCount(visitorLists.dailyCount);
      setMonthlyCount(visitorLists.monthlyCount);
    };
    fetchVisitors();
  }, []);

  const formatDate = (dateString) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(new Date(dateString));
  };

  return (
    <div>
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

      <table className="w-full text-center">
        <thead>
          <tr className="border-b-2">
            <th className="p-2">
              <div className="flex gap-1 justify-center">
                <UserRound />
                Visitor
              </div>
            </th>
            <th className="text-center p-2">
              <div className="flex gap-1 justify-center">
                <UsersRound />
                Host
              </div>
            </th>
            <th className="text-center p-2">
              <div className="flex gap-1 justify-center">
                <PhoneCall />
                Phone
              </div>
            </th>
            <th className="text-center p-2">
              <div className="flex gap-1">
                <CalendarArrowUp />
                Purpose
              </div>
            </th>
            {/* <th className="text-center p-2">Date</th> */}
            <th className="text-center p-2">
              <div className="flex gap-1 justify-center">
                <AlarmClock />
                Check in
              </div>
            </th>
            <th className="text-center p-2">
              <div className="flex gap-1 justify-center">
                <AlarmClock />
                Check out
              </div>
            </th>
            <th className="text-center p-2">
              <div className="flex gap-1 justify-center">
                <AlarmClock />
                Time Spent (mins)
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {visitorList.map((visitor, index) => {
            return (
              <tr key={index}>
                <td className="p-2">{visitor.visitorName}</td>
                <td className="p-2">{visitor.employeeName}</td>
                <td className="p-2">{visitor.phoneNumber}</td>
                <td className="p-2">{visitor.purposeOfVisit}</td>
                <td className="p-2">{formatDate(visitor.arrivalTime)}</td>
                <td className="p-2">
                  {visitor.departureTime ? (
                    <span>{formatDate(visitor.departureTime)}</span>
                  ) : (
                    <button
                      onClick={() => handleCheckout(visitor.id)}
                      className="text-white p-2 bg-[#E62E2D] rounded-md hover:bg-[#DFA2A2]"
                    >
                      Check out
                    </button>
                  )}
                </td>
                <td className="p-2">
                  {visitor.totalTimeSpent !== null
                    ? `${formatTimeSpent(visitor.totalTimeSpent)} hrs`
                    : "Still Checked In"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Checkout;
