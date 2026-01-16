import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  
  const getCurrentTime = (): string => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  
  const [time, setTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="text-center text-4xl md:text-9xl font-bold text-blue-500 tracking-wider m-0">
      {time}
    </div>
  );
};

export default Clock;
