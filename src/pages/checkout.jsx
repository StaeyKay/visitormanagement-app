import React from "react";

const Checkout = () => {
  return (
    <div>
      <table className="w-full text-center">
        <tr>
          <th>Visitor's name</th>
          <th>Person visited</th>
          <th>Date</th>
          <th>Arrival time</th>
          <th>Status</th>
          <th>Departure time</th>
        </tr>
        <tr>
          <td>Esther Kwashie</td>
          <td>Evelyn Wullar</td>
          <td>21/10/2024</td>
          <td>10:00 AM</td>
          <td>
            <select name="" id="">
              <option value="">Checked-in</option>
              <option value="">Checked-out</option>
            </select>
          </td>
          <td>01:00 PM</td>
        </tr>
      </table>
    </div>
  );
};

export default Checkout;
