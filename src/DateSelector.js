import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({ date, onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
    onDateChange(date);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
      />
    </div>
  );
};

export default DateSelector;
