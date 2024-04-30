import { useEffect, useState } from "react";

export const Header = () => {
  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function getDate() {
    const today = new Date();
    const month = Months[today.getMonth()];
    const date = today.getDate();
    const hour = ("0" + today.getHours()).slice(-2);
    const minute = ("0" + today.getMinutes()).slice(-2);
    return `${month} ${date} ${hour}:${minute}`;
  }

  const [time, setTime] = useState(getDate());

  useEffect(() => {
    setInterval(() => {
      setTime(getDate());
    }, 1000);
  });

  return (
    <div className="fixed top-0 z-50 h-[25px] w-dvw bg-black backdrop-blur-sm">
      <div className="flex justify-between px-5 text-sm font-extralight lg:px-6.5 xl:px-8 max-lg:py-4">
        <div className="flex items-center space-x-5">
          <h3>Nav</h3>
          <h3>Terminal</h3>
        </div>
        <h3>{time}</h3>
        <h3>Battery</h3>
      </div>
    </div>
  );
};
