import React, { useEffect, useState } from "react";

function NumberCounter() {
  const [number, setNumber] = useState(12467);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => prevNumber + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <div className="p-10 self-start md:self-center md:pt-0 md:text-[1.4rem] text-#333 font-bold" >Our services have helped {number} people so far!</div>;
}

export default NumberCounter;