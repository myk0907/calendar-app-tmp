import React from 'react';
import '@toast-ui/calendar/dist/toastui-calendar.css'; // Toast UI Calendar의 스타일시트
import Calendar from '@toast-ui/react-calendar';

const App = () => {
  const calendars = [
    {
      id: '1',
      name: 'My Calendar',
      bgColor: '#9e5fff',
      borderColor: '#9e5fff',
    },
  ];

  const schedules = [
    {
      calendarId: '1',
      title: 'Sample Event',
      category: 'time',
      start: '2023-01-01T10:00:00',
      end: '2023-01-01T12:00:00',
    },
  ];

  return (
    <div className="App">
      <Calendar
        height="600px"
        calendars={calendars}
        schedules={schedules}
      />
    </div>
  );
};

export default App;