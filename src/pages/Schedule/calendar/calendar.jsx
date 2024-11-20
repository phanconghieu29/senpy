import { useState, useEffect, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import "./calendar.scss";
import axios from "axios";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const menteeId = localStorage.getItem("menteeId");
  const userRole = localStorage.getItem("role");

  const fetchEvents = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:2903/api/schedules/get-schedules",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const events = response.data;

      const calendarEvents = events.map((event) => ({
        id: event.schedule_id,
        title: event.title,
        start: event.scheduled_time,
        status: event.status,
        allDay: false,
      }));

      setCurrentEvents(calendarEvents);
    } catch (error) {
      console.error("Error loading schedules:", error);
      alert(`Lỗi tải lịch hẹn: ${error.message}`);
    }
  }, []);

  // Fetch events once on mount
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]); // Dependency array ensures fetchEvents is only called once on mount

  // Handle date click and add event using axios
  const handleDateClick = async (selected) => {
    const title = prompt("Vui lòng nhập chủ đề cho cuộc gặp mặt của bạn:");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        mentee_id: menteeId,
        scheduled_time: selected.startStr,
        status: "pending", // Set to pending by default
        title,
        reason_for_cancel: "",
      };

      try {
        await axios.post(
          "http://localhost:2903/api/schedules/add-schedule",
          newEvent,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        alert("Đặt lịch hẹn thành công, chờ mentor chấp nhận");
        fetchEvents(); // Reload events to reflect the new schedule
      } catch (error) {
        console.error("Error adding schedule:", error);
        alert("Lỗi khi đặt lịch hẹn");
      }
    }
  };

  // Handle event click to delete
  // const handleEventClick = (selected) => {
  //   if (
  //     window.confirm(
  //       `Bạn có chắc chắn muốn xóa cuộc hẹn không '${selected.event.title}'`
  //     )
  //   ) {
  //     selected.event.remove();
  //   }
  // };

  const handleEventClick = async (selected) => {
    console.log("User role:", userRole);

    if (userRole === "mentee") {
      if (
        window.confirm(
          `Bạn có chắc chắn muốn hủy cuộc hẹn '${selected.event.title}'?`
        )
      ) {
        try {
          await axios.delete(
            "http://localhost:2903/api/schedules/delete-schedule",
            {
              data: { scheduleId: selected.event.id },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          selected.event.remove();
          alert("Lịch hẹn đã được hủy");
        } catch (error) {
          console.error("Error deleting schedule:", error);
          alert("Lỗi khi hủy lịch hẹn");
        }
      }
    } else if (userRole === "mentor") {
      const action = window.prompt(
        `Nhập "1" để chấp nhận lịch hẹn hoặc "2" để hủy: ${selected.event.title}`
      );
      if (action === "1") {
        try {
          await axios.post(
            "http://localhost:2903/api/schedules/approve-schedule",
            {
              scheduleId: selected.event.id,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          alert("Lịch hẹn đã được chấp nhận");
          fetchEvents(); // Reload events to reflect the status update
        } catch (error) {
          console.error("Error approving schedule:", error);
          alert("Lỗi khi chấp nhận lịch hẹn");
        }
      } else if (action === "2") {
        try {
          await axios.delete(
            "http://localhost:2903/api/schedules/delete-schedule",
            {
              data: { scheduleId: selected.event.id },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          selected.event.remove();
          alert("Lịch hẹn đã được hủy");
        } catch (error) {
          console.error("Error deleting schedule:", error);
          alert("Lỗi khi hủy lịch hẹn");
        }
      }
    }
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          backgroundColor="gray"
          color="white"
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h4">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: "#3d1ca1",
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={
                    <Typography sx={{ fontSize: "1.4rem" }}>
                      {event.title}
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ fontSize: "1.2rem" }}>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            // headerToolbar={{
            //   left: "prev,next today",
            //   center: "title",
            //   right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            // }}
            buttonText={{
              today: "Hôm nay",
              month: "Tháng",
              week: "Tuần",
              day: "Ngày",
              list: "Danh sách lịch hẹn",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            events={currentEvents}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
