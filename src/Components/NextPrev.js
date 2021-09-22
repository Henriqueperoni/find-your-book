import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const NextPrev = ({ month, setMonth, year, setYear, currentMonth }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const incresaseMonth = () => {
    if (month === parseInt(currentMonth)) {
      return setMonth(parseInt(currentMonth));
    }
    if (month === 12) {
      return { setYear: setYear(year + 1), setMonth: setMonth(1) };
    }
    setMonth(month + 1);
  };

  const decresaseMonth = () => {
    if (month <= 1) {
      return { setYear: setYear(year - 1), setMonth: setMonth(12) };
    }
    setMonth(month - 1);
  };

  return (
    <div className="date">
      <button className="next-prev-btn" onClick={() => decresaseMonth()}>
        <FiChevronLeft />
      </button>
      <p>
        {monthNames[month - 1]} - {year}
      </p>
      <button className="next-prev-btn" onClick={() => incresaseMonth()}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default NextPrev;
