import { useEffect, useState } from "react";

export default function ShowDate() {
  const [currentTime, setCurrentTime] = useState<string>();
  const [currentDate, setCurrentDate] = useState<string>();

  useEffect(() => {
    var timerTime = setInterval(() => {
      const date = new Date();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let minutesStr = "0";
      let time = "AM";

      if (hour >= 12) {
        time = "PM";
        if (hour > 12) {
          hour -= 12;
        }
      } else {
        time = "AM";
      }

      if (minutes < 10) {
        minutesStr += minutes;
      } else {
        minutesStr = minutes.toString();
      }

      setCurrentTime(`${hour}:${minutesStr} ${time}`);
    }, 1000);

    return function cleanup() {
      clearInterval(timerTime);
    };
  }, []);

  useEffect(() => {
    const date = new Date();
    let month = "Jan.";

    switch (date.getMonth()) {
      case 0:
        month = "Jan.";
        break;

      case 1:
        month = "Feb.";
        break;

      case 2:
        month = "Mar.";
        break;

      case 3:
        month = "Apr.";
        break;

      case 4:
        month = "May";
        break;

      case 5:
        month = "Jun.";
        break;

      case 6:
        month = "Jul.";
        break;

      case 7:
        month = "Aug.";
        break;

      case 8:
        month = "Sep.";
        break;

      case 9:
        month = "Oct.";
        break;

      case 10:
        month = "Nov.";
        break;

      case 11:
        month = "Dec.";
        break;
    }

    setCurrentDate(`${month} ${date.getDate()}`);
  }, []);

  return (
    <div>
      <span>
        {currentTime} - {currentDate}, 1984
      </span>
    </div>
  );
}
