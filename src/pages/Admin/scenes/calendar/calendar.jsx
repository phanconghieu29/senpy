import { useCallback, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from "@fullcalendar/core";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import axios from "axios";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openEventDetailsDialog, setOpenEventDetailsDialog] = useState(false);

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

      const events = response.data.filter(
        (event) => event.status === "scheduled"
      );

      const calendarEvents = events.map((event) => ({
        id: event.schedule_id,
        title: event.title,
        start: event.scheduled_time,
        status: event.status,
        location: event.location,
        allDay: false,
        mentor_name: event.mentor_name, // Include mentor name
        mentee_name: event.mentee_name, // Include mentee name
      }));

      setCurrentEvents(calendarEvents);
    } catch (error) {
      console.error("Error loading schedules:", error);
      alert(`Lỗi tải lịch hẹn: ${error.message}`);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleEventClick = (selected) => {
    setSelectedEvent(selected.event);
    setOpenEventDetailsDialog(true);
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
          <Typography variant="h4">Lịch hẹn</Typography>
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
                    <Typography sx={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                      {event.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Mentor:{" "}
                        {event.mentor_name ||
                          "Không có thông tin"}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Mentee:{" "}
                        {event.mentee_name ||
                          "Không có thông tin"}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Thời gian:{" "}
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    </>
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
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            // dayMaxEvents={true}
            events={currentEvents}
            eventClick={handleEventClick}
          />
        </Box>
      </Box>

      <Dialog
        open={openEventDetailsDialog}
        onClose={() => setOpenEventDetailsDialog(false)}
      >
        {selectedEvent && (
          <>
            <DialogTitle>Thông tin lịch hẹn</DialogTitle>
            <DialogContent>
              <Typography variant="body1">
                Mentor: {selectedEvent.extendedProps.mentor_name}
              </Typography>
              <Typography variant="body1">
                Mentee: {selectedEvent.extendedProps.mentee_name}
              </Typography>
              <Typography variant="body1">
                Địa điểm:{" "}
                {selectedEvent.extendedProps.location || "Không có thông tin"}
              </Typography>
              <Typography variant="body1">
                Thời gian:{" "}
                {formatDate(selectedEvent.start, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setOpenEventDetailsDialog(false)}
                color="primary"
              >
                Đóng
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Calendar;
