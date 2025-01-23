"use client";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Import locales for date-fns
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

// Configure the localizer
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Sample events for the calendar
const events = [
  {
    title: "Mern Stack Development",
    start: new Date(2025, 0, 21, 10, 0),
    end: new Date(2025, 0, 21, 12, 0),
  },
  {
    title: "Blockchain Development",
    start: new Date(2025, 0, 22, 14, 0),
    end: new Date(2025, 0, 22, 15, 0),
  },
  {
    title: "Mern Stack Developer",
    start: new Date(2025, 0, 22, 15, 0),
    end: new Date(2025, 0, 22, 16, 0),
  },
  {
    title: "Artificial Intelligence",
    start: new Date(2025, 0, 23, 9, 0),
    end: new Date(2025, 0, 23, 11, 0),
  },
];

const CustomToolbar = (props: any) => {
  const goToToday = () => props.onNavigate("TODAY");
  return (
    <div className="flex justify-between items-center p-2">
      <button onClick={goToToday} className="btn">
        Today
      </button>
      <h2>{props.label}</h2>
      <div>
        <button onClick={() => props.onNavigate("PREV")}>Back</button>
        <button onClick={() => props.onNavigate("NEXT")}>Next</button>
      </div>
    </div>
  );
};

export default function CalendarComponent() {
  const [currentView, setCurrentView] = useState("month"); // Track the current view (month, week, day)
  const [currentDate, setCurrentDate] = useState(new Date()); // Track the current date
  const [selectedEvent, setSelectedEvent]: any = useState(null);
  const [ranges, setRanges]: any = useState(null);
  return (
    <div className="h-full">
      {/* Calendar Component */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        date={currentDate} // Control the current date
        view={currentView} // Control the current view
        onView={(view) => setCurrentView(view)} // Update view when changed
        onNavigate={(date) => setCurrentDate(date)} // Update date when navigating
        style={{
          height: "85vh", // Ensure proper height for the calendar
          backgroundColor: "white",
          padding: "10px",
        }}
        views={["month", "week", "day"]} // Enable different views
        defaultView="month" // Set the default view to month
        onSelecting={({ start, end }) => {
          if (start.getHours() < 9 || end.getHours() > 18) {
            //   alert("Only working hours are allowed!");
            return false;
          }
        }}
        selected={selectedEvent}
        selectable
        onSelectSlot={({ start, end }) => {
          console.log(`Selected range: ${start} to ${end}`);
        }}
        popup={selectedEvent}
        popupOffset={100}
        onSelectEvent={(event) => {
          setSelectedEvent(event); // Set the selected event when clicked
          // alert(`Selected event: ${event.title}`);
        }}
        //   components={{
        //     // Customize the appearance of events
        //     event: ({ event }) => (
        //       <div className="bg-blue-500 text-white rounded px-1 py-0.5 text-xs">
        //         {event.title}
        //       </div>
        //     ),
        //   }}
      />
      {/* {selectedEvent && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={() => setSelectedEvent(null)} // Close modal
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg max-w-md"
              onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
            >
              <h2 className="text-xl font-semibold mb-2">
                {selectedEvent.title}
              </h2>
              <p>
                <strong>Start:</strong>{" "}
                {selectedEvent.start.toLocaleString("en-US")}
              </p>
              <p>
                <strong>End:</strong>{" "}
                {selectedEvent.end.toLocaleString("en-US")}
              </p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
            </div>
          </div>
        )} */}
    </div>
  );
}
