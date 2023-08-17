import React, { useState, useEffect } from 'react';
import './timer.css';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('08/20/2023 12:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { days, hours, minutes, seconds } = countdown;

  return (
    <div className="countdown-clock">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="flip-card-value">{days}</div>
            <div className="flip-card-label">Days</div>
          </div>
          <div className="flip-card-back">
            <div className="flip-card-value">{days}</div>
            <div className="flip-card-label">Days</div>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="flip-card-value">{hours}</div>
            <div className="flip-card-label">Hours</div>
          </div>
          <div className="flip-card-back">
            <div className="flip-card-value">{hours}</div>
            <div className="flip-card-label">Hours</div>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="flip-card-value">{minutes}</div>
            <div className="flip-card-label">Minutes</div>
          </div>
          <div className="flip-card-back">
            <div className="flip-card-value">{minutes}</div>
            <div className="flip-card-label">Minutes</div>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="flip-card-value">{seconds}</div>
            <div className="flip-card-label">Seconds</div>
          </div>
          <div className="flip-card-back">
            <div className="flip-card-value">{seconds}</div>
            <div className="flip-card-label">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
