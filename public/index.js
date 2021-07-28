import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "regenerator-runtime/runtime.js";

import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const events = [
  {
    title: "All Day! Event",
    start: "2021-07-01",
    end: "2021-07-01",
    allDay: true,
  },
  {
    title: "Long Event",
    start: "2021-07-07",
    end: "2021-07-10",
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: "2021-07-09T16:00:00",
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: "2021-07-16T16:00:00",
  },
  {
    title: "Conference",
    start: "2021-07-11",
    end: "2021-07-13",
  },
  {
    title: "Meeting",
    start: "2021-07-12T10:30:00",
    end: "2021-07-12T12:30:00",
  },
  {
    title: "Lunch",
    start: "2021-07-12T12:00:00",
  },
  {
    title: "Meeting",
    start: "2021-07-12T14:30:00",
  },
  {
    title: "Birthday Party",
    start: "2021-07-13T07:00:00",
  },
  {
    title: "Click for Google",
    url: "http://google.com/",
    start: "2021-07-28",
  },
];
const calendarEl = document.getElementById("calendar");
let calendar = new Calendar(calendarEl, {
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
  initialView: "dayGridMonth",
  events: events,
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,listWeek",
  },
});
calendar.render();
