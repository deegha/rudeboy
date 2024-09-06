"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-09-07T13:30:00Z"); // 8th September, 7 PM IST
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      const totalHours = Math.floor(difference / (1000 * 60 * 60));
      timeLeft = {
        days: Math.floor(totalHours / 24),
        hours: totalHours % 24,
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className={styles.container}>
      <div className={styles.countdownTimer}>
        <div className="time">
          {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
          {timeLeft.seconds}s
        </div>
      </div>
    </div>
  );
}
