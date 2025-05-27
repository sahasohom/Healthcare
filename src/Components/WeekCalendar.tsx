import FullCalendar from "@fullcalendar/react";
import React, { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./WeekCalendar.css";

const WeekCalendar: React.FC = () => {
  const [events, setEvents] = useState([]);

  const generateTimeEvents = (start: Date, end: Date) => {
    const evts = [];
    const msInDay = 24 * 60 * 60 * 1000;
    const daysCount = Math.ceil((end.getTime() - start.getTime()) / msInDay);

    for (let dayOffset = 0; dayOffset < daysCount; dayOffset++) {
      const current = new Date(start.getTime() + dayOffset * msInDay);
      const dateStr = current.toLocaleDateString("en-CA");
      for (let hour = 10; hour <= 18; hour++) {
        const timeLabel = `${hour.toString().padStart(2, "0")}:00`;
        evts.push({
          title: timeLabel,
          start: `${dateStr}T${timeLabel}`,
          end: `${dateStr}T${(hour + 1).toString().padStart(2, "0")}:00`,
          extendedProps: { isTimeLabel: true },
          display: "background",
          allDay: false,
        });
      }
    }

    setEvents(evts);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      headerToolbar={{
        left: "title",
        right: "prev,next",
      }}
      firstDay={1}
      slotMinTime="10:00:00"
      slotMaxTime="17:00:00"
      slotLabelFormat={{
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }}
      datesSet={(arg) => generateTimeEvents(arg.start, arg.end)}
      events={events}
      dayHeaderFormat={{
        weekday: "short",
        day: "numeric",
        month: undefined,
      }}
      dayHeaderContent={(args) => {
        const date = args.date;
        const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
        const day = date.getDate();
        return (
          <div>
            <div className="weekday">{weekday}</div>
            <div>{day}</div>
          </div>
        );
      }}
      titleFormat={{
        month: "long",
        year: "numeric",
      }}
      allDaySlot={false}
      height="250px"
    />
  );
};

export default WeekCalendar;
