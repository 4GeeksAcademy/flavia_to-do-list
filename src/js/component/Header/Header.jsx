import React, { useState, useEffect } from "react";
import "./header.css";
const Header = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0"); // Sumamos 1 porque los meses en JavaScript comienzan desde 0
      const year = now.getFullYear();

      setCurrentDate(`${day}/${month}/${year}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="headerContainer">
      <div className="title">DAILY PLAN</div>
      <div className="date">{currentDate}</div>
    </div>
  );
};

export default Header;
