"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [{ title: "Meeting", start: new Date() }];

export default function CalenderComp() {
  return (
    <div className="min-w-screen min-h-screen overflow-y-auto">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={events}
        eventClick={function (info) {
          alert("Clicked on event: " + info.event.title);
        }}
        // eventContent={renderEventContent}
      />
    </div>
  );
}

// // a custom render function
// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   );
// }
