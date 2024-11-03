import { getVisitors, updateVisitor } from "@/utils";
import React, { useState, useEffect } from "react";
import {
  AlarmClock,
  CalendarArrowUp,
  PhoneCall,
  UserRound,
  UsersRound,
} from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast"


const Checkout = () => {

  const { toast } = useToast()

  const [visitorList, setVisitorList] = useState([]);

  const handleCheckout = async (visitorId) => {    
    const updatedCheckout = await updateVisitor(visitorId);
    console.log("updatedCheckout:", updatedCheckout)
    const visitorList = await getVisitors();
    setVisitorList(visitorList);
    console.log("toast:", toast)
    toast({
      title: "Success!",
      description: "Visitor has been checked out successfully",
    })
  };

  useEffect(() => {
    const fetchVisitors = async () => {
      const visitorList = await getVisitors();
      setVisitorList(visitorList);
    };
    fetchVisitors();
  }, []);

  return (
    <div>
      {/* Search Input */}
      <div className="flex space-x-2 justify-end p-5">
        <form action="">
          <input
            type="text"
            className="shadow-md border-none rounded-full px-4 py-1 outline-none w-full md:w-auto"
            placeholder="Search..."
          />
        </form>
        <div className="bg-black p-3 rounded-full">
          <FaSearch className="text-white" />
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
                <td className="p-2">{visitor.arrivalTime}</td>
                <td className="p-2">
                  <button
                    onClick={(e) => handleCheckout(visitor.id)}
                    className="text-white p-2 bg-gray-600 rounded-md"
                  >
                    {visitor.departureTime ? visitor.departureTime : "Check out"}
                  </button>
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
