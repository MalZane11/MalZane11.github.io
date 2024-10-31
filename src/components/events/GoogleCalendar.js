import React, { useEffect } from 'react';

const GoogleCalendar = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.type = 'module';
    script.src = 'https://embed.styledcalendar.com/assets/parent-window.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://embed.styledcalendar.com/#8OebTQBkfCWTRNhyEhSj"
      title="Styled Calendar"
      className="styled-calendar-container"
      style={{ width: '100%', border: 'none' }}
      data-cy="calendar-embed-iframe"
    ></iframe>
  );
};

export default GoogleCalendar;


